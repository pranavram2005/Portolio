import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { vision } from '../constants/index.js';
import useParallax from '../hooks/useParallax.js';

const Vision = () => {
  const numeralRef = useParallax(-70);

  return (
    <section id="vision" className="section-pad relative overflow-hidden">
      <div ref={numeralRef} className="ghost-numeral absolute -left-4 top-16 hidden lg:block">
        06
      </div>

      <div className="section-shell">
        <SectionHeader index="06" label="VISION" accent="violet" />

        <Reveal direction="up" delay={0.08}>
          <h2 className="display-lg mt-6 max-w-4xl">
            {vision.headline} <span className="text-accent-cyan">{vision.headlineAccent}</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.14}>
          <p className="body-text mt-6 max-w-2xl">{vision.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {vision.principles.map((principle, index) => (
            <Reveal key={principle.label} direction="up" delay={index * 0.08} className="h-full">
              <div className="glass glass-hover h-full glass-pad">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-violet">
                  {principle.label}
                </p>
                <p className="mt-4 font-generalsans text-[15px] leading-relaxed text-white-600">
                  {principle.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.1}>
          <p className="mt-12 font-mono text-sm tracking-[0.18em] text-white-500">
            “{vision.quote}”
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Vision;
