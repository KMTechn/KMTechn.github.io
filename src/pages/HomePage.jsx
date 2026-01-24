import React, { Suspense, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { MapControls } from '@react-three/drei';
import { Section, SectionTitle } from '../components/ui/Page';
import Loader from '../components/ui/Loader';
import Globe from '../components/ui/Globe';
import {
  FaArrowRight, FaWarehouse, FaBrain, FaShippingFast, FaMicroscope, FaSearch, FaTools,
  FaCheckCircle, FaPhone, FaEnvelope, FaCar, FaTv, FaTruckLoading, FaBoxOpen, FaClipboardCheck
} from 'react-icons/fa';
import { HiOutlineChevronRight } from 'react-icons/hi';

const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

// Hero Section - Clean Professional
const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 2rem 5%;
  background: linear-gradient(165deg, var(--background-color) 0%, var(--card-bg) 100%);
  gap: 4rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border-color), transparent);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
    padding: 4rem 5%;
    gap: 3rem;
  }
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;

  @media (max-width: 1024px) {
    align-items: center;
    order: 2;
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

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;
  color: var(--text-color);
  letter-spacing: -0.02em;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.8;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;

  svg {
    color: var(--accent-amber);
    font-size: 1rem;
  }

  &:hover {
    color: var(--accent-amber);
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 1rem 2rem;
  border-radius: 8px;
  background: var(--accent-amber);
  color: #121212;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;

  &:hover {
    background: #e6a700;
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 193, 7, 0.3);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-color);

  &:hover {
    border-color: var(--accent-amber);
    color: var(--accent-amber);
    background: transparent;
    box-shadow: none;
  }
`;

const ArtworkContainer = styled(motion.div)`
  height: 500px;
  width: 100%;
  position: relative;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 1024px) {
    order: 1;
    height: 350px;
    max-width: 400px;
    margin: 0 auto;
  }
`;

// Stats Section
const StatsSection = styled.section`
  background: var(--card-bg);
  padding: 5rem 5%;
  border-bottom: 1px solid var(--border-color);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-color);
  line-height: 1;
  margin-bottom: 0.75rem;

  span {
    color: var(--accent-amber);
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
`;

// Services Section
const ServicesSection = styled(Section)`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2.5rem;
  cursor: pointer;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
    transform: translateY(-4px) translateZ(0);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }
`;

const ServiceIcon = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  border-radius: 12px;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.5rem;
    color: #121212;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ServiceLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-amber);
  transition: gap 0.3s ease;

  ${ServiceCard}:hover & {
    gap: 0.75rem;
  }
`;

// Strengths Section
const StrengthsSection = styled(Section)`
  background: var(--card-bg);
  padding: 7rem 5%;
`;

const StrengthsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StrengthCard = styled(motion.div)`
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  will-change: transform;
  transform: translateZ(0);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  }
`;

const StrengthIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--accent-amber-rgb, 255, 193, 7), 0.1);
  border-radius: 10px;
  flex-shrink: 0;

  svg {
    font-size: 1.25rem;
    color: var(--accent-amber);
  }
`;

const StrengthContent = styled.div`
  flex: 1;
`;

const StrengthTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const StrengthDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const CTAContainer = styled(motion.div)`
  text-align: center;
`;

// Process Section
const ProcessSection = styled(Section)`
  background: var(--background-color);
  padding: 7rem 5%;
`;

const ProcessFlow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const ProcessStep = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 140px;
  max-width: 200px;

  @media (max-width: 768px) {
    flex-direction: row;
    max-width: 100%;
    width: 100%;
    text-align: left;
    gap: 1rem;
    padding: 1rem 0;
  }
`;

const ProcessIconWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  border-radius: 16px;
  margin-bottom: 1rem;
  flex-shrink: 0;

  svg {
    font-size: 1.5rem;
    color: #121212;
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    margin-bottom: 0;
  }
`;

const ProcessStepNumber = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--accent-amber);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProcessStepTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 0.25rem 0;
`;

const ProcessStepDesc = styled.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
`;

const ProcessTextWrapper = styled.div`
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const ProcessArrow = styled(motion.div)`
  color: var(--border-color);
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 0.5rem 0;
  }
`;

// Partners Section
const PartnersSection = styled.section`
  background: var(--background-color);
  padding: 5rem 5%;
  border-top: 1px solid var(--border-color);
`;

const IndustryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const IndustryGroup = styled(motion.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--accent-amber);
  }
`;

const IndustryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);

  svg {
    font-size: 1.25rem;
    color: var(--accent-amber);
  }
`;

const IndustryLabel = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
`;

const PartnersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const PartnerLogo = styled(motion.img)`
  height: 36px;
  max-width: 100px;
  object-fit: contain;
  opacity: 0.7;
  transition: opacity 0.2s ease, transform 0.2s ease;
  will-change: transform;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

// Animated counter component
const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: 'easeOut',
      });

      const unsubscribe = rounded.on('change', latest => {
        setDisplayValue(latest);
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, value, count, rounded]);

  return (
    <StatNumber ref={ref}>
      {displayValue.toLocaleString()}<span>{suffix}</span>
    </StatNumber>
  );
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
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const HomePage = () => {
  const { t } = useTranslation();
  const artworkRef = useRef(null);
  // Refs for scroll animations
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const strengthsRef = useRef(null);

  const processRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-50px" });
  const processInView = useInView(processRef, { once: true, margin: "-50px" });
  const strengthsInView = useInView(strengthsRef, { once: true, margin: "-50px" });

  const processSteps = [
    {
      icon: <FaTruckLoading />,
      titleKey: 'process_home_step1_title',
      descKey: 'process_home_step1_desc'
    },
    {
      icon: <FaWarehouse />,
      titleKey: 'process_home_step2_title',
      descKey: 'process_home_step2_desc'
    },
    {
      icon: <FaClipboardCheck />,
      titleKey: 'process_home_step3_title',
      descKey: 'process_home_step3_desc'
    },
    {
      icon: <FaBoxOpen />,
      titleKey: 'process_home_step4_title',
      descKey: 'process_home_step4_desc'
    }
  ];

  const services = [
    { icon: <FaWarehouse />, titleKey: 'home_service_warehouse_title', descKey: 'home_service_warehouse_desc' },
    { icon: <FaSearch />, titleKey: 'home_service_inspection_title', descKey: 'home_service_inspection_desc' },
    { icon: <FaTools />, titleKey: 'home_service_packaging_title', descKey: 'home_service_packaging_desc' },
  ];

  const strongPoints = [
    { icon: <FaBrain />, titleKey: 'strong_point_2_title', descKey: 'strong_point_2_desc' },
    { icon: <FaShippingFast />, titleKey: 'strong_point_5_title', descKey: 'strong_point_5_desc' },
    { icon: <FaMicroscope />, titleKey: 'strong_point_6_title', descKey: 'strong_point_6_desc' },
  ];

  const stats = [
    { value: 2140, suffix: '㎡', labelKey: 'stats_warehouse_space' },
    { value: 3000, suffix: '+', labelKey: 'stats_pallet_capacity' },
    { value: 15, suffix: '+', labelKey: 'stats_years_experience' },
    { value: 99, suffix: '%', labelKey: 'stats_customer_satisfaction' },
  ];

  const partnersByIndustry = [
    {
      industry: t('partners_industry_automotive') || '자동차',
      icon: <FaCar />,
      partners: [
        { name: 'Hyundai', logo: '/logos/Hyundai_Motor_Company_logo.svg.png' },
        { name: 'Kia', logo: '/logos/KIA_logo3.svg.png' },
        { name: 'Continental', logo: '/logos/continental_new.png' },
        { name: 'Kanavi Mobility', logo: '/logos/kanavi_new.png' },
      ]
    },
    {
      industry: t('partners_industry_electronics') || '전자 / 디스플레이',
      icon: <FaTv />,
      partners: [
        { name: 'LG Display', logo: '/logos/lg_new.png' },
        { name: 'LG Electronics', logo: '/logos/lg_new.png' },
        { name: 'Humax', logo: '/logos/humax_new.png' },
      ]
    }
  ];

  const partnersRef = useRef(null);
  const partnersInView = useInView(partnersRef, { once: true, margin: "-50px" });

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection ref={heroRef}>
        <TextContainer
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <HeroLabel
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Global 3PL Solutions
          </HeroLabel>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('hero_title')}
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t('hero_subtitle')}
          </Subtitle>
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link to="/about">
              <PrimaryButton whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {t('hero_button')} <FaArrowRight />
              </PrimaryButton>
            </Link>
            <Link to="/contact">
              <SecondaryButton whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {t('nav_contact')}
              </SecondaryButton>
            </Link>
          </ButtonGroup>

          <ContactInfo
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <ContactItem href="tel:010-3340-6877">
              <FaPhone /> 010-3340-6877
            </ContactItem>
            <ContactItem href="mailto:cgpark@kmtechn.com">
              <FaEnvelope /> cgpark@kmtechn.com
            </ContactItem>
          </ContactInfo>
        </TextContainer>

        <ArtworkContainer
          ref={artworkRef}
          initial={{ opacity: 0, x: 30 }}
          animate={heroInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <Canvas
            camera={{ position: [0, 0, 8], fov: 50 }}
            dpr={[1, 1.5]}
            performance={{ min: 0.5 }}
          >
            <Suspense fallback={<Loader />}>
              <Globe />
            </Suspense>
            <MapControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.4}
              enableDamping
              dampingFactor={0.05}
              mouseButtons={{
                LEFT: THREE.MOUSE.ROTATE,
                MIDDLE: THREE.MOUSE.DOLLY,
                RIGHT: THREE.MOUSE.PAN
              }}
            />
          </Canvas>
        </ArtworkContainer>
      </HeroSection>

      {/* Stats Section */}
      <StatsSection ref={statsRef}>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <StatLabel>{t(stat.labelKey)}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
      </StatsSection>

      {/* Services Section */}
      <ServicesSection ref={servicesRef}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Our Services</SectionLabel>
          <SectionTitle>{t('home_services_title')}</SectionTitle>
          <SectionDescription>{t('home_services_3pl_desc')}</SectionDescription>
        </SectionHeader>

        <ServicesGrid>
          {services.map((service, index) => (
            <Link to="/business" key={service.titleKey} style={{ textDecoration: 'none' }}>
              <ServiceCard
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{t(service.titleKey)}</ServiceTitle>
                <ServiceDescription>{t(service.descKey)}</ServiceDescription>
                <ServiceLink>
                  {t('home_services_button')} <HiOutlineChevronRight />
                </ServiceLink>
              </ServiceCard>
            </Link>
          ))}
        </ServicesGrid>
      </ServicesSection>

      {/* Process Section */}
      <ProcessSection ref={processRef}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={processInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>How It Works</SectionLabel>
          <SectionTitle>{t('process_home_title')}</SectionTitle>
          <SectionDescription>{t('process_home_desc')}</SectionDescription>
        </SectionHeader>

        <ProcessFlow>
          {processSteps.map((step, index) => (
            <React.Fragment key={step.titleKey}>
              <ProcessStep
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <ProcessIconWrapper>
                  {step.icon}
                </ProcessIconWrapper>
                <ProcessTextWrapper>
                  <ProcessStepNumber>STEP {index + 1}</ProcessStepNumber>
                  <ProcessStepTitle>{t(step.titleKey)}</ProcessStepTitle>
                  <ProcessStepDesc>{t(step.descKey)}</ProcessStepDesc>
                </ProcessTextWrapper>
              </ProcessStep>

              {index < processSteps.length - 1 && (
                <ProcessArrow
                  initial={{ opacity: 0 }}
                  animate={processInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.1, duration: 0.3 }}
                >
                  <HiOutlineChevronRight />
                </ProcessArrow>
              )}
            </React.Fragment>
          ))}
        </ProcessFlow>
      </ProcessSection>

      {/* Strengths Section */}
      <StrengthsSection ref={strengthsRef}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={strengthsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Why Choose Us</SectionLabel>
          <SectionTitle>{t('home_strengths_title')}</SectionTitle>
        </SectionHeader>

        <StrengthsGrid>
          {strongPoints.map((item, index) => (
            <StrengthCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={strengthsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <StrengthIcon>{item.icon}</StrengthIcon>
              <StrengthContent>
                <StrengthTitle>{t(item.titleKey)}</StrengthTitle>
                <StrengthDescription>{t(item.descKey)}</StrengthDescription>
              </StrengthContent>
            </StrengthCard>
          ))}
        </StrengthsGrid>

        <CTAContainer
          initial={{ opacity: 0, y: 20 }}
          animate={strengthsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link to="/about">
            <PrimaryButton whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {t('hero_button')} <FaArrowRight />
            </PrimaryButton>
          </Link>
        </CTAContainer>
      </StrengthsSection>

      {/* Partners Section */}
      <PartnersSection ref={partnersRef}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={partnersInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Trusted By</SectionLabel>
          <SectionTitle>{t('core_customers_title')}</SectionTitle>
        </SectionHeader>

        <IndustryContainer>
          {partnersByIndustry.map((group, groupIndex) => (
            <IndustryGroup
              key={group.industry}
              initial={{ opacity: 0, y: 20 }}
              animate={partnersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: groupIndex * 0.15, duration: 0.5 }}
            >
              <IndustryHeader>
                {group.icon}
                <IndustryLabel>{group.industry}</IndustryLabel>
              </IndustryHeader>
              <PartnersGrid>
                {group.partners.map((partner, index) => (
                  <PartnerLogo
                    key={partner.name}
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    initial={{ opacity: 0 }}
                    animate={partnersInView ? { opacity: 0.7 } : {}}
                    transition={{ delay: groupIndex * 0.15 + index * 0.05, duration: 0.4 }}
                  />
                ))}
              </PartnersGrid>
            </IndustryGroup>
          ))}
        </IndustryContainer>
      </PartnersSection>
    </PageContainer>
  );
};

export default HomePage;
