import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Drifts an element vertically as the page scrolls past it.
 *
 * `distance` is the total travel in pixels across the element's scroll span -
 * negative moves it up (faster than the page), positive moves it down.
 */
export const useParallax = (distance = -80) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 0 },
        {
          y: distance,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [distance]);

  return ref;
};

export default useParallax;
