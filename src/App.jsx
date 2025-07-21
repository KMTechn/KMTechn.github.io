import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer
import { ThemeProvider } from './contexts/ThemeContext';

import './index.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh; // Use min-height to ensure footer is at the bottom
  background-color: var(--background-color);
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s, color 0.3s;
`;

const MainContent = styled.main`
  flex: 1;
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
        <AppContainer>
          <Header />
          <MainContent>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
