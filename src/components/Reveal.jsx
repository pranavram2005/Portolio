import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const FROM = {
  up: { y: 26, x: 0 },
  down: { y: -26, x: 0 },
  left: { x: -36, y: 0 },
  right: { x: 36, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Fades content in as it scrolls into view.
 *
 * `stagger` animates direct children one after another instead of the
 * wrapper as a whole - used for card grids and chip rows.
 */
const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.9,
  stagger = 0,
  start = 'top 85%',
  className = '',
  as: Tag = 'div',
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: show everything immediately, animate nothing.
    if (prefersReducedMotion()) {
      const targets = stagger ? el.children : el;
      gsap.set(targets, { opacity: 1, x: 0, y: 0, clearProps: 'all' });
      el.classList.remove('reveal-init');
      return;
    }

    const targets = stagger ? Array.from(el.children) : el;
    const offset = FROM[direction] ?? FROM.up;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, ...offset },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start, once: true },
          onStart: () => el.classList.remove('reveal-init'),
          onComplete: () => gsap.set(targets, { clearProps: 'transform' }),
        },
      );
    }, el);

    return () => ctx.revert();
  }, [direction, delay, duration, stagger, start]);

  return (
    <Tag ref={ref} className={`reveal-init ${className}`}>
      {children}
    </Tag>
  );
};

export default Reveal;
