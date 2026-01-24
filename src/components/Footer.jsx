import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGlobe, FaWarehouse } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, var(--footer-bg) 0%, var(--background-color) 100%);
  color: var(--text-secondary);
  padding: 4rem 5% 2rem;
  border-top: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent-amber), transparent);
    opacity: 0.3;
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;

  img {
    height: 40px;
    width: auto;
  }
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-amber) 0%, var(--accent-amber-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const FooterDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const FooterTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-amber), var(--accent-amber-light));
    border-radius: 2px;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.75rem;

  a {
    color: var(--text-secondary);
    font-size: 0.9rem;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: var(--accent-amber);
      transform: translateX(5px);
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;

  svg {
    color: var(--accent-amber);
    flex-shrink: 0;
    margin-top: 0.2rem;
  }

  a {
    color: var(--text-secondary);
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent-amber);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 204, 0, 0.1);
  border: 1px solid rgba(255, 204, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-amber);
    color: #121212;
    border-color: var(--accent-amber);
  }
`;

const FooterBottom = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    font-size: 0.85rem;
    color: var(--text-secondary);
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent-amber);
    }
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 204, 0, 0.1);
  border: 1px solid rgba(255, 204, 0, 0.2);
  border-radius: 50px;
  font-size: 0.8rem;
  color: var(--accent-amber);
  margin-top: 1rem;
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo to="/">
            <img src="/logo.png?v=1" alt="KMTECH Logo" />
            <LogoText>KMTECH</LogoText>
          </FooterLogo>
          <FooterDescription>
            {t('footer_description')}
          </FooterDescription>
          <Badge>
            <FaGlobe size={12} />
            Global 3PL Solutions
          </Badge>
          <SocialLinks>
            <SocialLink
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={18} />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>{t('footer_quick_links')}</FooterTitle>
          <FooterLinks>
            <FooterLink><Link to="/about">{t('nav_about')}</Link></FooterLink>
            <FooterLink><Link to="/business">{t('nav_business')}</Link></FooterLink>
            <FooterLink><Link to="/partners">{t('nav_partners')}</Link></FooterLink>
            <FooterLink><Link to="/contact">{t('nav_contact')}</Link></FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>{t('footer_services')}</FooterTitle>
          <FooterLinks>
            <FooterLink><Link to="/business">{t('tpl_warehouse_title')}</Link></FooterLink>
            <FooterLink><Link to="/business">{t('tpl_inspection_title')}</Link></FooterLink>
            <FooterLink><Link to="/business">{t('tpl_packaging_title')}</Link></FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>{t('contact_office_title')}</FooterTitle>
          <ContactItem>
            <FaMapMarkerAlt size={16} />
            <span>{t('contact_office_address')}</span>
          </ContactItem>
          <ContactItem>
            <FaEnvelope size={14} />
            <a href={`mailto:${t('contact_office_email')}`}>{t('contact_office_email')}</a>
          </ContactItem>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>{t('footer_copyright')}</Copyright>
        <FooterBottomLinks>
          <Link to="/contact">{t('footer_privacy')}</Link>
          <Link to="/contact">{t('footer_terms')}</Link>
        </FooterBottomLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
