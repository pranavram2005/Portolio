import { Link } from 'react-router-dom';

import { teasers } from '../../constants/index.js';
import Reveal from '../Reveal.jsx';

/** Three doors into the rest of the site. */
const Teasers = () => (
  <section className="p-section bg-parch">
    <div className="wrap">
      <Reveal>
        <p className="p-eyebrow">Wander around</p>
        <h2 className="p-title mb-11">Three doors. Pick one.</h2>
      </Reveal>

      <Reveal stagger={0.09} className="grid gap-6 md:grid-cols-3">
        {teasers.map((teaser) => (
          <Link key={teaser.to} to={teaser.to} className="p-card p-card-hover group block">
            <span
              className="absolute -right-8 -top-8 h-[130px] w-[130px] rounded-full opacity-[0.22] blur-[30px]"
              style={{ background: teaser.tint }}
            />
            <span className="relative block text-[2.4rem]">{teaser.icon}</span>
            <h3 className="relative mt-3.5 font-serif text-[1.7rem] font-medium">{teaser.title}</h3>
            <p className="relative mt-2 text-[14.5px] text-tx-dim">{teaser.text}</p>
            <span
              className="relative mt-5 inline-flex gap-2 font-mono text-xs tracking-[0.1em] text-brass
                         transition-[gap] duration-300 group-hover:gap-4">
              {teaser.go}
            </span>
          </Link>
        ))}
      </Reveal>
    </div>
  </section>
);

export default Teasers;
