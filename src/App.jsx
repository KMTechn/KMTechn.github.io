import React, { Suspense, lazy, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEOHead';
import { LoadingSpinner } from './components/ui/LoadingSkeleton';
import FloatingCTA from './components/ui/FloatingCTA';
import AboutUsPage from './pages/AboutUsPage';

import './index.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const BusinessPage = lazy(() => import('./pages/BusinessPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px;
  overflow-y: auto; /* Ensure this container is the one that scrolls */
  background-color: var(--background-color);
  color: var(--text-color);
  transition: color 0.3s, background-color 0.3s;
`;

const SkipToMain = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--accent-amber);
  color: #121212;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 10000;
  font-weight: 600;
  border-radius: 0 0 8px 0;
  transition: top 0.2s ease;

  &:focus {
    top: 0;
    outline: none;
  }
`;

// Using improved loading skeleton with logo and spinner
const LoadingFallback = LoadingSpinner;

// SEO wrapper to use useLocation inside Router
const SEOWrapper = () => {
  const location = useLocation();
  return <SEOHead pathname={location.pathname} />;
};

function App() {
  const mainContentRef = useRef(null);

  return (
    <ThemeProvider>
      <Router>
        <SEOWrapper />
        <ScrollToTop mainContentRef={mainContentRef} />
        <AppContainer>
          <SkipToMain href="#main-content">Skip to main content</SkipToMain>
          <Header />
          <MainContent ref={mainContentRef} id="main-content">
            <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutUsPage />} />
                  <Route path="/business" element={<BusinessPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
            <Footer />
          </MainContent>
          <FloatingCTA />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;

