import Reveal from './Reveal.jsx';

const ACCENT = {
  indigo: 'text-accent-indigo',
  cyan: 'text-accent-cyan',
  violet: 'text-accent-violet',
  blue: 'text-accent-blue',
  amber: 'text-accent-amber',
};

/**
 * "01 / ABOUT" section marker with an optional headline, matching the
 * numbered structure of the reference portfolio.
 */
const SectionHeader = ({ index, label, title, intro, accent = 'cyan', size = 'lg', className = '' }) => (
  <div className={`relative ${className}`}>
    <Reveal direction="left">
      <p className={`eyebrow ${ACCENT[accent] ?? ACCENT.cyan}`}>
        {index} / {label}
      </p>
    </Reveal>

    {title && (
      <Reveal direction="up" delay={0.08}>
        <h2 className={`${size === 'md' ? 'display-md sm:text-3xl' : 'display-lg'} mt-5 max-w-3xl`}>{title}</h2>
      </Reveal>
    )}

    {intro && (
      <Reveal direction="up" delay={0.16}>
        <p className="body-text mt-5 max-w-2xl">{intro}</p>
      </Reveal>
    )}
  </div>
);

export default SectionHeader;
