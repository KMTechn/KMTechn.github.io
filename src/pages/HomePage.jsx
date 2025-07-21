import React, { Suspense, useMemo, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Text, useTexture, Stars, Tube } from '@react-three/drei';
import * as THREE from 'three';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShippingFast, FaClipboardCheck, FaWarehouse, FaQuoteLeft } from 'react-icons/fa';
import { Section, SectionTitle } from '../components/ui/Page';

// Import partner logos
import Logo1 from '../assets/logos/logo1.svg';
import Logo2 from '../assets/logos/logo2.svg';
import Logo3 from '../assets/logos/logo3.svg';
import Logo4 from '../assets/logos/logo4.svg';

const PageContainer = styled.div`
  width: 100%;
  background-color: var(--titanium-dark);
  color: var(--text-primary);
`;

const HeroSection = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 5%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    height: auto;
    padding: 8rem 5% 4rem;
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
  height: 80vh;
  min-height: 500px;
  cursor: grab;

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
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  max-width: 600px;

  span {
    color: var(--accent-amber);
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  border: 1px solid var(--accent-amber);
  border-radius: 8px;
  background-color: var(--accent-amber);
  color: var(--titanium-dark);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: var(--accent-amber);
  }
`;

const PartnersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  
  img {
    height: 40px;
    opacity: 0.8;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 1;
    }
  }
`;

const ServicesHighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceHighlightCard = styled(motion.div)`
  background: var(--titanium-light);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`;

const ServiceHighlightTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceHighlightDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const TestimonialCard = styled.div`
  background: var(--titanium-light);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2.5rem;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const QuoteIcon = styled(FaQuoteLeft)`
  font-size: 2rem;
  color: var(--accent-amber);
  opacity: 0.5;
  margin-bottom: 1rem;
`;

const QuoteText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const QuoteAuthor = styled.p`
  font-weight: bold;
  color: var(--text-primary);
`;

const getCoordinatesFromLatLng = (lat, lng, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
};

const citiesData = [
  { name: 'Seoul', lat: 37.5665, lng: 126.9780 },
  { name: 'Berlin', lat: 52.5200, lng: 13.4050 },
  { name: 'Shanghai', lat: 31.2304, lng: 121.4737 },
  { name: 'Hong Kong', lat: 22.3193, lng: 114.1694 },
];

const majorCities = citiesData.map(city => ({
  ...city,
  position: getCoordinatesFromLatLng(city.lat, city.lng, 2.5)
}));

function ConnectingLine({ start, end }) {
  const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  // Ensure the control point is always outside the sphere's radius (2.5)
  midPoint.normalize().multiplyScalar(2.5 * 1.3);

  const curve = new THREE.QuadraticBezierCurve3(start, midPoint, end);
  
  return (
    <Tube args={[curve, 32, 0.01, 8, false]}>
      <meshStandardMaterial color="#87CEEB" emissive="#87CEEB" emissiveIntensity={0.8} toneMapped={false} />
    </Tube>
  );
}

function CityPoint({ position, name }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group position={position}>
      <Sphere
        args={[0.05, 16, 16]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial color={hovered ? 'red' : 'orange'} emissive={hovered ? 'red' : 'orange'} emissiveIntensity={2} />
      </Sphere>
      {hovered && (
        <Text
          position={[0, 0.15, 0]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="black"
        >
          {name}
        </Text>
      )}
    </group>
  );
}

function Globe() {
  const texture = useTexture('/earth-texture.jpg');
  const cloudsTexture = useTexture('/clouds.jpg');
  const seoul = majorCities.find(c => c.name === 'Seoul').position;
  const shanghai = majorCities.find(c => c.name === 'Shanghai').position;
  const hongkong = majorCities.find(c => c.name === 'Hong Kong').position;
  const berlin = majorCities.find(c => c.name === 'Berlin').position;

  const cloudsRef = useRef();

  useFrame((_, delta) => {
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Sphere args={[2.5, 64, 64]}>
        <meshStandardMaterial 
          map={texture}
          metalness={0.5}
          roughness={0.7}
        />
      </Sphere>
      <Sphere ref={cloudsRef} args={[2.52, 64, 64]}>
        <meshStandardMaterial
          map={cloudsTexture}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </Sphere>
      {majorCities.map(city => <CityPoint key={city.name} {...city} />)}
      
      {/* A clear, looped connection */}
      <ConnectingLine start={seoul} end={shanghai} />
      <ConnectingLine start={shanghai} end={hongkong} />
      <ConnectingLine start={hongkong} end={berlin} />
      <ConnectingLine start={berlin} end={seoul} />
    </group>
  );
}

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const partnerLogos = useMemo(() => [Logo1, Logo2, Logo3, Logo4], []);

  return (
    <PageContainer>
      <HeroSection>
        <TextContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Title variants={itemVariants}>
            Precision in Motion, <span>Global</span> Reach.
          </Title>
          <Subtitle variants={itemVariants}>
            KMT LOGISTICS delivers unparalleled service in logistics, inspection, and storage, powering your supply chain with reliability and expertise.
          </Subtitle>
          <Link to="/services">
            <CTAButton
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Our Solutions
            </CTAButton>
          </Link>
        </TextContainer>
        <ArtworkContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Canvas camera={{ position: [0, 0, 8] }}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 10, 5]} intensity={2.5} />
            <directionalLight position={[-10, -10, -5]} intensity={0.8} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
            <Suspense fallback={null}>
              <Globe />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={true} autoRotate autoRotateSpeed={0.4} />
          </Canvas>
        </ArtworkContainer>
      </HeroSection>

      <Section bg="var(--titanium-light)">
        <SectionTitle>Trusted by Industry Leaders</SectionTitle>
        <PartnersContainer>
          {partnerLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Partner logo ${index + 1}`} />
          ))}
        </PartnersContainer>
      </Section>

      <Section>
        <SectionTitle>Our Core Services</SectionTitle>
        <ServicesHighlightGrid>
          <ServiceHighlightCard>
            <IconWrapper><FaShippingFast /></IconWrapper>
            <ServiceHighlightTitle>Logistics</ServiceHighlightTitle>
            <ServiceHighlightDescription>End-to-end solutions for seamless global transit.</ServiceHighlightDescription>
          </ServiceHighlightCard>
          <ServiceHighlightCard>
            <IconWrapper><FaClipboardCheck /></IconWrapper>
            <ServiceHighlightTitle>Inspection</ServiceHighlightTitle>
            <ServiceHighlightDescription>Meticulous quality and compliance verification.</ServiceHighlightDescription>
          </ServiceHighlightCard>
          <ServiceHighlightCard>
            <IconWrapper><FaWarehouse /></IconWrapper>
            <ServiceHighlightTitle>Storage</ServiceHighlightTitle>
            <ServiceHighlightDescription>Secure, flexible, and advanced warehousing.</ServiceHighlightDescription>
          </ServiceHighlightCard>
        </ServicesHighlightGrid>
      </Section>

      <Section bg="var(--titanium-light)">
        <SectionTitle>What Our Clients Say</SectionTitle>
        <TestimonialCard>
          <QuoteIcon />
          <QuoteText>
            "Working with KMT LOGISTICS transformed our supply chain. Their attention to detail and proactive communication are second to none. We consider them a true partner in our success."
          </QuoteText>
          <QuoteAuthor>
            - Jane Doe, CEO of GlobalTrans
          </QuoteAuthor>
        </TestimonialCard>
      </Section>
    </PageContainer>
  );
};

export default HomePage;
