import MetricsBand from '../components/site/MetricsBand.jsx';
import PageHero from '../components/site/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { vision } from '../constants/index.js';

const PILLAR_EMOJI = ['🧱', '🧭', '📱'];

const VisionPage = () => (
  <>
    <PageHero eyebrow="🔭 Vision" title={<>Software should{<br />}feel inevitable.</>}>
      {vision.intro}
    </PageHero>

    {/* --- the statement --- */}
    <section className="p-section bg-parch">
      <div className="wrap">
        <Reveal>
          <p className="font-serif text-[clamp(2rem,5.4vw,4rem)] font-medium leading-[1.12] -tracking-[0.01em]">
            {vision.headline} <em className="italic text-brass">{vision.headlineAccent}</em>
          </p>
        </Reveal>
      </div>
    </section>

    {/* --- pillars --- */}
    <section className="p-section bg-parch-2">
      <div className="wrap">
        <Reveal>
          <p className="p-eyebrow">What I hold to</p>
          <h2 className="p-title mb-9">Three convictions.</h2>
        </Reveal>

        <Reveal stagger={0.09} className="grid gap-6 md:grid-cols-3">
          {vision.principles.map((principle, index) => (
            <div key={principle.label} className="p-card p-card-hover">
              <span className="text-[2.2rem]">{PILLAR_EMOJI[index]}</span>
              <h3 className="mt-3 font-serif text-[1.5rem] leading-snug">{principle.label}</h3>
              <p className="mt-2 text-[14.5px] text-tx-dim">{principle.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* --- quote --- */}
    <section className="p-section bg-parch">
      <div className="wrap">
        <Reveal>
          <p className="mx-auto max-w-[22ch] text-center font-serif text-[clamp(1.6rem,4vw,2.6rem)] italic leading-[1.3]">
            “{vision.quote.toLowerCase()}”
          </p>
        </Reveal>
      </div>
    </section>

    <MetricsBand />
  </>
);

export default VisionPage;
