import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import ScrollProgress from './components/ScrollProgress.jsx';
import SiteFooter from './components/site/SiteFooter.jsx';
import SiteNav from './components/site/SiteNav.jsx';
import LegacyApp from './legacy/LegacyApp.jsx';
import AboutPage from './routes/AboutPage.jsx';
import Home from './routes/Home.jsx';
import ProjectsPage from './routes/ProjectsPage.jsx';
import ProPage from './routes/ProPage.jsx';
import VisionPage from './routes/VisionPage.jsx';

/** A route change should land at the top of the new page, not mid-scroll. */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/** The current site: shared nav, progress bar and footer around each page. */
const SiteShell = () => (
  <>
    <ScrollProgress />
    <SiteNav />

    <main className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/vision" element={<VisionPage />} />
        {/* Unknown paths fall back to the home page rather than a blank screen. */}
        <Route path="*" element={<Home />} />
      </Routes>
    </main>

    <SiteFooter />
  </>
);

const App = () => (
  <>
    <ScrollToTop />

    <Routes>
      {/* Snapshot is the single-page quick summary - the earliest version of
          the site. It brings its own nav and footer, so it sits outside the
          shell. /part-two is the path it used to live at. */}
      <Route path="/snapshot" element={<LegacyApp />} />
      {/* The professional single-page portfolio: its own sticky sidebar
          and footer, so it also sits outside the shell. */}
      <Route path="/pro" element={<ProPage />} />
      <Route path="/part-two" element={<Navigate to="/snapshot" replace />} />
      <Route path="*" element={<SiteShell />} />
    </Routes>
  </>
);

export default App;
