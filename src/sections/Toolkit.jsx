import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { toolkit } from '../constants/index.js';
import useParallax from '../hooks/useParallax.js';

const Toolkit = () => {
  const numeralRef = useParallax(-70);

  return (
    <section id="toolkit" className="section-pad relative overflow-hidden">
      <div ref={numeralRef} className="ghost-numeral absolute -left-4 top-16 hidden lg:block">
        02
      </div>

      <div className="section-shell">
        <SectionHeader index="02" label="TOOLKIT" title={toolkit.summary} accent="indigo" size="md" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {toolkit.groups.map((group, index) => (
            <Reveal key={group.label} direction="up" delay={index * 0.06} className="h-full">
              <div className="glass glass-hover h-full p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-indigo">
                  {group.label}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
