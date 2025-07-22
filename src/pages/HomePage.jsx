import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Vector3 } from 'three';
import { MapControls } from '@react-three/drei';
import { Section, SectionTitle } from '../components/ui/Page';
import Globe from '../components/ui/Globe';
import GlobeControls from '../components/ui/GlobeControls';
import { 
  FaArrowRight, FaCar, FaWarehouse, FaAward, FaBrain, FaShippingFast 
} from 'react-icons/fa';

const PageContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled(Section)`
  min-height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 5%;
  background: var(--background-color);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    height: auto;
    padding: 4rem 5%;
  }
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 2rem;

  @media (max-width: 900px) {
    align-items: center;
    order: 2;
    padding-right: 0;
  }
`;

const ArtworkContainer = styled(motion.div)`
  height: 70vh;
  min-height: 400px;
  cursor: grab;
  width: 100%;
  position: relative;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 900px) {
    height: 40vh;
    width: 100%;
    order: 1;
    margin-bottom: 2rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  max-width: 600px;

  span {
    color: var(--accent-amber);
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  border-radius: 50px;
  background-color: var(--accent-amber);
  color: #121212;
  font-size: 1.1rem;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--accent-amber);
`;

const ServiceDescription = styled.p`
  line-height: 1.7;
  flex-grow: 1;
  margin-bottom: 2rem;
`;

const StrengthsSection = styled(Section)`
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const StrengthCard = styled(ServiceCard)`
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

  // Set camera to focus on Korea initially
  const initialCameraPosition = latLonToVector3(37.5665, 126.9780, 10);

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

  const strongPoints = [
    { icon: <FaAward />, title: t('strong_point_1_title'), desc: t('strong_point_1_desc') },
    { icon: <FaBrain />, title: t('strong_point_2_title'), desc: t('strong_point_2_desc') },
    { icon: <FaShippingFast />, title: t('strong_point_5_title'), desc: t('strong_point_5_desc') },
  ];

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
        <ArtworkContainer initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
          <Canvas camera={{ position: initialCameraPosition, fov: 50 }}>
            <Suspense fallback={null}>
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
        <Grid>
          <ServiceCard whileHover={{ y: -10 }}>
            <ServiceTitle><FaCar size={30} /> {t('home_services_agent_title')}</ServiceTitle>
            <ServiceDescription>{t('home_services_agent_desc')}</ServiceDescription>
            <Link to="/business"><CTAButton>{t('home_services_button')}</CTAButton></Link>
          </ServiceCard>
          <ServiceCard whileHover={{ y: -10 }}>
            <ServiceTitle><FaWarehouse size={30} /> {t('home_services_3pl_title')}</ServiceTitle>
            <ServiceDescription>{t('home_services_3pl_desc')}</ServiceDescription>
            <Link to="/business"><CTAButton>{t('home_services_button')}</CTAButton></Link>
          </ServiceCard>
        </Grid>
      </ServicesSection>

      <StrengthsSection>
        <SectionTitle>{t('about_strong_points_title')}</SectionTitle>
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