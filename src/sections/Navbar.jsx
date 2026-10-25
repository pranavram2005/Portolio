import { useEffect, useState } from 'react';

import { navLinks } from '../constants/index.js';

const SECTION_IDS = [
  'about',
  'toolkit',
  'experience',
  'projects',
  'leadership',
  'vision',
  'contact',
];

const NavItems = ({ active, onClick = () => {} }) => (
  <ul className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-1">
    {navLinks.map((item) => {
      const id = item.href.replace('#', '');
      const isActive = active === id;
      const isExternal = item.href.startsWith('http');

      return (
        <li key={item.id} className="w-full sm:w-auto">
          <a
            href={item.href}
            onClick={onClick}
            {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
            className={`block rounded-full px-4 py-2 font-generalsans text-[15px] transition-colors duration-300
              ${isActive ? 'text-white' : 'text-white-600 hover:text-white'}`}>
            {item.name}
            {isActive && (
              <span className="mx-auto mt-1 block h-px w-4 bg-accent-cyan sm:w-full" aria-hidden="true" />
            )}
          </a>
        </li>
      );
    })}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  // Shrink / frost the bar once the page has moved.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight whichever section is currently crossing the upper third.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-25% 0px -65% 0px' },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500
        ${scrolled ? 'border-b border-white/10 bg-navy-900/80 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="section-shell">
        <div className="flex items-center justify-between py-4">
          <a
            href="#home"
            className="font-mono text-lg font-bold tracking-[0.2em] text-white transition-opacity hover:opacity-70">
            PRS<span className="text-accent-cyan">_</span>
          </a>

          <button
            onClick={() => setIsOpen((open) => !open)}
            className="text-white-600 transition-colors hover:text-white sm:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}>
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt=""
              className="h-6 w-6"
            />
          </button>

          <nav className="hidden sm:block">
            <NavItems active={active} />
          </nav>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-navy-900/95 backdrop-blur-xl transition-[max-height] duration-500 ease-in-out sm:hidden
          ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="section-shell py-4">
          <NavItems active={active} onClick={() => setIsOpen(false)} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
