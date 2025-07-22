import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Globe } from 'lucide-react';
import logo from '/logo.png';
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

const LanguageSwitcher = styled(ControlButton)`
  font-size: 0.9rem;
  font-weight: 600;
  min-width: 60px;
`;

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const changeLanguage = () => {
    const newLang = i18n.language === 'ko' ? 'en' : 'ko';
    i18n.changeLanguage(newLang);
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={logo} alt="KMTECH Logo" />
      </LogoContainer>
      <Nav>
        <NavLink to="/about">{t('nav_about')}</NavLink>
        <NavLink to="/business">{t('nav_business')}</NavLink>
        <NavLink to="/partners">{t('nav_partners')}</NavLink>
        <NavLink to="/contact">{t('nav_contact')}</NavLink>
      </Nav>
      <ControlsContainer>
        <LanguageSwitcher onClick={changeLanguage}>
          {i18n.language.toUpperCase()}
        </LanguageSwitcher>
        <ControlButton onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </ControlButton>
      </ControlsContainer>
    </HeaderContainer>
  );
};

export default Header;
