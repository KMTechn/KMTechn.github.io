import React, { Suspense, useState, useRef, useEffect, lazy } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Vector3 } from 'three';
import { MapControls } from '@react-three/drei';
import { Section, SectionTitle } from '../components/ui/Page';
import Loader from '../components/ui/Loader';
import {
  FaArrowRight, FaWarehouse, FaBrain, FaShippingFast, FaMicroscope, FaSearch, FaTools
} from 'react-icons/fa';

// 글로브를 동적으로 로드하여 번들 크기 최적화
const Globe = lazy(() => import('../components/ui/Globe'));

const PageContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled(Section)`
  min-height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 2rem 5%;
  background: var(--background-color);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
    padding: 3rem 5%;
  }
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    align-items: center;
    order: 2;
  }
`;

const ArtworkContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: relative;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 900px) {
    order: 1;
    width: 90%;
    max-width: 450px;
    margin: 0 auto 2rem;
    aspect-ratio: 1 / 1;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;

  span {
    color: var(--accent-amber);
  }
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  padding: clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem);
  border-radius: 50px;
  background-color: var(--accent-amber);
  color: #121212;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid var(--accent-amber);

  &:hover {
    background-color: transparent;
    color: var(--accent-amber);
  }
`;

const ServicesSection = styled(Section)`
  background-color: var(--card-bg);
`;

const StrengthsSection = styled(Section)`
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const StrengthCard = styled(motion.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const StrengthIcon = styled.div`
  font-size: 3rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`;

const StrengthTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const StrengthDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
`;

const MoreButtonContainer = styled(motion.div)`
  margin-top: 3rem;
`;

// New interactive services components
const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const ServiceTabsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 50px;
  padding: 0.5rem;
  background-color: var(--background-color);
`;

const ServiceTab = styled.button`
  background-color: ${props => props.$isActive ? 'var(--accent-amber)' : 'transparent'};
  color: ${props => props.$isActive ? '#121212' : 'var(--text-color)'};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;

  &:hover:not(.active) {
    background-color: ${props => !props.$isActive && 'var(--card-bg)'};
  }
`;

const ServiceContentContainer = styled(motion.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  width: 100%;
  max-width: 800px;
  min-height: 160px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceContent = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
`;


const latLonToVector3 = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new Vector3(x, y, z);
};

const HomePage = () => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState(0);
  const artworkRef = useRef(null);
  const [canvasKey, setCanvasKey] = useState(Date.now());

  useEffect(() => {
    const handleResize = () => {
      setCanvasKey(Date.now());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // Set camera to focus on Korea initially
  const initialCameraPosition = latLonToVector3(37.5665, 126.9780, 8);

  const [globeSettings, setGlobeSettings] = useState({
    ambientIntensity: 1.0,
    directionalIntensity: 12.0, // Decreased brightness
    metalness: 0.2,
    roughness: 0.5,
    emissiveIntensity: 2.5, // Significantly increased night light brightness
    cloudsOpacity: 0.25, 
    atmosphereGlowColor: '#5080ff',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const services = [
    { icon: <FaWarehouse size={24} />, titleKey: 'home_service_warehouse_title', descKey: 'home_service_warehouse_desc' },
    { icon: <FaSearch size={24} />, titleKey: 'home_service_inspection_title', descKey: 'home_service_inspection_desc' },
    { icon: <FaTools size={24} />, titleKey: 'home_service_packaging_title', descKey: 'home_service_packaging_desc' },
  ];

  const strongPoints = [
    { icon: <FaBrain />, title: t('strong_point_2_title'), desc: t('strong_point_2_desc') },
    { icon: <FaShippingFast />, title: t('strong_point_5_title'), desc: t('strong_point_5_desc') },
    { icon: <FaMicroscope />, title: t('strong_point_6_title'), desc: t('strong_point_6_desc') },
  ];

  const contentAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2 }
  };

  return (
    <PageContainer>
      <HeroSection>
        {/* <GlobeControls settings={globeSettings} onUpdate={setGlobeSettings} /> */}
        <TextContainer variants={containerVariants} initial="hidden" animate="visible">
          <Title variants={itemVariants}>
            <span dangerouslySetInnerHTML={{ __html: t('hero_title') }} />
          </Title>
          <Subtitle variants={itemVariants}>{t('hero_subtitle')}</Subtitle>
          <Link to="/about">
            <CTAButton variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {t('hero_button')} <FaArrowRight />
            </CTAButton>
          </Link>
        </TextContainer>
        <ArtworkContainer 
          ref={artworkRef}
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Canvas 
            key={canvasKey}
            camera={{ position: initialCameraPosition, fov: 50 }}
          >
            <Suspense fallback={<Loader />}>
              <Globe {...globeSettings} />
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

      <ServicesSection>
        <SectionTitle>{t('home_services_title')}</SectionTitle>
        <ServicesWrapper>
          <ServiceTabsContainer>
            {services.map((service, index) => (
              <ServiceTab
                key={service.titleKey}
                $isActive={activeService === index}
                onMouseEnter={() => setActiveService(index)}
              >
                {service.icon}
                <span>{t(service.titleKey).split(' ')[0]}</span>
              </ServiceTab>
            ))}
          </ServiceTabsContainer>
          <ServiceContentContainer>
            <AnimatePresence mode="wait">
              <ServiceContent
                key={activeService}
                {...contentAnimation}
              >
                {t(services[activeService].descKey)}
              </ServiceContent>
            </AnimatePresence>
          </ServiceContentContainer>
          <Link to="/business">
            <CTAButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {t('home_services_button')}
            </CTAButton>
          </Link>
        </ServicesWrapper>
      </ServicesSection>

      <StrengthsSection>
        <SectionTitle>{t('home_strengths_title')}</SectionTitle>
        <Grid>
          {strongPoints.map((item, index) => (
            <StrengthCard key={index} whileHover={{ y: -10 }}>
              <StrengthIcon>{item.icon}</StrengthIcon>
              <StrengthTitle>{item.title}</StrengthTitle>
              <StrengthDescription>{item.desc}</StrengthDescription>
            </StrengthCard>
          ))}
        </Grid>
        <MoreButtonContainer>
          <Link to="/about">
            <CTAButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {t('hero_button')} <FaArrowRight />
            </CTAButton>
          </Link>
        </MoreButtonContainer>
      </StrengthsSection>
    </PageContainer>
  );
};

export default HomePage;
