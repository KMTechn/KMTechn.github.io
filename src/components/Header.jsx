import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2.5rem;
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

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const LogoContainer = styled(RouterNavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  img {
    height: 38px;
    width: auto;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const LogoText = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-amber) 0%, var(--accent-amber-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: none;

  @media (min-width: 480px) {
    display: block;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 768px) {
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
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.6rem 1rem;
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
  gap: 0.75rem;
`;

const ControlButton = styled(motion.button)`
  background: rgba(255, 204, 0, 0.08);
  border: 1px solid rgba(255, 204, 0, 0.2);
  color: var(--text-color);
  cursor: pointer;
  padding: 0.6rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

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
    padding: 0.6rem 2.2rem 0.6rem 2.4rem;
    border-radius: 10px;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.3s ease;

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
  @media (max-width: 768px) {
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
  border-radius: 12px;
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

const Header = () => {
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

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <LogoContainer to="/" onClick={closeMenu} aria-label="KMTECH home">
          <img src="/logo.png?v=1" alt="KMTECH Logo" />
          <LogoText>KMTECH</LogoText>
        </LogoContainer>
        <Nav aria-label="Main navigation">
          <NavLink to="/about" title={t('nav_about')}>{t('nav_about')}</NavLink>
          <NavLink to="/business" title={t('nav_business')}>{t('nav_business')}</NavLink>
          <NavLink to="/partners" title={t('nav_partners')}>{t('nav_partners')}</NavLink>
          <NavLink to="/contact" title={t('nav_contact')}>{t('nav_contact')}</NavLink>
        </Nav>
        <ControlsContainer>
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
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            title={isMenuOpen ? 'Close menu' : 'Open menu'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu size={22} />
          </MobileMenuButton>
        </ControlsContainer>
      </HeaderContainer>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileNav
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <MobileNavClose onClick={closeMenu}>
              <X size={24} />
            </MobileNavClose>
            <MobileNavLogo>
              <img src="/logo.png?v=1" alt="KMTECH Logo" />
              <span>KMTECH</span>
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
