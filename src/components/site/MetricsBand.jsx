import { useEffect, useRef, useState } from 'react';

import { homeMetrics } from '../../constants/index.js';

/** Counts from zero to `target` once the tile scrolls into view. */
const CountUp = ({ target, suffix = '' }) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        const duration = 1200;
        let start = null;
        const step = (ts) => {
          if (start === null) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {value}
      {suffix && <span className="align-super text-[0.4em]">{suffix}</span>}
    </span>
  );
};

/** Ink band of headline numbers. */
const MetricsBand = () => (
  <section className="p-section bg-ink-2 text-tx-ink">
    <div className="wrap">
      <div className="grid gap-5 text-center sm:grid-cols-3">
        {homeMetrics.map((metric) => (
          <div key={metric.label}>
            <div className="font-serif text-[clamp(2.6rem,7vw,4.4rem)] font-semibold leading-none text-brass">
              {metric.count !== undefined ? (
                <CountUp target={metric.count} suffix={metric.suffix} />
              ) : (
                metric.value
              )}
            </div>
            <div className="mt-2 font-mono text-[11.5px] uppercase tracking-[0.14em] text-tx-inkdim">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsBand;
