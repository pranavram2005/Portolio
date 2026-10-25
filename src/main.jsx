import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* HashRouter, not BrowserRouter: vite builds with base './' for static
        hosting, where deep links have no server rewrite and relative asset
        paths would break one directory down. */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
