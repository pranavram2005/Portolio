import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';

import Cube from '../components/Cube.jsx';
import SignalOcean from '../components/SignalOcean.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import CanvasLoader from '../components/Loading.jsx';
import Marquee from '../components/Marquee.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Rings from '../components/Rings.jsx';
import Target from '../components/Target.jsx';
import { calculateSizes, CONTACT, hero, marqueeItems } from '../constants/index.js';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col overflow-hidden bg-ink">
      {/* --- background: interactive particle ocean --- */}
      <div className="absolute inset-0">
        <SignalOcean />
      </div>

      <div className="pointer-events-none absolute inset-0">
        {/* ambient glow behind the headline */}
        <div className="glow-blob absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 animate-glow-pulse" />
      </div>

      {/* --- 3D scene --- */}
      <div className="pointer-events-none absolute inset-0">
        <Canvas className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Rings position={sizes.ringPosition} />
                <Cube position={sizes.cubePosition} />
              </group>
            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>

        {/* lottie illustration, centred behind the copy */}
        <DotLottieReact
          src="https://lottie.host/fb8f5a05-a6a7-4197-9eaa-ff343af2a6f7/D0o1YWgYu7.lottie"
          loop
          autoplay
          className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[640px] max-w-full
                     -translate-x-1/2 -translate-y-1/2 opacity-40 lg:left-[72%] lg:opacity-70"
        />
      </div>

      {/* Scrim: keeps the copy legible wherever the 3D objects drift. */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/70 to-ink/45 lg:from-ink/80 lg:via-ink/25 lg:to-transparent"
        aria-hidden="true"
      />

      {/* --- copy --- */}
      <div className="section-shell relative z-10 flex flex-1 flex-col justify-center pb-40 pt-32">
        <p className="eyebrow animate-glow-pulse">{hero.eyebrow}</p>

        <h1 className="display-xl mt-6">
          {hero.name} <span className="text-outline">{hero.nameOutline}</span>
        </h1>

        <p className="body-text mt-7 max-w-xl">{hero.tagline}</p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="pill-solid"
            onClick={() =>
              document
                .getElementById('craft')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }>
            Start the journey ↓
          </button>
          <a href={`mailto:${CONTACT.email}`} className="pill-ghost">
            Say hi
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-2">
          {hero.hints.map((hint) => (
            <li key={hint} className="font-mono text-[11px] tracking-[0.18em] text-white-500">
              {hint}
            </li>
          ))}
        </ul>
      </div>

      {/* --- tech ticker --- */}
      <div className="relative z-10 border-y border-tx-ink/15 bg-ink-2/70 py-4 backdrop-blur-sm">
        <Marquee items={marqueeItems} />
      </div>

      {/* scroll affordance */}
      <div className="pointer-events-none absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="font-mono text-[10px] tracking-[0.3em] text-white-500">SCROLL</span>
        <span className="h-8 w-px animate-scroll-hint bg-gradient-to-b from-brass to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
