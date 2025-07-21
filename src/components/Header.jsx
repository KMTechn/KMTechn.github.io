import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/logo.png'; // Import the logo
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: var(--header-bg);
  backdrop-filter: blur(5px);
  transition: background-color 0.3s;
`;

const LogoContainer = styled(RouterNavLink)`
  img {
    height: 40px;
    width: auto;
    display: block;
    filter: brightness(0) invert(1);
    opacity: 0.9;
    transition: opacity 0.3s ease;
  }
  &:hover img {
    opacity: 1;
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
    text-shadow: 0 0 5px var(--accent-amber-glow);
  }

  &.active::after {
    transform: scaleX(1);
    background-color: var(--accent-amber);
  }
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: var(--accent-amber);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={logo} alt="KMTECH Logo" />
      </LogoContainer>
      <Nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <ThemeToggleButton onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </ThemeToggleButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
