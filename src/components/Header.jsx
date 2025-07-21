import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/logo.png'; // Import the logo

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
  background: linear-gradient(to bottom, rgba(18, 18, 18, 0.8), transparent);
  backdrop-filter: blur(5px);
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
`;

const NavLink = styled(RouterNavLink)`
  color: var(--text-secondary);
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
    color: var(--text-primary);
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &.active {
    color: var(--text-primary);
    text-shadow: 0 0 5px var(--accent-amber-glow);
  }

  &.active::after {
    transform: scaleX(1);
    background-color: var(--accent-amber);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={logo} alt="KMTECH Logo" />
      </LogoContainer>
      <Nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
