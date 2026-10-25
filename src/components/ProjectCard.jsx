import { useState } from 'react';

const ACCENT_RING = {
  indigo: 'hover:border-accent-indigo/50',
  cyan: 'hover:border-accent-cyan/50',
  violet: 'hover:border-accent-violet/50',
  blue: 'hover:border-accent-blue/50',
  amber: 'hover:border-accent-amber/50',
};

const ACCENT_WASH = {
  indigo: 'from-accent-indigo/30',
  cyan: 'from-accent-cyan/30',
  violet: 'from-accent-violet/30',
  blue: 'from-accent-blue/30',
  amber: 'from-accent-amber/30',
};

/**
 * Project card with a cover image above the write-up.
 *
 * Screenshots live in public/assets/. Until one exists the cover falls back to
 * an accent gradient with the project initial, so a missing file reads as a
 * deliberate placeholder rather than a broken image.
 *
 * `project.featured` switches to the lead layout: full grid width, the cover
 * shown at the screenshot's own 2.18:1 ratio so nothing is cropped away, the
 * write-up split into two columns beneath it, and the UX case study promoted
 * from a text link to the primary call to action.
 */
const ProjectCard = ({ project }) => {
  const [imageOk, setImageOk] = useState(true);
  const accent = project.accent ?? 'indigo';
  const featured = Boolean(project.featured);

  const shots = project.images ?? [];

  const cover = (
    <div className="relative w-full border-b border-white/10 bg-navy-800">
      <div className={`relative w-full overflow-hidden ${featured ? 'aspect-[1365/627]' : 'aspect-[16/10]'}`}>
      {imageOk ? (
        <img
          src={shots[0]}
          alt={`${project.title} screenshot`}
          loading={featured ? 'eager' : 'lazy'}
          onError={() => setImageOk(false)}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div
          className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${ACCENT_WASH[accent]} to-navy-800`}>
          {/* faint dot texture so the empty cover still reads as designed */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
          <span className="relative font-generalsans text-7xl font-black text-white/25">
            {project.title.charAt(0)}
          </span>
        </div>
      )}

      {featured && (
        <span
          className="absolute left-5 top-5 rounded-full border border-accent-cyan/40 bg-navy-900/85 px-3 py-1.5
                     font-mono text-[10px] uppercase tracking-[0.22em] text-accent-cyan backdrop-blur-sm">
          ◆ Featured · UX case study
        </span>
      )}

      {/* darken the lower edge so the stack label stays readable */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-800 to-transparent" />
      </div>

      {/* second capture, inset into the corner of the first */}
      {imageOk && shots[1] && (
        <div
          className="absolute bottom-3 right-3 w-[42%] overflow-hidden rounded-lg border border-white/15
                     bg-navy-800 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.9)]">
          <img
            src={shots[1]}
            alt={`${project.title}, second view`}
            loading="lazy"
            className="aspect-[1365/627] w-full object-cover object-top"
          />
        </div>
      )}
    </div>
  );

  const heading = (
    <>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
        {project.stack.join(' · ')}
      </p>

      <div className="mt-3 flex items-center gap-3">
        {project.logo && (
          <span
            className={`flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5 ${
              featured ? 'h-11 w-11' : 'h-9 w-9'
            }`}>
            <img
              src={project.logo}
              alt=""
              className={`object-contain ${featured ? 'h-7 w-7' : 'h-6 w-6'}`}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.visibility = 'hidden';
              }}
            />
          </span>
        )}
        <h3 className={featured ? 'display-lg' : 'display-md'}>{project.title}</h3>
      </div>

      <p
        className={`mt-3 font-generalsans leading-relaxed text-white-600 ${
          featured ? 'text-base sm:text-[17px]' : 'text-[15px]'
        }`}>
        {project.summary}
      </p>

      {featured && project.featuredNote && (
        <p className="mt-4 border-l-2 border-accent-indigo/60 pl-4 font-generalsans text-[15px] leading-relaxed text-white-700">
          {project.featuredNote}
        </p>
      )}
    </>
  );

  const points = (
    <ul className={`dash-list ${featured ? 'mt-6 lg:mt-0' : 'mt-5'}`}>
      {project.points.map((point) => (
        <li key={point.slice(0, 32)} className="dash-item">
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );

  const footer = (
    <div className={featured ? 'mt-7' : 'mt-auto'}>
      <div className="metric-rule flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="metric-value">{project.metric.value}</span>
        <span className="metric-label">{project.metric.label}</span>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        {/* On the lead card the case study is the primary action, so it leads as
            a solid pill and the live site steps back to a text link. */}
        {featured && project.caseStudy ? (
          <>
            <a href={project.caseStudy} target="_blank" rel="noreferrer" className="pill-solid">
              Read the UX case study ↗
            </a>
            {project.href && project.href !== '#' && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="font-generalsans text-sm font-semibold text-white-600 transition-colors hover:text-accent-cyan">
                Visit live site ↗
              </a>
            )}
          </>
        ) : (
          <>
            {project.href && project.href !== '#' && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="font-generalsans text-sm font-semibold text-white transition-colors hover:text-accent-cyan">
                View project ↗
              </a>
            )}
            {project.caseStudy && (
              <a
                href={project.caseStudy}
                target="_blank"
                rel="noreferrer"
                className="font-generalsans text-sm font-semibold text-white-600 transition-colors hover:text-accent-cyan">
                UX case study ↗
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );

  if (featured) {
    return (
      <article
        className={`glass group flex h-full flex-col overflow-hidden transition-colors duration-500 ${ACCENT_RING[accent]}`}>
        {cover}

        {/* Wide card, so the write-up runs in two columns rather than one
            very long measure. */}
        <div className="grid gap-x-12 p-7 sm:p-9 lg:grid-cols-[1.1fr_1fr] lg:p-10">
          <div>{heading}</div>
          <div className="flex flex-col">
            {points}
            {footer}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`glass group flex h-full flex-col overflow-hidden transition-colors duration-500 ${ACCENT_RING[accent]}`}>
      {cover}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {heading}
        {points}
        {footer}
      </div>
    </article>
  );
};

export default ProjectCard;
