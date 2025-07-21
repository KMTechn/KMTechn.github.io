import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--titanium-light);
  padding: 4rem 5% 2rem;
  border-top: 1px solid var(--border-color);
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FooterColumn = styled.div`
  h4 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: var(--text-secondary);
    &:hover {
      color: var(--accent-amber);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    font-size: 1.5rem;
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid var(--border-color);
  padding-top: 2rem;
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <h4>KMT LOGISTICS</h4>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Your trusted partner for global logistics, inspection, and storage solutions.
          </p>
        </FooterColumn>
        <FooterColumn>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:contact@kmt-logistics.com">contact@kmt-logistics.com</a></li>
            <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h4>Follow Us</h4>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </SocialLinks>
        </FooterColumn>
      </FooterGrid>
      <BottomBar>
        <p>&copy; {new Date().getFullYear()} KMT LOGISTICS. All Rights Reserved.</p>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
