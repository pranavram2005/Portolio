import { useState } from 'react';

import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => {
  // In-page anchors ("#about") have to be intercepted: the app routes on the
  // hash, so a raw anchor would be read as a route and navigate away. External
  // links (Resume, the case study) must be left alone to follow normally.
  const handleClick = (event, href) => {
    if (!href.startsWith('#')) {
      onClick();
      return;
    }

    event.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    onClick();
  };

  return (
    <ul className="nav-ul">
      {navLinks.map((item) => {
        const isExternal = !item.href.startsWith('#');

        return (
          <li key={item.id} className="nav-li">
            <a
              href={item.href}
              className="nav-li_a"
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
              onClick={(event) => handleClick(event, item.href)}>
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="./"
            className="text-neutral-400 font-bold text-xl transition-colors hover:text-white"
            title="Back to the current site">
            Pranav Ram
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
