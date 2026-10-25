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

/**
 * The browsable multi-page site: shared nav, progress bar and footer around
 * each page. Its landing page lives at /explore now that the single-page
 * portfolio is the front door.
 */
const SiteShell = () => (
  <>
    <ScrollProgress />
    <SiteNav />

    <main className="relative">
      <Routes>
        <Route path="/explore" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/vision" element={<VisionPage />} />
        {/* Unknown paths land on the explore home rather than a blank screen. */}
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
      {/* The single-page portfolio is the front door. It carries its own
          sticky panel and footer, so it sits outside the shell.
          /pro is the path it launched at. */}
      <Route path="/" element={<ProPage />} />
      <Route path="/pro" element={<Navigate to="/" replace />} />

      {/* Snapshot - the earliest version, also standalone. */}
      <Route path="/snapshot" element={<LegacyApp />} />
      <Route path="/part-two" element={<Navigate to="/snapshot" replace />} />

      <Route path="*" element={<SiteShell />} />
    </Routes>
  </>
);

export default App;
