import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MAX_PULSES = 8;

/**
 * Interactive particle ocean behind the hero.
 *
 * Ported from the signal-journey scene in portfolio_final: a GPU-displaced
 * point grid that ripples under the cursor and throws an expanding pulse ring
 * on click, with a drifting starfield and cursor parallax on the camera.
 *
 * Runs on its own canvas and its own raw three.js renderer so the shader's
 * array uniforms stay straightforward.
 */
const SignalOcean = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch {
      // No WebGL - leave the canvas blank; the hero reads fine without it.
      return;
    }

    const parent = canvas.parentElement;
    const width = () => parent?.clientWidth || window.innerWidth;
    const height = () => parent?.clientHeight || window.innerHeight;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width(), height(), false);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x14202b, 0.016);

    const camera = new THREE.PerspectiveCamera(55, width() / height(), 0.1, 400);
    camera.position.set(0, 7.5, 20);

    const isMobile = window.innerWidth < 800;

    /* ---------------- ocean ---------------- */
    const W = 190;
    const D = 300;
    const ZC = -110;
    const SEGX = isMobile ? 110 : 170;
    const SEGZ = isMobile ? 150 : 230;
    const count = (SEGX + 1) * (SEGZ + 1);

    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    let vi = 0;
    for (let zi = 0; zi <= SEGZ; zi++) {
      for (let xi = 0; xi <= SEGX; xi++) {
        positions[vi * 3] = (xi / SEGX - 0.5) * W;
        positions[vi * 3 + 1] = 0;
        positions[vi * 3 + 2] = (zi / SEGZ - 0.5) * D + ZC;
        seeds[vi] = Math.random();
        vi++;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(999, 999) },
      uMouseStrength: { value: 0 },
      uPulses: {
        value: Array.from({ length: MAX_PULSES }, () => new THREE.Vector3(999, 999, -100)),
      },
      uColorDeep: { value: new THREE.Color(0x1b2b39) },
      uColorMid: { value: new THREE.Color(0xb08540) },
      uColorGlow: { value: new THREE.Color(0xeae3d4) },
      uSize: { value: isMobile ? 2.8 : 2.5 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uMouseStrength;
        uniform vec3 uPulses[${MAX_PULSES}];
        uniform float uSize;
        attribute float aSeed;
        varying float vElev;
        varying float vDist;

        void main() {
          vec3 p = position;

          // layered swell
          float e = sin(p.x * 0.14 + uTime * 0.7) * 0.55
                  + sin(p.z * 0.19 - uTime * 0.5) * 0.45
                  + sin((p.x + p.z) * 0.075 + uTime * 0.32) * 0.7
                  + sin(p.x * 0.36 - uTime * 1.1) * 0.16 * aSeed;

          // cursor ripple
          float md = distance(p.xz, uMouse);
          e += sin(md * 1.15 - uTime * 5.0) * exp(-md * 0.22) * 2.6 * uMouseStrength;

          // click pulses, expanding and decaying
          for (int k = 0; k < ${MAX_PULSES}; k++) {
            float age = uTime - uPulses[k].z;
            if (age > 0.0 && age < 6.0) {
              float pd = distance(p.xz, uPulses[k].xy);
              float ring = pd - age * 9.0;
              e += sin(ring * 1.4) * exp(-ring * ring * 0.02) * exp(-age * 0.75) * 3.2;
            }
          }

          p.y = e;
          vElev = e;

          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vDist = -mv.z;
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize * (1.0 + max(e, 0.0) * 0.5) * (34.0 / -mv.z);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColorDeep;
        uniform vec3 uColorMid;
        uniform vec3 uColorGlow;
        varying float vElev;
        varying float vDist;

        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          if (d > 0.5) discard;
          float alpha = smoothstep(0.5, 0.05, d);

          float t = smoothstep(-1.6, 1.2, vElev);
          vec3 col = mix(uColorDeep, uColorMid, t);
          col = mix(col, uColorGlow, smoothstep(1.1, 2.6, vElev));

          float fade = smoothstep(80.0, 12.0, vDist);
          gl_FragColor = vec4(col, alpha * (0.4 + 0.6 * t) * fade);
        }
      `,
    });

    const ocean = new THREE.Points(geo, material);
    scene.add(ocean);

    /* ---------------- stars ---------------- */
    const starCount = isMobile ? 380 : 700;
    const sPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      sPos[i * 3] = (Math.random() - 0.5) * 300;
      sPos[i * 3 + 1] = 8 + Math.random() * 80;
      sPos[i * 3 + 2] = 50 - Math.random() * 360;
    }
    const sGeo = new THREE.BufferGeometry();
    sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));

    const starCanvas = document.createElement('canvas');
    starCanvas.width = 32;
    starCanvas.height = 32;
    const sctx = starCanvas.getContext('2d');
    const grad = sctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(245,238,224,1)');
    grad.addColorStop(0.4, 'rgba(176,133,64,0.55)');
    grad.addColorStop(1, 'rgba(176,133,64,0)');
    sctx.fillStyle = grad;
    sctx.fillRect(0, 0, 32, 32);

    const starTex = new THREE.CanvasTexture(starCanvas);
    const starMat = new THREE.PointsMaterial({
      map: starTex,
      size: 0.9,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const stars = new THREE.Points(sGeo, starMat);
    scene.add(stars);

    /* ---------------- input ---------------- */
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const ndc = new THREE.Vector2();
    const hit = new THREE.Vector3();
    const targetMouse = new THREE.Vector2(999, 999);
    const parallax = { x: 0, y: 0 };
    let targetStrength = 0;
    let pulseIdx = 0;
    let clockTime = 0;

    // Map a screen point onto the ocean plane in world space.
    const pointTo = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      ndc.set(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        -((clientY - rect.top) / rect.height) * 2 + 1,
      );
      raycaster.setFromCamera(ndc, camera);
      const landed = raycaster.ray.intersectPlane(plane, hit);
      if (landed) {
        targetMouse.set(hit.x, hit.z);
        targetStrength = 1;
      }
      parallax.x = ndc.x;
      parallax.y = ndc.y;
      return landed;
    };

    const onMove = (e) => pointTo(e.clientX, e.clientY);
    const onLeave = () => {
      targetStrength = 0;
    };
    const onDown = (e) => {
      // Let real controls keep their click.
      if (e.target?.closest?.('a, button, input, textarea, label')) return;
      if (!pointTo(e.clientX, e.clientY)) return;
      uniforms.uPulses.value[pulseIdx].set(hit.x, hit.z, clockTime);
      pulseIdx = (pulseIdx + 1) % MAX_PULSES;
    };

    // Listen on the whole hero, not just the canvas wrapper: the copy and the
    // 3D layer are siblings, so events over the headline never reach us
    // otherwise and the ripple dies across the most-looked-at part of the page.
    const host = canvas.closest('section') || parent || window;
    host.addEventListener('pointermove', onMove, { passive: true });
    host.addEventListener('pointerleave', onLeave);
    host.addEventListener('pointerdown', onDown);

    /* ---------------- resize ---------------- */
    const onResize = () => {
      camera.aspect = width() / height();
      camera.updateProjectionMatrix();
      renderer.setSize(width(), height(), false);
    };
    window.addEventListener('resize', onResize);

    /* ---------------- loop ---------------- */
    const clock = new THREE.Clock();
    const lerp = (a, b, k) => a + (b - a) * k;
    const basePos = new THREE.Vector3(0, 7.5, 20);
    const camLook = new THREE.Vector3(0, 1, -6);
    const lookTarget = new THREE.Vector3(0, 1, -6);
    const desired = new THREE.Vector3();

    renderer.setAnimationLoop(() => {
      clockTime = clock.getElapsedTime();
      uniforms.uTime.value = reduceMotion ? 10 : clockTime;

      uniforms.uMouse.value.lerp(targetMouse, 0.12);
      uniforms.uMouseStrength.value = lerp(
        uniforms.uMouseStrength.value,
        targetStrength,
        0.06,
      );

      // gentle cursor parallax around the resting camera position
      desired.copy(basePos);
      if (!reduceMotion) {
        desired.x += parallax.x * 2.2;
        desired.y += parallax.y * 0.9;
      }
      camera.position.lerp(desired, 0.06);
      camLook.lerp(lookTarget, 0.07);
      camera.lookAt(camLook);

      renderer.render(scene, camera);
    });

    /* ---------------- teardown ---------------- */
    return () => {
      renderer.setAnimationLoop(null);
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
      host.removeEventListener('pointerdown', onDown);
      window.removeEventListener('resize', onResize);

      geo.dispose();
      material.dispose();
      sGeo.dispose();
      starMat.dispose();
      starTex.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
};

export default SignalOcean;
