import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { about } from '../constants/index.js';
import useParallax from '../hooks/useParallax.js';

const About = () => {
  const numeralRef = useParallax(-70);

  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div ref={numeralRef} className="ghost-numeral absolute -right-4 top-10 hidden lg:block">
        01
      </div>

      <div className="section-shell">
        <SectionHeader index="01" label="ABOUT" title={about.headline} accent="cyan" />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* narrative */}
          <Reveal direction="up" stagger={0.14} className="flex flex-col gap-6">
            {about.paragraphs.map((text) => (
              <p key={text.slice(0, 32)} className="body-text">
                {text}
              </p>
            ))}
          </Reveal>

          {/* fact sheet */}
          <Reveal direction="right" delay={0.1}>
            <div className="glass glass-pad">
              <p className="eyebrow-dim">EDUCATION &amp; ACHIEVEMENTS</p>

              <dl className="mt-6 flex flex-col">
                {about.facts.map((fact, index) => (
                  <div
                    key={fact.label}
                    className={`py-4 ${index > 0 ? 'border-t border-white/10' : 'pt-0'}`}>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-indigo">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 font-generalsans text-[15px] leading-relaxed text-white-700">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
