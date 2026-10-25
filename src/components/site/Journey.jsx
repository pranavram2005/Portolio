import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { journeyStops } from '../../constants/index.js';
import Reveal from '../Reveal.jsx';

const ROUTE_D =
  'M350 40 C 150 140, 150 200, 150 300 C 150 420, 550 420, 550 540 C 550 660, 350 700, 350 800';

/**
 * Scroll-drawn career path with a rocket riding the line.
 *
 * The brass trace is revealed by animating its dash offset against scroll
 * progress, and the rocket is placed at the matching point on the path and
 * rotated along its tangent.
 */
const Journey = () => {
  const svgRef = useRef(null);
  const traceRef = useRef(null);
  const rocketRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const trace = traceRef.current;
    const rocket = rocketRef.current;
    if (!svg || !trace || !rocket) return;

    const length = trace.getTotalLength();
    trace.style.strokeDasharray = String(length);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      trace.style.strokeDashoffset = '0';
      return;
    }

    trace.style.strokeDashoffset = String(length);
    let frame = 0;

    const update = () => {
      frame = 0;
      const box = svg.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(Math.max((vh * 0.8 - box.top) / (box.height + vh * 0.5), 0), 1);

      trace.style.strokeDashoffset = String(length * (1 - progress));

      const at = trace.getPointAtLength(length * progress);
      const next = trace.getPointAtLength(Math.min(length * progress + 1, length));
      const angle = (Math.atan2(next.y - at.y, next.x - at.x) * 180) / Math.PI;

      const vb = svg.viewBox.baseVal;
      rocket.style.left = `${at.x * (box.width / vb.width)}px`;
      rocket.style.top = `${at.y * (box.height / vb.height)}px`;
      rocket.style.transform = `translate(-50%,-50%) rotate(${angle + 45}deg)`;
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
    <section className="p-section relative bg-parch">
      <div className="wrap text-center">
        <Reveal>
          <p className="p-eyebrow justify-center text-brass-lo">The route so far</p>
          <h2 className="p-title">
            From <span className="scribble">IIT Madras</span> to shipped.
          </h2>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-14 max-w-[760px] px-7">
        <svg
          ref={svgRef}
          viewBox="0 0 700 820"
          preserveAspectRatio="xMidYMid meet"
          className="h-auto w-full overflow-visible"
          aria-hidden="true">
          <path
            d={ROUTE_D}
            fill="none"
            stroke="rgba(20,32,43,0.14)"
            strokeWidth="3"
            strokeDasharray="2 10"
            strokeLinecap="round"
          />
          <path ref={traceRef} d={ROUTE_D} fill="none" stroke="#b08540" strokeWidth="4" strokeLinecap="round" />
        </svg>

        <div
          ref={rocketRef}
          aria-hidden="true"
          className="absolute z-[3] text-[2rem] drop-shadow-[0_6px_10px_rgba(0,0,0,0.2)]">
          🚀
        </div>

        {journeyStops.map((stop) => (
          <div
            key={stop.title}
            className="absolute w-[210px] -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ left: stop.left, top: stop.top }}>
            <Reveal>
              <div className="mx-auto mb-2.5 h-4 w-4 rounded-full bg-brass shadow-[0_0_0_6px_rgba(176,133,64,0.18)]" />
              <div className="rounded-2xl bg-parch/85 px-3 py-2 backdrop-blur-[2px]">
                <h4 className="font-serif text-[1.4rem] font-semibold">{stop.title}</h4>
                <p className="text-[13.5px] text-tx-dim">
                  {stop.text}{' '}
                  {stop.linkTo && (
                    <Link to={stop.linkTo} className="border-b border-brass text-brass">
                      {stop.linkLabel}
                    </Link>
                  )}
                </p>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
