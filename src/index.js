import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Main';

const Registration = React.lazy(() => import('./Pages/ServicesAndPricing/Registration'));
const Entity = React.lazy(() => import('./Pages/ServicesAndPricing/Entity'));
const Residency = React.lazy(() => import('./Pages/ServicesAndPricing/Residency'));
const Estate = React.lazy(() => import('./Pages/ServicesAndPricing/Estate'));
const Relocation = React.lazy(() => import('./Pages/ServicesAndPricing/Relocation'));
const Other = React.lazy(() => import('./Pages/ServicesAndPricing/Other'));
const FAQ = React.lazy(() => import('./Pages/FAQ'));
const LegalResources = React.lazy(() => import('./Pages/LegalResources'));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="legalresources" element={<LegalResources />} />
          <Route path="registration" element={<Registration />} />
          <Route path="entity" element={<Entity />} />
          <Route path="residency" element={<Residency />} />
          <Route path="estate" element={<Estate />} />
          <Route path="relocation" element={<Relocation />} />
          <Route path="other" element={<Other />} />
        </Route>
      </Routes>
      <CssBaseline />
    </BrowserRouter>,
  </ThemeProvider>,
);
