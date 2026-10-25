import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import WorkExperience from './sections/Experience.jsx';
import Footer from './sections/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Navbar from './sections/Navbar.jsx';
import Projects from './sections/Projects.jsx';

/**
 * Snapshot — the single-page quick summary of me.
 *
 * This is the earliest version of the site, kept intact: one page that covers
 * who I am, the work, the experience and how to get in touch, without the
 * multi-page browse of the current site.
 *
 * Everything under src/legacy/ is a verbatim copy of the first version of
 * this site (git dbf73ba): its own Navbar, 3D hacker-room hero, sections and
 * Footer, against its own constants. It is rendered standalone, outside the
 * current site's nav and footer, so the two versions never style each other.
 *
 * The one addition is the black ground: these sections used to inherit it
 * from `body`, which is parchment now.
 */
const LegacyApp = () => (
  <div className="bg-black-100">
    <main className="relative mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  </div>
);

export default LegacyApp;
