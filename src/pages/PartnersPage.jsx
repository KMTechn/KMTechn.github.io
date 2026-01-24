import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Page from '../components/ui/Page';
import { FaHandshake, FaIndustry, FaGlobeAsia, FaArrowRight } from 'react-icons/fa';

// Hero Section
const HeroSection = styled.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(165deg, var(--background-color) 0%, var(--card-bg) 100%);
  padding: 8rem 5% 5rem;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border-color), transparent);
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled(motion.div)`
  @media (max-width: 900px) {
    order: 2;
  }
`;

const HeroLabel = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 500px;

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    order: 1;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
`;

const StatIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--accent-amber-rgb, 255, 193, 7), 0.1);
  border-radius: 10px;
  margin: 0 auto 1rem;

  svg {
    font-size: 1.25rem;
    color: var(--accent-amber);
  }
`;

const StatNumber = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

// Partners Section
const PartnersSection = styled.section`
  padding: 6rem 5%;
  background: var(--background-color);
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const PartnersGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    max-width: 300px;
  }
`;

const PartnerCard = styled(motion.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
    transform: translateY(-4px) translateZ(0);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }
`;

const PartnerLogo = styled.img`
  max-width: 120px;
  max-height: 50px;
  object-fit: contain;
  margin-bottom: 1.25rem;
`;

const PartnerName = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-color);
  text-align: center;
`;

const PartnerIndustry = styled.span`
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
`;

// CTA Section
const CTASection = styled.section`
  padding: 5rem 5%;
  background: var(--card-bg);
  text-align: center;
`;

const CTAContent = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  border-radius: 8px;
  background: var(--accent-amber);
  color: #121212;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: #e6a700;
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const PartnersPage = () => {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const partnersRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const partnersInView = useInView(partnersRef, { once: true, margin: "-50px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  const partners = [
    { name: 'Continental', logo: '/logos/continental.jpeg', industry: 'Automotive Parts' },
    { name: 'Humax', logo: '/logos/humax.jpeg', industry: 'Electronics' },
    { name: 'Hyundai Motor', logo: '/logos/Hyundai_Motor_Company_logo.svg.png', industry: 'Automotive' },
    { name: 'Kanavi Mobility', logo: '/logos/kanavi mobility.jpeg', industry: 'Mobility' },
    { name: 'Kia', logo: '/logos/KIA_logo3.svg.png', industry: 'Automotive' },
    { name: 'LG Display', logo: '/logos/LG_Display_logo_(english).png', industry: 'Display' },
    { name: 'LG Electronics', logo: '/logos/LG electronics.png', industry: 'Electronics' },
  ];

  const stats = [
    { icon: <FaHandshake />, value: '7+', labelKey: 'partners_stat_partners' },
    { icon: <FaIndustry />, value: '15+', labelKey: 'partners_stat_years' },
    { icon: <FaGlobeAsia />, value: '99%', labelKey: 'partners_stat_retention' },
  ];

  return (
    <Page>
      {/* Hero Section */}
      <HeroSection ref={heroRef}>
        <HeroContent>
          <HeroText
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <HeroLabel>Our Partners</HeroLabel>
            <HeroTitle>{t('core_customers_title')}</HeroTitle>
            <HeroDescription>
              {t('partners_hero_desc')}
            </HeroDescription>
          </HeroText>

          <StatsContainer
            initial={{ opacity: 0, x: 30 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <StatCard key={index}>
                <StatIcon>{stat.icon}</StatIcon>
                <StatNumber>{stat.value}</StatNumber>
                <StatLabel>{t(stat.labelKey)}</StatLabel>
              </StatCard>
            ))}
          </StatsContainer>
        </HeroContent>
      </HeroSection>

      {/* Partners Grid Section */}
      <PartnersSection ref={partnersRef}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={partnersInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Trusted By Industry Leaders</SectionLabel>
          <SectionTitle>{t('partners_section_title')}</SectionTitle>
          <SectionDescription>
            {t('partners_section_desc')}
          </SectionDescription>
        </SectionHeader>

        <PartnersGrid
          variants={containerVariants}
          initial="hidden"
          animate={partnersInView ? "visible" : "hidden"}
        >
          {partners.map((partner) => (
            <PartnerCard key={partner.name} variants={itemVariants}>
              <PartnerLogo src={partner.logo} alt={`${partner.name} logo`} />
              <PartnerName>{partner.name}</PartnerName>
              <PartnerIndustry>{partner.industry}</PartnerIndustry>
            </PartnerCard>
          ))}
        </PartnersGrid>
      </PartnersSection>

      {/* CTA Section */}
      <CTASection ref={ctaRef}>
        <CTAContent
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <CTATitle>{t('partners_cta_title')}</CTATitle>
          <CTADescription>
            {t('partners_cta_desc')}
          </CTADescription>
          <Link to="/contact">
            <CTAButton whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {t('partners_cta_button')} <FaArrowRight />
            </CTAButton>
          </Link>
        </CTAContent>
      </CTASection>
    </Page>
  );
};

export default PartnersPage;
