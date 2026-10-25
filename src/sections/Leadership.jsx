import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { leadership } from '../constants/index.js';
import useParallax from '../hooks/useParallax.js';

const Leadership = () => {
  const numeralRef = useParallax(-70);

  return (
    <section id="leadership" className="section-pad relative overflow-hidden">
      <div ref={numeralRef} className="ghost-numeral absolute -right-4 top-16 hidden lg:block">
        05
      </div>

      <div className="section-shell">
        <SectionHeader
          index="05"
          label="LEADERSHIP"
          title="Teams I have run the web side of."
          accent="amber"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {leadership.map((role, index) => (
            <Reveal key={role.id} direction="up" delay={index * 0.08} className="h-full">
              <div className="glass glass-hover h-full glass-pad">
                <span className="font-mono text-[11px] tracking-[0.2em] text-accent-amber">
                  {role.duration}
                </span>
                <h3 className="display-md mt-4">{role.role}</h3>
                <p className="mt-4 font-generalsans text-[15px] leading-relaxed text-white-600">
                  {role.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
