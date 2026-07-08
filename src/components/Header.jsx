import React, { useState, useEffect, useCallback } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sun, Moon, Menu, X, Globe } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: var(--header-height);
  padding: 0.42rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: ${props => props.$scrolled
    ? 'rgba(var(--header-bg-rgb, 255, 255, 255), 0.85)'
    : 'var(--header-bg)'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(20px) saturate(180%)' : 'blur(5px)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid ${props => props.$scrolled
    ? 'rgba(255, 204, 0, 0.1)'
    : 'var(--border-color)'};
  box-shadow: ${props => props.$scrolled
    ? '0 4px 30px rgba(0, 0, 0, 0.1)'
    : 'none'};

  @media (max-width: 960px) {
    padding: 0.55rem 1rem;
  }

  @media (max-width: 820px) {
    padding: 0.55rem 1rem;
  }

  @media (max-width: 380px) {
    padding: 0.75rem 0.875rem;
  }
`;

const LogoContainer = styled(RouterNavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  img {
    height: clamp(24px, 3.2vw, 30px);
    width: auto;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const LogoText = styled.span`
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--text-color);
  letter-spacing: 0;
  display: none;

  @media (min-width: 640px) {
    display: block;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  @media (max-width: 820px) {
    display: none;
  }
`;

const MobileNav = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow-y: auto;
  padding: 5rem 1.25rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(var(--background-rgb, 18, 18, 18), 0.98) 0%,
    rgba(var(--background-rgb, 18, 18, 18), 0.95) 100%
  );
  backdrop-filter: blur(20px);
  z-index: 999;
`;

const NavLink = styled(RouterNavLink)`
  color: var(--text-color);
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.4rem 0.68rem;
  border-radius: 8px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-amber), var(--accent-amber-light));
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--accent-amber);
    background: rgba(255, 204, 0, 0.08);
  }

  &:hover::before {
    width: 60%;
  }

  &.active {
    color: var(--accent-amber);
    background: rgba(255, 204, 0, 0.1);

    &::before {
      width: 60%;
    }
  }

  ${MobileNav} & {
    font-size: 1.6rem;
    padding: 1rem 2rem;

    &::before {
      display: none;
    }
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;

  @media (max-width: 380px) {
    gap: 0.5rem;
  }
`;

const HeaderCTA = styled(RouterNavLink)`
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.48rem 0.86rem;
  border-radius: 8px;
  background: var(--accent-amber);
  border: 1px solid var(--accent-amber);
  color: #121212;
  font-size: 0.8rem;
  font-weight: 800;
  white-space: nowrap;
  box-shadow: 0 10px 24px rgba(var(--accent-amber-rgb), 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    color: #121212;
    background: #e6b800;
    transform: translateY(-1px);
    box-shadow: 0 14px 28px rgba(var(--accent-amber-rgb), 0.22);
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

const ControlButton = styled(motion.button)`
  background: rgba(255, 204, 0, 0.08);
  border: 1px solid rgba(255, 204, 0, 0.2);
  color: var(--text-color);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-width: 36px;
  min-height: 36px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--accent-amber), var(--accent-amber-light));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: #121212;
    border-color: var(--accent-amber);

    &::before {
      opacity: 1;
    }
  }
`;

const LanguageSwitcher = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: rgba(255, 204, 0, 0.08);
    border: 1px solid rgba(255, 204, 0, 0.2);
    color: var(--text-color);
    cursor: pointer;
    padding: 0.45rem 1.85rem 0.45rem 2rem;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
    min-height: 36px;
    max-width: 7.25rem;

    &:hover {
      background: var(--accent-amber);
      color: #121212;
      border-color: var(--accent-amber);
    }

    option {
      background: var(--card-bg);
      color: var(--text-color);
    }
  }

  @media (max-width: 380px) {
    select {
      max-width: 6.25rem;
      padding: 0.55rem 1.7rem 0.55rem 2rem;
    }
  }
`;

const LanguageIcon = styled(Globe)`
  position: absolute;
  left: 0.7rem;
  pointer-events: none;
  width: 16px;
  height: 16px;
  opacity: 0.7;
`;

const LanguageArrow = styled.span`
  position: absolute;
  right: 0.7rem;
  font-size: 0.6rem;
  pointer-events: none;
  opacity: 0.7;
`;

const MobileMenuButton = styled(ControlButton)`
  display: none;
  z-index: 1001;
  @media (max-width: 820px) {
    display: flex;
  }
`;

const MobileNavClose = styled(motion.button)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 204, 0, 0.1);
  border: 1px solid rgba(255, 204, 0, 0.3);
  color: var(--text-color);
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1002;

  &:hover {
    background: var(--accent-amber);
    color: #121212;
  }
`;

const MobileNavLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  img {
    height: 50px;
    width: auto;
  }

  span {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--accent-amber);
  }
`;

const Header = ({ scrollRootRef }) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const languages = {
    en: { nativeName: 'EN', fullName: 'English' },
    ko: { nativeName: 'KR', fullName: '한국어' },
    zh: { nativeName: 'CN', fullName: '中文' },
    de: { nativeName: 'DE', fullName: 'Deutsch' }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollRootRef?.current ? scrollRootRef.current.scrollTop : window.scrollY;
      setScrolled(scrollTop > 20);
    };

    const scrollRoot = scrollRootRef?.current;
    handleScroll();

    if (scrollRoot) {
      scrollRoot.addEventListener('scroll', handleScroll, { passive: true });
      return () => scrollRoot.removeEventListener('scroll', handleScroll);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollRootRef]);

  useEffect(() => {
    const scrollRoot = scrollRootRef?.current;
    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverflow = scrollRoot?.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (scrollRoot) {
        scrollRoot.style.overflow = 'hidden';
      }
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      if (scrollRoot) {
        scrollRoot.style.overflow = previousRootOverflow || '';
      }
    };
  }, [isMenuOpen, scrollRootRef]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeMenu, isMenuOpen]);

  const mobileNavVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.1 }
    }
  };

  const mobileNavItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <HeaderContainer
        $scrolled={scrolled}
        role="banner"
      >
        <LogoContainer to="/" onClick={closeMenu} aria-label="KMTech home">
          <img src="/logo.png?v=1" alt="KMTech Logo" />
          <LogoText>KMTech</LogoText>
        </LogoContainer>
        <Nav aria-label="Main navigation">
          <NavLink to="/about" title={t('nav_about')}>{t('nav_about')}</NavLink>
          <NavLink to="/business" title={t('nav_business')}>{t('nav_business')}</NavLink>
          <NavLink to="/partners" title={t('nav_partners')}>{t('nav_partners')}</NavLink>
          <NavLink to="/contact" title={t('nav_contact')}>{t('nav_contact')}</NavLink>
          </Nav>
        <ControlsContainer>
          <HeaderCTA to="/contact">
            {t('partners_cta_button')} <ArrowRight aria-hidden="true" />
          </HeaderCTA>
          <LanguageSwitcher>
            <LanguageIcon />
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
            <LanguageArrow>▼</LanguageArrow>
          </LanguageSwitcher>
          <ControlButton
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Enable dark mode' : 'Enable light mode'}
            title={theme === 'light' ? 'Enable dark mode' : 'Enable light mode'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </ControlButton>
          <MobileMenuButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            title={isMenuOpen ? 'Close menu' : 'Open menu'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </MobileMenuButton>
        </ControlsContainer>
      </HeaderContainer>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileNav
            id="mobile-navigation"
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <MobileNavClose onClick={closeMenu} type="button" aria-label="Close mobile navigation">
              <X size={24} />
            </MobileNavClose>
            <MobileNavLogo>
              <img src="/logo.png?v=1" alt="KMTech Logo" />
              <span>KMTech</span>
            </MobileNavLogo>
            <motion.div variants={mobileNavItemVariants}>
              <NavLink to="/about" onClick={closeMenu}>{t('nav_about')}</NavLink>
            </motion.div>
            <motion.div variants={mobileNavItemVariants}>
              <NavLink to="/business" onClick={closeMenu}>{t('nav_business')}</NavLink>
            </motion.div>
            <motion.div variants={mobileNavItemVariants}>
              <NavLink to="/partners" onClick={closeMenu}>{t('nav_partners')}</NavLink>
            </motion.div>
            <motion.div variants={mobileNavItemVariants}>
              <NavLink to="/contact" onClick={closeMenu}>{t('nav_contact')}</NavLink>
            </motion.div>
          </MobileNav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
