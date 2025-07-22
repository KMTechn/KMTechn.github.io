import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './contexts/ThemeContext';
// ScrollToTop component is no longer needed and has been removed.

import './index.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const BusinessPage = lazy(() => import('./pages/BusinessPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  transition: color 0.3s;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; 
`;

const LoadingFallback = () => (
  <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <p style={{color: 'var(--accent-amber)', fontSize: '1.5rem'}}>Loading...</p>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* ScrollToTop component has been removed. */}
        <AppContainer>
          <Header />
          <MainContent>
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
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;