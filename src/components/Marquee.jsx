/**
 * Infinite tech ticker (idea borrowed from portfolio1).
 *
 * The item list is rendered twice and the track slides exactly -50%, so the
 * second copy lands where the first started and the loop is seamless.
 */
const Marquee = ({ items, className = '' }) => (
  <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
    {/* feather the edges so items fade out rather than clip */}
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-2 to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-2 to-transparent" />

    <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex shrink-0 gap-4">
          {items.map((item) => (
            <span
              key={`${copy}-${item}`}
              className="whitespace-nowrap rounded-full border border-tx-ink/15 bg-white/[0.04] px-5 py-2
                         font-mono text-sm text-tx-inkdim">
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
