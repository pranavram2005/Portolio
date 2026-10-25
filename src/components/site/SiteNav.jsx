import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { CONTACT, navLinks } from '../../constants/index.js';

/**
 * Fixed site nav.
 *
 * Every page opens on a dark band (the hero on Home, the page hero
 * elsewhere), so the nav starts in light-on-dark and swaps to a frosted
 * parchment bar once the page scrolls past it.
 */
const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Never leave the drawer open behind a route change.
  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-[background,box-shadow,padding] duration-300 ${
        scrolled
          ? 'bg-parch/[0.88] py-3 text-tx shadow-[0_1px_0_rgba(20,32,43,0.14)] backdrop-blur-[10px]'
          : 'py-5 text-tx-ink'
      }`}>
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-7">
        <Link to="/" onClick={close} className="flex items-center gap-0.5 font-serif text-2xl font-semibold">
          Pranav<span className="animate-blink text-[1.9rem] leading-none text-brass">.</span>
        </Link>

        {/* desktop links */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `p-navlink ${isActive ? 'is-active' : ''}`}>
              {link.name}
            </NavLink>
          ))}
          <a className="p-navcta" href={`mailto:${CONTACT.email}`}>
            Say hi ✦
          </a>
        </nav>

        {/* burger */}
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-[110] flex flex-col gap-[5px] p-1.5 md:hidden">
          <span
            className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span className={`h-0.5 w-6 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[99] flex w-[min(78vw,320px)] flex-col justify-center gap-7 bg-ink
                    p-10 text-tx-ink transition-transform duration-300 md:hidden ${
                      open ? 'translate-x-0' : 'translate-x-full'
                    }`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.to}
            end={link.to === '/'}
            onClick={close}
            className={({ isActive }) => `p-navlink text-[15px] ${isActive ? 'is-active' : ''}`}>
            {link.name}
          </NavLink>
        ))}
        <a className="p-navcta w-fit" href={`mailto:${CONTACT.email}`} onClick={close}>
          Say hi ✦
        </a>
      </div>
    </header>
  );
};

export default SiteNav;
