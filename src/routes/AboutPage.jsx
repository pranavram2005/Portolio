import PageHero from '../components/site/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { about, funFacts, leadership, toolkit, workExperiences } from '../constants/index.js';

const AboutPage = () => (
  <>
    <PageHero eyebrow="👋 About" title={<>Engineer by craft,{<br />}designer by habit.</>}>
      {about.headline}
    </PageHero>

    {/* --- lede + facts --- */}
    <section className="p-section bg-parch">
      <div className="wrap grid gap-14 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
        <Reveal>
          <p className="p-lead">{about.paragraphs[0]}</p>
          {about.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="mt-6 text-[#3c3d35]">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <dl>
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="mb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-brass">
                  {fact.label}
                </dt>
                <dd className="mb-5 text-[15.5px] text-[#3c3d35]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>

    {/* --- toolkit --- */}
    <section className="p-section bg-parch-2">
      <div className="wrap">
        <Reveal>
          <p className="p-eyebrow">The toolkit</p>
          <h2 className="p-title">What I reach for.</h2>
          <p className="mt-5 max-w-[60ch] text-tx-dim">{toolkit.summary}</p>
        </Reveal>

        <Reveal stagger={0.07} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {toolkit.groups.map((group) => (
            <div key={group.label} className="p-card">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass">{group.label}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-ink/[0.14] bg-parch px-3 py-1.5 font-mono text-[11.5px] text-tx-dim">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* --- timeline --- */}
    <section className="p-section bg-parch">
      <div className="wrap">
        <Reveal>
          <p className="p-eyebrow">Experience</p>
          <h2 className="p-title mb-11">How I got here.</h2>
        </Reveal>

        <div className="tl">
          {workExperiences.map((job) => (
            <Reveal key={job.id} className="tl-item">
              <span className="font-mono text-xs tracking-[0.05em] text-tx-dim">{job.duration}</span>
              <h4 className="mt-0.5 font-serif text-2xl font-semibold">{job.pos}</h4>
              <p className="font-serif italic text-brass-lo">{job.name}</p>
              <p className="mt-1.5 text-[15px] text-[#3a3b33]">{job.summary}</p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {job.points.map((point) => (
                  <li key={point.slice(0, 32)} className="relative pl-5 text-[14.5px] text-[#3a3b33]">
                    <span className="absolute left-0 top-[0.7em] h-px w-3 bg-brass" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* --- leadership --- */}
    <section className="p-section bg-parch-2">
      <div className="wrap">
        <Reveal>
          <p className="p-eyebrow">Beyond the job</p>
          <h2 className="p-title mb-11">Teams I’ve led.</h2>
        </Reveal>

        <Reveal stagger={0.08} className="grid gap-6 md:grid-cols-3">
          {leadership.map((role) => (
            <div key={role.id} className="p-card">
              <p className="font-mono text-[11px] tracking-[0.12em] text-brass">{role.duration}</p>
              <h3 className="mt-3 font-serif text-[1.4rem] font-semibold leading-snug">{role.role}</h3>
              <p className="mt-2.5 text-[14.5px] text-tx-dim">{role.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* --- fun facts --- */}
    <section className="p-section bg-parch">
      <div className="wrap">
        <Reveal>
          <h2 className="p-title mb-10">A few true things.</h2>
        </Reveal>

        <Reveal stagger={0.08} className="grid gap-5 md:grid-cols-3">
          {funFacts.map((fact) => (
            <div key={fact.title} className="p-card transition-transform duration-500 hover:-translate-y-1.5">
              <span className="text-[2rem]">{fact.emoji}</span>
              <h4 className="mt-2.5 font-serif text-[1.3rem]">{fact.title}</h4>
              <p className="mt-1.5 text-sm text-tx-dim">{fact.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  </>
);

export default AboutPage;
