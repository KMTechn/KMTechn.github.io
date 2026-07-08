import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGlobe, FaPhoneAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background:
    linear-gradient(135deg, rgba(255, 204, 0, 0.07), transparent 38%),
    linear-gradient(180deg, #191919 0%, #101010 100%);
  color: rgba(255, 255, 255, 0.68);
  padding: clamp(2rem, 4vw, 3.2rem) 5% clamp(1.35rem, 2.6vw, 2rem);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
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
  max-width: var(--page-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.35fr repeat(3, minmax(9rem, 0.75fr));
  gap: clamp(1.5rem, 4vw, 3rem);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  gap: 0.65rem;
  margin-bottom: 0.85rem;

  img {
    height: 34px;
    width: auto;
    filter: brightness(0) invert(1);
  }
`;

const LogoText = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
`;

const FooterDescription = styled.p`
  font-size: 0.86rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.66);
  margin-bottom: 1rem;
  max-width: 31rem;
`;

const FooterTitle = styled.h4`
  font-size: 0.98rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
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
  margin-bottom: 0.55rem;

  a {
    color: rgba(255, 255, 255, 0.68);
    font-size: 0.86rem;
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
  margin-bottom: 0.72rem;
  font-size: 0.86rem;
  line-height: 1.6;

  svg {
    color: var(--accent-amber);
    flex-shrink: 0;
    margin-top: 0.2rem;
  }

  a {
    color: rgba(255, 255, 255, 0.68);
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
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 204, 0, 0.1);
  border: 1px solid rgba(255, 204, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-amber);
    color: #121212;
    border-color: var(--accent-amber);
  }
`;

const FooterBottom = styled.div`
  max-width: var(--page-max-width);
  margin: clamp(1.6rem, 3vw, 2.4rem) auto 0;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.52);
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.52);
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
  padding: 0.45rem 0.8rem;
  background: rgba(255, 204, 0, 0.1);
  border: 1px solid rgba(255, 204, 0, 0.2);
  border-radius: 999px;
  font-size: 0.76rem;
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
            <img src="/logo.png?v=1" alt="KMTech Logo" />
            <LogoText>KMTech</LogoText>
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
              aria-label="KMTech LinkedIn"
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
          <ContactItem>
            <FaPhoneAlt size={14} />
            <a href={`tel:${t('contact_office_phone')}`}>{t('contact_office_phone')}</a>
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
