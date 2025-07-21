import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  background: linear-gradient(to bottom, rgba(18, 18, 18, 0.7), transparent);
`;

const LogoContainer = styled(Link)`
  img {
    height: 40px;
    width: auto;
    display: block;
    filter: brightness(0) invert(1);
    opacity: 0.9;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent-amber);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src="/logo.png" alt="KMT-LOGISTICS Logo" />
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
