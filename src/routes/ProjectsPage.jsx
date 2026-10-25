import PageHero from '../components/site/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { myProjects } from '../constants/index.js';

/**
 * Overlapping pair of screenshots: the main screen with a second view tucked
 * into the lower corner, so both read without either being cropped.
 */
const ShotPair = ({ images, title }) => (
  <div className="relative pb-14 pr-4 sm:pr-8">
    <div className="overflow-hidden rounded-[22px] border border-ink/[0.14] bg-parch-panel shadow-[0_24px_50px_-34px_rgba(20,32,43,0.6)]">
      <img
        src={images[0]}
        alt={`${title} screenshot`}
        loading="lazy"
        className="aspect-[1365/627] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
      />
    </div>

    {images[1] && (
      <div className="absolute bottom-0 right-0 w-[58%] overflow-hidden rounded-[14px] border-4 border-parch bg-parch-panel shadow-[0_18px_40px_-20px_rgba(20,32,43,0.7)]">
        <img
          src={images[1]}
          alt={`${title}, second view`}
          loading="lazy"
          className="aspect-[1365/627] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
        />
      </div>
    )}
  </div>
);

const Points = ({ points }) => (
  <ul className="mt-4 flex flex-col gap-2">
    {points.map((point) => (
      <li key={point.slice(0, 32)} className="relative pl-5 text-[15px] text-[#3a3b33]">
        <span className="absolute left-0 top-[0.75em] h-px w-3 bg-brass" />
        {point}
      </li>
    ))}
  </ul>
);

const ProjectsPage = () => {
  const lead = myProjects.find((project) => project.featured);
  const rest = myProjects.filter((project) => !project.featured);

  return (
    <>
      <PageHero eyebrow="🛠️ Projects" title={<>Things I’ve built,{<br />}end to end.</>}>
        Each of these shipped to real users. The frontend was mine — components, state,
        responsiveness and the API wiring behind them.
      </PageHero>

      {/* --- lead case study, given its own band --- */}
      {lead && (
        <section className="p-section bg-parch-2">
          <div className="wrap">
            <Reveal>
              <span
                className="inline-flex items-center gap-2 rounded-full border border-brass/50 bg-brass/10 px-4 py-2
                           font-mono text-[10px] uppercase tracking-[0.22em] text-brass-lo">
                ◆ The main case study
              </span>

              <h2 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.4rem)] font-medium leading-tight">
                {lead.title}
              </h2>

              <p className="mt-4 max-w-[62ch] font-serif text-[clamp(1.15rem,2vw,1.45rem)] italic leading-snug text-[#3a3b33]">
                {lead.featuredNote}
              </p>
            </Reveal>

            {/* both captures side by side — this is the project to look at */}
            <Reveal stagger={0.1} className="mt-10 grid gap-6 md:grid-cols-2">
              {lead.images.map((src, i) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-[20px] border border-ink/[0.14] bg-parch-panel shadow-[0_24px_50px_-34px_rgba(20,32,43,0.6)]">
                  <img
                    src={src}
                    alt={`${lead.title} — view ${i + 1}`}
                    className="aspect-[1365/627] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.08} className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <div className="flex items-center gap-3">
                  {lead.logo && (
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-ink/[0.14] bg-parch-panel">
                      <img src={lead.logo} alt="" className="h-7 w-7 object-contain" />
                    </span>
                  )}
                  <div>
                    <div className="font-serif text-[2.6rem] font-semibold leading-none text-brass">
                      {lead.metric.value}
                    </div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-tx-dim">
                      {lead.metric.label}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-[#3a3b33]">{lead.summary}</p>
                <p className="mt-4 font-mono text-xs text-brass">{lead.stack.join(' · ')}</p>
              </div>

              <div>
                <Points points={lead.points} />

                <div className="mt-7 flex flex-wrap items-center gap-5">
                  <a
                    href={lead.caseStudy}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[40px] bg-ink px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.12em]
                               text-tx-ink transition-colors duration-300 hover:bg-brass hover:text-white">
                    Read the UX case study ↗
                  </a>
                  <a
                    href={lead.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[12px] uppercase tracking-[0.12em] text-tx-dim
                               underline-offset-4 transition-colors hover:text-brass hover:underline">
                    Visit live site ↗
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* --- everything else --- */}
      <section className="p-section bg-parch">
        <div className="wrap">
          <Reveal>
            <p className="p-eyebrow">The rest of the work</p>
            <h2 className="p-title mb-6">Other interfaces I owned.</h2>
          </Reveal>

          {rest.map((project, index) => (
            <article
              key={project.id}
              className="grid items-center gap-8 border-b border-ink/[0.14] py-12 last:border-b-0
                         lg:grid-cols-2 lg:gap-12 lg:py-16">
              {/* artwork — alternates side on desktop */}
              <Reveal
                direction={index % 2 ? 'right' : 'left'}
                className={index % 2 ? 'lg:order-2' : ''}>
                <ShotPair images={project.images} title={project.title} />
              </Reveal>

              {/* copy */}
              <Reveal direction={index % 2 ? 'left' : 'right'} delay={0.08}>
                <div className="flex items-center gap-3">
                  {project.logo && (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-ink/[0.14] bg-parch-panel">
                      <img
                        src={project.logo}
                        alt=""
                        loading="lazy"
                        className="h-6 w-6 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.visibility = 'hidden';
                        }}
                      />
                    </span>
                  )}
                  <div className="font-serif text-[2.6rem] font-semibold leading-none text-brass">
                    {project.metric.value}
                  </div>
                </div>

                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-tx-dim">
                  {project.metric.label}
                </p>

                <h3 className="mt-2 font-serif text-[2.2rem] font-medium leading-tight">
                  {project.title}
                </h3>

                <p className="mt-3.5 text-[#3a3b33]">{project.summary}</p>

                <Points points={project.points} />

                <p className="mt-4 font-mono text-xs text-brass">{project.stack.join(' · ')}</p>

                {project.href && project.href !== '#' && (
                  <div className="mt-6">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[12px] uppercase tracking-[0.12em] text-tx-dim
                                 underline-offset-4 transition-colors hover:text-brass hover:underline">
                      View project ↗
                    </a>
                  </div>
                )}
              </Reveal>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
