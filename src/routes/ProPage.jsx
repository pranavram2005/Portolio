import { useEffect, useRef, useState } from 'react';

import {
  about,
  CONTACT,
  hero,
  myProjects,
  RESUME_URL,
  toolkit,
  workExperiences,
} from '../constants/index.js';

const SECTIONS = [
  { id: 'pro-about', label: 'About' },
  { id: 'pro-experience', label: 'Experience' },
  { id: 'pro-projects', label: 'Projects' },
];

const SOCIALS = [
  { label: 'GitHub', href: CONTACT.github },
  { label: 'LinkedIn', href: CONTACT.linkedin },
  { label: 'Email', href: `mailto:${CONTACT.email}` },
];

/** Monospace pill used for every technology tag. */
const Tag = ({ children }) => (
  <li className="rounded-full border border-brass/25 bg-brass/10 px-3 py-1 font-mono text-[11px] tracking-[0.04em] text-brass">
    {children}
  </li>
);

/**
 * A single row in the experience / projects lists.
 *
 * The lists carry `group/list`, so hovering any one row dims its siblings -
 * the interaction that makes these dense lists scannable rather than noisy.
 */
const Row = ({ aside, children, href }) => {
  const Tag_ = href ? 'a' : 'div';

  return (
    <li className="group/row">
      <Tag_
        {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})}
        className="grid gap-3 rounded-lg p-4 transition-all duration-300 sm:grid-cols-[130px_1fr] sm:gap-6
                   lg:group-hover/list:opacity-40 lg:group-hover/row:!opacity-100
                   group-hover/row:bg-white/[0.04] group-hover/row:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="pt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-tx-inkdim">{aside}</div>
        <div>{children}</div>
      </Tag_>
    </li>
  );
};

/**
 * The professional single-page portfolio.
 *
 * Layout follows the pattern that engineer portfolios have converged on: a
 * sticky left panel that keeps who-you-are on screen, and a single scrolling
 * column of content beside it. Work is presented as hover-dimmed lists rather
 * than cards, so a reader scanning for one thing can find it fast.
 *
 * The palette is this site's own ink and brass rather than the usual
 * slate-and-teal, so it reads as part of the same identity.
 */
const ProPage = () => {
  const [active, setActive] = useState(SECTIONS[0].id);
  const glowRef = useRef(null);

  // Track which section is in view to light the matching nav item.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Soft spotlight that follows the cursor. Pointer-only, and skipped
  // entirely when the visitor prefers reduced motion.
  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover)').matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(176,133,64,0.07), transparent 42%)`;
    };

    const onMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  const goTo = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen bg-ink-2 font-sans text-tx-inkdim antialiased">
      {/* cursor spotlight */}
      <div ref={glowRef} className="pointer-events-none fixed inset-0 z-30" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-20 lg:flex lg:gap-6 lg:px-16 lg:py-0">
        {/* ---------------- sticky panel ---------------- */}
        <header
          className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col
                     lg:justify-between lg:py-24">
          <div>
            <h1 className="font-serif text-[clamp(2.6rem,5vw,3.6rem)] font-semibold leading-none text-tx-ink">
              Pranav Ram PS
            </h1>
            <p className="mt-3 font-serif text-xl italic text-brass sm:text-2xl">Frontend Developer</p>
            <p className="mt-4 max-w-sm leading-relaxed text-tx-inkdim">{hero.tagline}</p>

            {/* section nav with an indicator that grows on the active item */}
            <nav className="mt-16 hidden lg:block" aria-label="Sections">
              <ul className="flex flex-col gap-4">
                {SECTIONS.map((section) => {
                  const isActive = active === section.id;
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={(event) => goTo(event, section.id)}
                        className="group flex items-center gap-4 py-1">
                        <span
                          className={`h-px transition-all duration-300 ${
                            isActive
                              ? 'w-16 bg-brass'
                              : 'w-8 bg-tx-inkdim/50 group-hover:w-16 group-hover:bg-tx-ink'
                          }`}
                        />
                        <span
                          className={`font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
                            isActive ? 'text-brass' : 'text-tx-inkdim group-hover:text-tx-ink'
                          }`}>
                          {section.label}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <ul className="mt-10 flex items-center gap-6 lg:mt-0 lg:pb-16">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.14em] text-tx-inkdim transition-colors hover:text-brass">
                  {social.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-brass/40 px-4 py-1.5 font-mono text-xs uppercase
                           tracking-[0.14em] text-brass transition-colors hover:bg-brass hover:text-ink-2">
                Résumé ↗
              </a>
            </li>
          </ul>
        </header>

        {/* ---------------- scrolling column ---------------- */}
        <main className="pt-16 lg:w-[54%] lg:py-24">
          {/* ----- about ----- */}
          <section id="pro-about" className="mb-24 scroll-mt-20" aria-label="About">
            <h2 className="sticky top-0 z-20 -mx-6 mb-6 bg-ink-2/80 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-tx-ink backdrop-blur lg:hidden">
              About
            </h2>

            <div className="flex flex-col gap-4 leading-relaxed">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 28)}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-7 flex flex-wrap gap-2">
              {toolkit.groups[1].items.concat(toolkit.groups[0].items.slice(0, 3)).map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </ul>
          </section>

          {/* ----- experience ----- */}
          <section id="pro-experience" className="mb-24 scroll-mt-20" aria-label="Experience">
            <h2 className="sticky top-0 z-20 -mx-6 mb-4 bg-ink-2/80 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-tx-ink backdrop-blur lg:hidden">
              Experience
            </h2>

            <ul className="group/list -mx-4 flex flex-col">
              {workExperiences.map((job) => (
                <Row key={job.id} aside={job.duration}>
                  <h3 className="font-serif text-xl font-semibold leading-snug text-tx-ink">
                    {job.pos}
                    <span className="text-brass"> · {job.name}</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed">{job.summary}</p>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {job.points.slice(0, 3).map((point) => (
                      <li key={point.slice(0, 26)} className="relative pl-4 text-sm leading-relaxed">
                        <span className="absolute left-0 top-[0.65em] h-px w-2.5 bg-brass/70" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {job.badge && <Tag>{job.badge}</Tag>}
                  </ul>
                </Row>
              ))}
            </ul>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-2 px-4 font-mono text-xs uppercase tracking-[0.14em] text-tx-ink hover:text-brass">
              View full résumé
              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>
          </section>

          {/* ----- projects ----- */}
          <section id="pro-projects" className="mb-24 scroll-mt-20" aria-label="Projects">
            <h2 className="sticky top-0 z-20 -mx-6 mb-4 bg-ink-2/80 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-tx-ink backdrop-blur lg:hidden">
              Projects
            </h2>

            <ul className="group/list -mx-4 flex flex-col">
              {myProjects.map((project) => (
                <Row
                  key={project.id}
                  href={project.caseStudy || (project.href !== '#' ? project.href : undefined)}
                  aside={
                    <img
                      src={project.images[0]}
                      alt=""
                      loading="lazy"
                      className="w-full rounded border border-tx-ink/15 object-cover object-top"
                    />
                  }>
                  <h3 className="font-serif text-xl font-semibold leading-snug text-tx-ink">
                    {project.title}
                    {(project.caseStudy || project.href !== '#') && (
                      <span className="ml-1.5 inline-block transition-transform duration-300 group-hover/row:translate-x-1 group-hover/row:-translate-y-0.5">
                        ↗
                      </span>
                    )}
                  </h3>

                  {project.featured && (
                    <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-brass">
                      ◆ Featured — full UX case study
                    </p>
                  )}

                  <p className="mt-2 text-sm leading-relaxed">{project.summary}</p>

                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-brass/90">
                    {project.metric.value} {project.metric.label}
                  </p>

                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </ul>
                </Row>
              ))}
            </ul>
          </section>

          {/* ----- footer ----- */}
          <footer className="pb-20 text-sm leading-relaxed text-tx-inkdim">
            <p>
              Built in React and Tailwind CSS, typeset in Cormorant Garamond, Inter and JetBrains
              Mono. Deployed from a Vite build on GitHub Pages.
            </p>
            <p className="mt-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-tx-ink underline decoration-brass underline-offset-4 transition-colors hover:text-brass">
                {CONTACT.email}
              </a>
              {' · '}
              {CONTACT.location}
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default ProPage;
