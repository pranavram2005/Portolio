import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { workExperiences } from '../constants/index.js';
import useParallax from '../hooks/useParallax.js';

const Experience = () => {
  const numeralRef = useParallax(-70);

  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      <div ref={numeralRef} className="ghost-numeral absolute -right-4 top-16 hidden lg:block">
        03
      </div>

      <div className="section-shell">
        <SectionHeader
          index="03"
          label="EXPERIENCE"
          title="Four teams, one job: turn a design into an interface that holds."
          accent="violet"
        />

        <div className="relative mt-14">
          {/* timeline spine - decorative, hidden from assistive tech */}
          <div
            className="absolute bottom-0 left-0 top-0 hidden w-px bg-gradient-to-b from-accent-violet
                       via-accent-indigo to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-6 lg:pl-12">
            {workExperiences.map((job, index) => (
              <Reveal key={job.id} direction="up" delay={index * 0.05}>
                <article className="glass glass-hover group relative glass-pad">
                  {/* timeline node */}
                  <span
                    className="absolute -left-12 top-10 hidden h-3 w-3 -translate-x-1/2 rounded-full
                               border-2 border-accent-violet bg-navy-900 transition-all duration-500
                               group-hover:scale-150 group-hover:bg-accent-violet lg:block"
                    aria-hidden="true"
                  />

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-white-500">
                      {job.duration}
                    </span>
                    <span className="badge">{job.badge}</span>
                  </div>

                  <div className="mt-5 flex items-center gap-4">
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                      <img
                        src={job.icon}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.visibility = 'hidden';
                        }}
                      />
                    </div>
                    <h3 className="display-md">
                      {job.pos} <span className="text-white-500">·</span> {job.name}
                    </h3>
                  </div>

                  <p className="mt-4 font-generalsans text-[15px] leading-relaxed text-accent-cyan">
                    {job.summary}
                  </p>

                  <ul className="dash-list mt-5">
                    {job.points.map((point) => (
                      <li key={point.slice(0, 32)} className="dash-item">
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
