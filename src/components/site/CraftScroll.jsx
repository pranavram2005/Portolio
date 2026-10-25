import { useEffect, useRef } from 'react';

import { craftPanels } from '../../constants/index.js';

/**
 * Pinned horizontal scroll band.
 *
 * The section is tall; its inner sticky layer holds the viewport while the
 * track slides sideways in proportion to how far through the section the
 * page has scrolled. Under reduced motion it degrades to an ordinary
 * horizontally-scrollable row.
 */
const CraftScroll = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const total = section.offsetHeight - window.innerHeight;
      if (total <= 0) return;

      const progress = Math.min(Math.max(-section.getBoundingClientRect().top / total, 0), 1);
      const distance = Math.max(track.scrollWidth - window.innerWidth + 28, 0);
      track.style.transform = `translateX(${-progress * distance}px)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="craft" ref={sectionRef} className="relative bg-ink text-tx-ink" style={{ height: '340vh' }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-8 w-full max-w-[1140px] px-7">
          <p className="p-eyebrow text-brass">Keep scrolling →</p>
          <h2 className="p-title text-tx-ink">What I love building.</h2>
        </div>

        <div ref={trackRef} className="flex gap-7 px-7 will-change-transform">
          {craftPanels.map((panel) => (
            <article
              key={panel.num}
              className="relative w-[min(74vw,440px)] shrink-0 overflow-hidden rounded-[20px]
                         border border-tx-ink/[0.16] bg-ink-soft p-8">
              <span
                className="absolute -bottom-12 -right-10 h-[180px] w-[180px] rounded-full opacity-40 blur-[30px]"
                style={{ background: panel.tint }}
              />
              <span className="relative font-mono text-xs tracking-[0.2em] text-brass">{panel.num}</span>
              <span className="relative mb-2 mt-3.5 block text-[2.6rem]">{panel.emoji}</span>
              <h3 className="relative font-serif text-[1.9rem] font-medium text-white">{panel.title}</h3>
              <p className="relative mt-3 text-[15px] text-[#c3ccd2]">{panel.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftScroll;
