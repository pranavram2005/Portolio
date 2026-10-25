import { useGSAP } from '@gsap/react';
import { useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useRef } from 'react';

const Target = (props) => {
  const targetRef = useRef();

  // Local matcap texture - the original remote model URL is no longer reachable,
  // so the target is built procedurally from concentric rings instead.
  const matcap = useTexture('textures/rings.png');

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });

    gsap.to(targetRef.current.rotation, {
      y: `+=${Math.PI * 2}`,
      duration: 12,
      repeat: -1,
      ease: 'none',
    });
  });

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {[1, 0.7, 0.4].map((radius, index) => (
        <mesh key={index}>
          <torusGeometry args={[radius, 0.08, 16, 48]} />
          <meshMatcapMaterial matcap={matcap} toneMapped={false} />
        </mesh>
      ))}

      <mesh>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshMatcapMaterial matcap={matcap} toneMapped={false} />
      </mesh>
    </group>
  );
};

export default Target;
