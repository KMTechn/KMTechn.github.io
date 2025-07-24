import React, { Suspense, lazy, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollToTop from './components/ScrollToTop';

import './index.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const BusinessPage = lazy(() => import('./pages/BusinessPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

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

const LoadingFallback = () => (
  <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <p style={{color: 'var(--accent-amber)', fontSize: '1.5rem'}}>Loading...</p>
  </div>
);

function App() {
  const mainContentRef = useRef(null);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop mainContentRef={mainContentRef} />
        <AppContainer>
          <Header />
          <MainContent ref={mainContentRef}>
            <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutUsPage />} />
                  <Route path="/business" element={<BusinessPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
            <Footer />
          </MainContent>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;

