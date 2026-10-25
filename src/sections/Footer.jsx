import { CONTACT } from '../constants/index.js';

const Footer = () => (
  <footer className="border-t border-white/10 py-10">
    <div className="section-shell flex flex-wrap items-center justify-between gap-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white-500">
        PRANAV RAM P S · {CONTACT.location} · 2026
      </p>

      <div className="flex gap-3">
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10
                     bg-white/[0.03] transition-colors duration-300 hover:border-white/30">
          <img src="assets/github.svg" alt="" className="h-4 w-4" />
        </a>
        <a
          href={CONTACT.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10
                     bg-white/[0.03] transition-colors duration-300 hover:border-white/30">
          <img src="assets/instagram.svg" alt="" className="h-4 w-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
