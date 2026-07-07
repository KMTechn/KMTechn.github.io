import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Page, { Section, SectionTitle } from '../components/ui/Page';
import { facilityMetrics, operationHighlights } from '../data/company';
import {
  FaCheckCircle, FaBuilding, FaBalanceScale,
  FaLeaf, FaBullseye, FaGavel, FaAward, FaBrain, FaUsersCog,
  FaUserTie, FaShippingFast, FaMicroscope, FaCogs, FaSearchPlus,
  FaSitemap, FaUsers, FaQuoteLeft
} from 'react-icons/fa';
import { HiOutlineChevronRight } from 'react-icons/hi';

// Hero Section - Clean and Professional
const HeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(165deg,
    var(--background-color) 0%,
    var(--card-bg) 100%);
  padding: clamp(5.5rem, 9vw, 8rem) clamp(1rem, 5vw, 5%) clamp(4rem, 7vw, 6rem);
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

const HeroGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: center;
  width: 100%;
  min-width: 0;
  overflow-x: clip;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 600px;
  min-width: 0;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

const HeroLabel = styled(motion.span)`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.25rem, 4vw, 3.25rem);
  font-weight: 700;
  line-height: 1.25;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  letter-spacing: 0;
  overflow-wrap: anywhere;
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-secondary);
  overflow-wrap: anywhere;
`;

const HeroVisual = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StatsCard = styled.div`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(1.5rem, 4vw, 3rem);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  min-width: 0;
`;

const StatItem = styled.div`
  text-align: center;
  padding: clamp(0.75rem, 2vw, 1rem);
  min-width: 0;

  &:not(:last-child) {
    border-right: 1px solid var(--border-color);
  }

  &:nth-child(2) {
    border-right: none;
  }

  &:nth-child(3), &:nth-child(4) {
    border-top: 1px solid var(--border-color);
    padding-top: 2rem;
  }

  &:nth-child(3) {
    border-right: 1px solid var(--border-color);
  }
`;

const StatNumber = styled.div`
  font-size: clamp(1.5rem, 2.8vw, 2.5rem);
  font-weight: 700;
  color: var(--text-color);
  line-height: 1;
  margin-bottom: 0.5rem;
  white-space: nowrap;

  span {
    color: var(--accent-amber);
  }
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
  line-height: 1.35;
  overflow-wrap: anywhere;
`;

const TrustSection = styled(Section)`
  background: var(--background-color);
  padding: clamp(3.5rem, 6vw, 5rem) clamp(1rem, 5vw, 5%);
`;

const TrustGrid = styled.div`
  width: min(100%, 1180px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(17rem, 0.72fr) minmax(0, 1.28fr);
  gap: clamp(1.25rem, 4vw, 2rem);
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TrustIntro = styled.div`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(1.25rem, 4vw, 2rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
`;

const TrustLogo = styled.div`
  width: 92px;
  height: 92px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-color);
  display: grid;
  place-items: center;
  padding: 0.85rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const TrustTitle = styled.h2`
  color: var(--text-color);
  font-size: clamp(1.35rem, 3vw, 1.85rem);
  line-height: 1.25;
  margin-bottom: 0.75rem;
`;

const TrustText = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
`;

const TrustMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 1020px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const TrustMetric = styled.div`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  min-width: 0;
`;

const TrustMetricValue = styled.div`
  color: var(--text-color);
  font-size: clamp(1.25rem, 3vw, 1.7rem);
  font-weight: 800;
  line-height: 1.1;
  white-space: nowrap;
`;

const TrustMetricLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.82rem;
  line-height: 1.35;
  margin-top: 0.45rem;
`;

const TrustHighlightGrid = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const TrustHighlight = styled.div`
  border: 1px solid rgba(var(--accent-amber-rgb), 0.35);
  background: rgba(var(--accent-amber-rgb), 0.08);
  border-radius: 8px;
  padding: 1rem;
`;

const TrustHighlightValue = styled.div`
  color: var(--text-color);
  font-weight: 800;
  line-height: 1.2;
`;

// Philosophy Section
const PhilosophySection = styled(Section)`
  background: var(--card-bg);
  padding: 7rem 5%;
`;

const PhilosophyGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const PhilosophyContent = styled(motion.div)``;

const PhilosophyLabel = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`;

const PhilosophyTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  line-height: 1.3;
`;

const PhilosophyText = styled.p`
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--text-secondary);
`;

const QuoteBlock = styled.div`
  position: relative;
  padding: 2rem 0 2rem 2rem;
  margin-top: 2rem;
  border-left: 3px solid var(--accent-amber);

  svg {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 1.5rem;
    color: var(--accent-amber);
    opacity: 0.3;
  }
`;

const QuoteText = styled.p`
  font-size: 1.1rem;
  font-style: italic;
  color: var(--text-color);
  line-height: 1.7;
`;

const PrinciplesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const PrincipleCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem;
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-amber);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }
`;

const PrincipleIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--accent-amber-rgb, 255, 193, 7), 0.1);
  border-radius: 8px;
  flex-shrink: 0;

  svg {
    font-size: 1.25rem;
    color: var(--accent-amber);
  }
`;

const PrincipleText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
`;

// Core Values Section
const ValuesSection = styled(Section)`
  background: var(--background-color);
  padding: 7rem 5%;
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

const SectionDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 8.75rem), 1fr));
  gap: clamp(1rem, 3vw, 1.5rem);
  max-width: 1200px;
  margin: 0 auto;
`;

const ValueCard = styled(motion.div)`
  text-align: center;
  padding: 2rem 1rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
    transform: translateY(-4px) translateZ(0);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  }
`;

const ValueIcon = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  border-radius: 8px;
  margin: 0 auto 1.25rem;

  svg {
    font-size: 1.5rem;
    color: #121212;
  }
`;

const ValueTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-color);
  line-height: 1.4;
`;

// Strengths Section
const StrengthsSection = styled(Section)`
  background: var(--card-bg);
  padding: 7rem 5%;
`;

const StrengthsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  max-width: 1300px;
  margin: 0 auto;
`;

const StrengthCard = styled(motion.div)`
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: rgba(var(--accent-amber-rgb, 255, 193, 7), 0.5);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
    transform: translateY(-4px) translateZ(0);
  }
`;

const StrengthImageWrapper = styled.div`
  position: relative;
  height: 180px;
  overflow: hidden;
`;

const StrengthImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.3s ease;

  ${StrengthCard}:hover & {
    transform: scale(1.05) translateZ(0);
  }
`;

const StrengthNumber = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  letter-spacing: 0.05em;
`;

const StrengthContent = styled.div`
  padding: 1.75rem;
`;

const StrengthTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: var(--accent-amber);
    font-size: 1rem;
  }
`;

const StrengthDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

// Organization Section - Modern Minimal Design
const OrgSection = styled(Section)`
  background: var(--background-color);
  padding: 7rem 5%;
`;

const OrgContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const OrgChart = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CEOCard = styled(motion.div)`
  display: inline-block;
  padding: 12px 20px;
  background: var(--card-bg);
  border: 1px solid var(--accent-amber);
  border-radius: 8px;
  position: relative;
  margin-bottom: 2.5rem;
  line-height: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: -2.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 2.5rem;
    background: var(--border-color);
  }
`;

const CEORole = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--text-color);
  line-height: 1;
`;

const OrgLine = styled.div`
  width: 80%;
  height: 1px;
  background: var(--border-color);
  position: relative;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const DepartmentsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 7.5rem), 1fr));
  gap: clamp(1rem, 3vw, 1.5rem);
  width: 100%;
`;

const DepartmentCard = styled(motion.div)`
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 2rem;
    background: var(--border-color);
  }
`;

const DeptIconWrapper = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin: 0 auto 1rem;
  transition: all 0.2s ease;

  svg {
    font-size: 1.25rem;
    color: var(--accent-amber);
  }

  ${DepartmentCard}:hover & {
    border-color: var(--accent-amber);
    background: rgba(var(--accent-amber-rgb, 255, 193, 7), 0.05);
  }
`;

const DeptTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-color);
  line-height: 1.4;
`;

// Icon mapping for organization
const iconMap = {
  'FaCogs': <FaCogs />,
  'FaSearchPlus': <FaSearchPlus />,
  'FaSitemap': <FaSitemap />,
  'FaShippingFast': <FaShippingFast />,
  'FaUsers': <FaUsers />,
};

// Animation variants - optimized for performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" }
  }
};

const AboutUsPage = () => {
  const { t } = useTranslation();
  const [orgStructure, setOrgStructure] = useState(null);

  // Refs for scroll animations
  const heroRef = useRef(null);
  const philosophyRef = useRef(null);
  const valuesRef = useRef(null);
  const strengthsRef = useRef(null);
  const orgRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-50px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-50px" });
  const strengthsInView = useInView(strengthsRef, { once: true, margin: "-50px" });
  const orgInView = useInView(orgRef, { once: true, margin: "-50px" });

  useEffect(() => {
    fetch('/org-structure.json')
      .then(res => res.json())
      .then(data => setOrgStructure(data))
      .catch(err => console.error('Failed to load org structure:', err));
  }, []);

  const principles = [
    { icon: <FaBullseye />, titleKey: 'principle_customer_centered' },
    { icon: <FaCheckCircle />, titleKey: 'principle_customer_satisfaction' },
    { icon: <FaBalanceScale />, titleKey: 'principle_confidentiality' },
  ];

  const coreValues = [
    { icon: <FaCheckCircle />, titleKey: 'pillar_credibility' },
    { icon: <FaBalanceScale />, titleKey: 'pillar_stability' },
    { icon: <FaLeaf />, titleKey: 'pillar_environmental_quality' },
    { icon: <FaBullseye />, titleKey: 'pillar_customer_orientation' },
    { icon: <FaGavel />, titleKey: 'pillar_ethical_behavior' },
    { icon: <FaBuilding />, titleKey: 'pillar_company_development' },
  ];

  // Optimized Unsplash images with smaller size for faster loading
  // Using w=800 instead of w=2070 reduces image size by ~60%
  const strongPoints = [
    { icon: <FaAward />, img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=75&w=800&auto=format&fit=crop', titleKey: 'strong_point_1_title', descKey: 'strong_point_1_desc' },
    { icon: <FaBrain />, img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=75&w=800&auto=format&fit=crop', titleKey: 'strong_point_2_title', descKey: 'strong_point_2_desc' },
    { icon: <FaUsersCog />, img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=75&w=800&auto=format&fit=crop', titleKey: 'strong_point_3_title', descKey: 'strong_point_3_desc' },
    { icon: <FaUserTie />, img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=75&w=800&auto=format&fit=crop', titleKey: 'strong_point_4_title', descKey: 'strong_point_4_desc' },
    { icon: <FaShippingFast />, img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=75&w=800&auto=format&fit=crop', titleKey: 'strong_point_5_title', descKey: 'strong_point_5_desc' },
    { icon: <FaMicroscope />, img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=800&auto=format&fit=crop', titleKey: 'strong_point_6_title', descKey: 'strong_point_6_desc' },
  ];

  const organization = orgStructure || { ceo: { titleKey: 'org_ceo', nameKey: 'org_ceo_name' }, departments: [] };

  return (
    <Page>
      {/* Hero Section */}
      <HeroSection ref={heroRef}>
        <HeroGrid>
          <HeroContent
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <HeroLabel
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              About KMTech
            </HeroLabel>
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t('about_ideology_title')}
            </HeroTitle>
            <HeroDescription
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t('about_ideology_desc')}
            </HeroDescription>
          </HeroContent>

          <HeroVisual
            initial={{ opacity: 0, y: 18 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <StatsCard>
              <StatItem>
                <StatNumber>2,140<span>㎡</span></StatNumber>
                <StatLabel>{t('stats_warehouse_space')}</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>3,000<span>+</span></StatNumber>
                <StatLabel>{t('stats_pallet_capacity')}</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>15<span>+</span></StatNumber>
                <StatLabel>{t('stats_years_experience')}</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>99<span>%</span></StatNumber>
                <StatLabel>{t('stats_customer_satisfaction')}</StatLabel>
              </StatItem>
            </StatsCard>
          </HeroVisual>
        </HeroGrid>
      </HeroSection>

      <TrustSection>
        <TrustGrid>
          <TrustIntro>
            <TrustLogo>
              <img src="/logo.png" alt="KMTech" />
            </TrustLogo>
            <div>
              <SectionLabel>{t('about_trust_label')}</SectionLabel>
              <TrustTitle>{t('about_trust_title')}</TrustTitle>
              <TrustText>{t('about_trust_desc')}</TrustText>
            </div>
          </TrustIntro>

          <TrustMetrics>
            {facilityMetrics.map((metric) => (
              <TrustMetric key={metric.labelKey}>
                <TrustMetricValue>{metric.value}</TrustMetricValue>
                <TrustMetricLabel>{t(metric.labelKey)}</TrustMetricLabel>
                <TrustMetricLabel>{t(metric.detailKey)}</TrustMetricLabel>
              </TrustMetric>
            ))}
          </TrustMetrics>

          <TrustHighlightGrid>
            {operationHighlights.map((item) => (
              <TrustHighlight key={item.labelKey}>
                <TrustHighlightValue>{item.value}</TrustHighlightValue>
                <TrustMetricLabel>{t(item.detailKey)}</TrustMetricLabel>
              </TrustHighlight>
            ))}
          </TrustHighlightGrid>
        </TrustGrid>
      </TrustSection>

      {/* Philosophy Section */}
      <PhilosophySection ref={philosophyRef}>
        <PhilosophyGrid>
          <PhilosophyContent
            initial={{ opacity: 0, y: 18 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <PhilosophyLabel>Our Philosophy</PhilosophyLabel>
            <PhilosophyTitle>{t('about_ideology_title')}</PhilosophyTitle>
            <PhilosophyText>{t('about_ideology_desc')}</PhilosophyText>
            <QuoteBlock>
              <FaQuoteLeft />
              <QuoteText>
                {t('about_trust_statement')}
              </QuoteText>
            </QuoteBlock>
          </PhilosophyContent>

          <PrinciplesGrid
            variants={containerVariants}
            initial="hidden"
            animate={philosophyInView ? "visible" : "hidden"}
          >
            {principles.map((principle) => (
              <PrincipleCard key={principle.titleKey} variants={itemVariants}>
                <PrincipleIcon>{principle.icon}</PrincipleIcon>
                <PrincipleText>{t(principle.titleKey)}</PrincipleText>
                <HiOutlineChevronRight style={{ marginLeft: 'auto', color: 'var(--text-secondary)' }} />
              </PrincipleCard>
            ))}
          </PrinciplesGrid>
        </PhilosophyGrid>
      </PhilosophySection>

      {/* Core Values Section */}
      <ValuesSection ref={valuesRef}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Core Values</SectionLabel>
          <SectionTitle>{t('about_pillars_title')}</SectionTitle>
          <SectionDescription>{t('about_values_desc')}</SectionDescription>
        </SectionHeader>

        <ValuesGrid>
          {coreValues.map((value, index) => (
            <ValueCard
              key={value.titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{t(value.titleKey)}</ValueTitle>
            </ValueCard>
          ))}
        </ValuesGrid>
      </ValuesSection>

      {/* Strengths Section */}
      <StrengthsSection ref={strengthsRef}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={strengthsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Why Choose Us</SectionLabel>
          <SectionTitle>{t('about_strong_points_title')}</SectionTitle>
          <SectionDescription>{t('about_strengths_desc')}</SectionDescription>
        </SectionHeader>

        <StrengthsGrid>
          {strongPoints.map((item, index) => (
            <StrengthCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={strengthsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <StrengthImageWrapper>
                <StrengthImage style={{ backgroundImage: `url(${item.img})` }} />
                <StrengthNumber>0{index + 1}</StrengthNumber>
              </StrengthImageWrapper>
              <StrengthContent>
                <StrengthTitle>
                  {item.icon}
                  {t(item.titleKey)}
                </StrengthTitle>
                <StrengthDescription>{t(item.descKey)}</StrengthDescription>
              </StrengthContent>
            </StrengthCard>
          ))}
        </StrengthsGrid>
      </StrengthsSection>

      {/* Organization Section */}
      <OrgSection ref={orgRef}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={orgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Organization</SectionLabel>
          <SectionTitle>{t('about_org_title')}</SectionTitle>
          <SectionDescription>{t('about_org_desc')}</SectionDescription>
        </SectionHeader>

        <OrgContainer>
          <OrgChart>
            <CEOCard
              initial={{ opacity: 0, y: 20 }}
              animate={orgInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <CEORole>{t(organization.ceo.titleKey)}</CEORole>
            </CEOCard>

            <OrgLine />

            <DepartmentsGrid
              variants={containerVariants}
              initial="hidden"
              animate={orgInView ? "visible" : "hidden"}
            >
              {organization?.departments?.map((dept) => (
                <DepartmentCard key={dept.titleKey} variants={itemVariants}>
                  <DeptIconWrapper>{iconMap[dept.iconName]}</DeptIconWrapper>
                  <DeptTitle>{t(dept.titleKey)}</DeptTitle>
                </DepartmentCard>
              ))}
            </DepartmentsGrid>
          </OrgChart>
        </OrgContainer>
      </OrgSection>
    </Page>
  );
};

export default AboutUsPage;
