import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative mt-20" id="home">
      <div className="w-full mx-auto flex flex-col c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Pranav Ram PS <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">UI/UX Frontend Developer</p>
      </div>

    <div className="w-full h-full absolute inset-0">
  <Canvas className="w-full h-full">
    <Suspense fallback={<CanvasLoader />}>
      <Leva hidden />
      <PerspectiveCamera makeDefault position={[0, 0, 30]} />

      <HeroCamera isMobile={isMobile}>
        {/* HackerRoom removed */}
        {/* You can place empty group or camera props if needed */}
      </HeroCamera>

      <group>
        <Target position={sizes.targetPosition} />
        <ReactLogo position={sizes.reactLogoPosition} />
        <Rings position={sizes.ringPosition} />
        <Cube position={sizes.cubePosition} />
      </group>

      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} />
    </Suspense>
  </Canvas>

  {/* ✅ GIF overlay */}
 <DotLottieReact
      src="https://lottie.host/fb8f5a05-a6a7-4197-9eaa-ff343af2a6f7/D0o1YWgYu7.lottie"
      loop
      autoplay
      className="absolute h-[450px] w-[750px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full pointer-events-none"

    />
</div>


      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="https://github.com/pranavram2005" target='_blank' className="w-fit">
          <Button name="GitHub Profile" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
