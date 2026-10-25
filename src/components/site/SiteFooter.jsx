import { CONTACT } from '../../constants/index.js';

const YEAR = new Date().getFullYear();

/** Ink footer that closes every page, with the contact CTA. */
const SiteFooter = () => (
  <footer id="contact" className="relative overflow-hidden bg-ink-2 px-0 pb-12 pt-[110px] text-tx-ink">
    <span className="blob h-[70px] w-[70px] bg-accent-mint" style={{ top: '20%', right: '12%' }} />

    <div className="wrap relative z-[2]">
      <p className="p-eyebrow text-brass">Contact</p>

      <p className="foot-cta">
        Let’s build something
        <br />
        worth shipping.{' '}
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b-2 border-brass transition-colors hover:text-brass">
          Say&nbsp;hi&nbsp;→
        </a>
      </p>

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[13px] tracking-[0.05em]">
        {[
          { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
          { label: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
          { label: 'GitHub', href: CONTACT.github },
          { label: 'LinkedIn', href: CONTACT.linkedin },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="flex items-center gap-2 text-tx-inkdim transition-colors hover:text-brass">
            <span className="h-1.5 w-1.5 rounded-full bg-brass" />
            {link.label}
          </a>
        ))}
      </div>

      <div
        className="mt-[70px] flex flex-wrap justify-between gap-2.5 border-t border-tx-ink/[0.16] pt-6
                   font-mono text-[11.5px] tracking-[0.06em] text-tx-inkdim">
        <span>Pranav Ram PS — IIT Madras · {CONTACT.location}</span>
        <span>Designed &amp; built with ☕ · {YEAR}</span>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
