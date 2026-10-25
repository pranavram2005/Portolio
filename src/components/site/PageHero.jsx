/**
 * Dark page hero used by About / Projects / Vision.
 *
 * Mirrors the `.phero` band in the reference template: ink background,
 * serif headline, italic lede and a couple of drifting colour blobs.
 */
const PageHero = ({ eyebrow, title, children }) => (
  <section className="phero">
    <span className="blob h-[120px] w-[120px] bg-accent-sky" style={{ top: '22%', left: '6%' }} />
    <span
      className="blob h-[90px] w-[90px] bg-accent-coral"
      style={{ bottom: '14%', right: '18%', animationDelay: '-4s' }}
    />

    <div className="wrap relative z-[2]">
      {eyebrow && <p className="p-eyebrow text-brass">{eyebrow}</p>}
      <h1>{title}</h1>
      {children && <p className="phero-sub">{children}</p>}
    </div>
  </section>
);

export default PageHero;
