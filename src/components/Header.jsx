import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: var(--header-bg);
  backdrop-filter: blur(5px);
  transition: background-color 0.3s;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const LogoContainer = styled(RouterNavLink)`
  img {
    height: 35px;
    width: auto;
    display: block;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--background-color);
  transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 999;
`;

const NavLink = styled(RouterNavLink)`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
  padding-bottom: 5px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--accent-amber);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover {
    color: var(--accent-amber);
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &.active {
    color: var(--accent-amber);
  }

  ${MobileNav} & {
    font-size: 1.8rem;
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ControlButton = styled.button`
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-color);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    color: var(--accent-amber);
    border-color: var(--accent-amber);
  }
`;

const LanguageSwitcher = styled.div`
  position: relative;
  
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    border: 1px solid var(--border-color);
    color: var(--text-color);
    cursor: pointer;
    padding: 0.5rem 2rem 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.3s;
    
    &:hover {
      color: var(--accent-amber);
      border-color: var(--accent-amber);
    }
  }

  &::after {
    content: '▼';
    font-size: 0.7rem;
    position: absolute;
    top: 50%;
    right: 0.7rem;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--text-color);
  }
`;

const MobileMenuButton = styled(ControlButton)`
  display: none;
  z-index: 1001;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = {
    en: { nativeName: 'English' },
    ko: { nativeName: '한국어' },
    zh: { nativeName: '中文' },
    de: { nativeName: 'Deutsch' }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      <HeaderContainer role="banner">
        <LogoContainer to="/" onClick={closeMenu} aria-label="KMTECH home">
          <img src="/logo.png?v=1" alt="KMTECH Logo" />
        </LogoContainer>
        <Nav aria-label="Main navigation">
          <NavLink to="/about" title={t('nav_about')}>{t('nav_about')}</NavLink>
          <NavLink to="/business" title={t('nav_business')}>{t('nav_business')}</NavLink>
          <NavLink to="/contact" title={t('nav_contact')}>{t('nav_contact')}</NavLink>
        </Nav>
        <ControlsContainer>
          <LanguageSwitcher>
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              aria-label="Select language"
              title="Select website language"
            >
              {Object.keys(languages).map((lng) => (
                <option key={lng} value={lng}>
                  {languages[lng].nativeName}
                </option>
              ))}
            </select>
          </LanguageSwitcher>
          <ControlButton
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Enable dark mode' : 'Enable light mode'}
            title={theme === 'light' ? 'Enable dark mode' : 'Enable light mode'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </ControlButton>
          <MobileMenuButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            title={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </ControlsContainer>
      </HeaderContainer>
      <MobileNav
        $isOpen={isMenuOpen}
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <NavLink to="/about" onClick={closeMenu}>{t('nav_about')}</NavLink>
        <NavLink to="/business" onClick={closeMenu}>{t('nav_business')}</NavLink>
        <NavLink to="/partners" onClick={closeMenu}>{t('nav_partners')}</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>{t('nav_contact')}</NavLink>
      </MobileNav>
    </>
  );
};

export default Header;