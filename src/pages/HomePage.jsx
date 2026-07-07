import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Section, SectionTitle } from '../components/ui/Page';
import GlobeFallback from '../components/ui/GlobeFallback';
import { customerPartners, facilityMetrics, operationHighlights } from '../data/company';
import {
  FaArrowRight, FaWarehouse, FaBrain, FaShippingFast, FaMicroscope, FaSearch, FaTools,
  FaCheckCircle, FaEnvelope, FaCar, FaTv, FaTruckLoading, FaBoxOpen, FaClipboardCheck
} from 'react-icons/fa';
import { HiOutlineChevronRight } from 'react-icons/hi';

const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

// Hero Section - Clean Professional
const HeroSection = styled.section`
  min-height: auto;
  padding: clamp(2.6rem, 5vh, 3.6rem) clamp(1rem, 4vw, 4.5rem) clamp(0.8rem, 2vh, 1.25rem);
  background:
    radial-gradient(circle at 77% 18%, rgba(var(--accent-amber-rgb), 0.13), transparent 23rem),
    linear-gradient(180deg, #f8f9fb 0%, var(--background-color) 100%);
  position: relative;
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

  @media (max-width: 1024px) {
    min-height: auto;
    padding: 3.25rem 5% 3rem;
  }

  @media (max-width: 600px) {
    padding: 3.35rem 1.25rem 2.25rem;
  }
`;

const HeroLayout = styled.div`
  width: min(100%, 1560px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(22rem, 0.62fr) minmax(32rem, 1fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
  }
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  min-width: 0;
  width: 100%;

  @media (max-width: 1120px) {
    align-items: center;
    order: 1;
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
  font-size: clamp(2.7rem, 4.1vw, 3.65rem);
  font-weight: 800;
  line-height: 1.08;
  margin-bottom: 1.5rem;
  max-width: 650px;
  width: 100%;
  color: var(--text-color);
  letter-spacing: 0;
  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    font-size: clamp(2.1rem, 10vw, 2.75rem);
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 500px;
  width: 100%;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 500px;

  @media (max-width: 1120px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    width: 100%;
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

  @media (max-width: 600px) {
    display: none;
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

const PrimaryButton = styled(motion(Link))`
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
  justify-content: center;
  border: 1px solid transparent;
  min-height: 48px;
  min-width: 0;
  text-decoration: none;

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

  @media (max-width: 600px) {
    flex: 1 1 100%;
    width: 100%;
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
  height: clamp(28rem, 38vw, 34rem);
  width: 100%;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 12px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(238, 242, 247, 0.92)),
    radial-gradient(circle at 64% 44%, rgba(var(--accent-amber-rgb), 0.16), transparent 16rem);
  box-shadow: 0 26px 70px rgba(15, 23, 42, 0.14);
  cursor: grab;

  &::before {
    content: '';
    position: absolute;
    inset: 1.1rem;
    z-index: -1;
    border-radius: 10px;
    background-image:
      linear-gradient(rgba(15, 23, 42, 0.055) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15, 23, 42, 0.055) 1px, transparent 1px);
    background-size: 34px 34px;
    mask-image: radial-gradient(circle at 56% 44%, black, transparent 68%);
  }

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 1120px) {
    order: 2;
    height: clamp(27rem, 64vw, 34rem);
    max-width: 760px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    height: 20rem;
    max-width: none;
    border-radius: 10px;
    margin-top: 0.25rem;
  }
`;

const NetworkBackdrop = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.9;
  filter: saturate(0.94) contrast(0.98) brightness(1.03);
  z-index: 0;

  @media (max-width: 600px) {
    object-position: 46% center;
  }
`;

const VisualHeader = styled.div`
  position: absolute;
  top: clamp(1rem, 2vw, 1.5rem);
  left: clamp(1rem, 2vw, 1.5rem);
  z-index: 3;
  text-align: left;
`;

const VisualKicker = styled.div`
  color: #253046;
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
`;

const VisualTitle = styled.div`
  color: var(--text-secondary);
  font-size: 0.86rem;
  line-height: 1.35;
  font-weight: 600;
`;

const GlobeStage = styled.div`
  position: absolute;
  right: clamp(0.6rem, 2.2vw, 1.4rem);
  bottom: clamp(4.1rem, 6vw, 5.4rem);
  width: clamp(15rem, 28vw, 25rem);
  height: clamp(15rem, 28vw, 25rem);
  display: grid;
  place-items: center;
  z-index: 2;
  pointer-events: none;

  canvas {
    width: 100% !important;
    height: 100% !important;
  }

  @media (max-width: 600px) {
    right: -0.55rem;
    bottom: 5.7rem;
    width: 12.75rem;
    height: 12.75rem;
  }
`;

const VisualMetricDock = styled.div`
  position: absolute;
  top: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  z-index: 3;
  display: grid;
  gap: 0.5rem;
  width: min(30%, 13rem);

  @media (max-width: 720px) {
    display: none;
  }
`;

const VisualMetric = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.75rem;
  align-items: center;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(14px);
  padding: 0.7rem 0.8rem;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
`;

const VisualMetricLabel = styled.span`
  color: var(--text-secondary);
  font-size: 0.72rem;
  line-height: 1.25;
`;

const VisualMetricValue = styled.strong`
  color: #111827;
  font-size: 0.95rem;
  line-height: 1;
  white-space: nowrap;
`;

const VisualFlow = styled.div`
  position: absolute;
  left: clamp(1rem, 2vw, 1.5rem);
  right: clamp(1rem, 2vw, 1.5rem);
  bottom: clamp(1rem, 2vw, 1.35rem);
  z-index: 4;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  padding: clamp(0.75rem, 1.5vw, 1rem);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.12);
`;

const VisualFlowLabel = styled.div`
  color: #253046;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.65rem;
  text-align: left;
`;

const VisualFlowSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.6rem;

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const VisualFlowStep = styled.div`
  display: grid;
  justify-items: center;
  gap: 0.35rem;
  color: #253046;
  font-size: 0.78rem;
  font-weight: 800;
  line-height: 1.25;
  min-width: 0;

  svg {
    color: var(--accent-amber);
    font-size: 1.35rem;
  }
`;

const HeroProofGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 7.5rem), 1fr));
  gap: 0.75rem;
  width: 100%;
  max-width: 620px;
  margin-top: 1.5rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

const HeroProofItem = styled.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: rgba(var(--card-bg-rgb, 255, 255, 255), 0.64);
  padding: 0.85rem;
  min-width: 0;
`;

const HeroProofValue = styled.div`
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.1;
  white-space: nowrap;
`;

const HeroProofLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.35;
  margin-top: 0.35rem;
  overflow-wrap: anywhere;
`;

// Stats Section
const StatsSection = styled.section`
  background: var(--card-bg);
  padding: clamp(3.5rem, 6vw, 5.5rem) 5%;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 600px) {
    padding: 3rem 1.25rem;
  }
`;

const StatsShell = styled.div`
  width: min(100%, 1240px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(18rem, 0.42fr) minmax(0, 1fr);
  gap: clamp(1.25rem, 4vw, 2.5rem);
  align-items: start;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const StatsIntro = styled(motion.div)`
  text-align: left;
  min-width: 0;

  ${SectionTitle} {
    font-size: clamp(1.65rem, 3vw, 2.25rem);
  }

  @media (max-width: 920px) {
    text-align: center;
    max-width: 680px;
    margin: 0 auto;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(0.75rem, 2vw, 1rem);

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  text-align: left;
  padding: 1.15rem;
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  min-width: 0;
`;

const StatNumber = styled.div`
  font-size: clamp(1.45rem, 2.8vw, 2.25rem);
  font-weight: 800;
  color: var(--text-color);
  line-height: 1;
  margin-bottom: 0.55rem;
  white-space: nowrap;

  span {
    color: var(--accent-amber);
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
  line-height: 1.35;
  overflow-wrap: anywhere;
`;

const StatDetail = styled.p`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.5;
  margin-top: 0.65rem;
`;

const OperationProofGrid = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.75rem, 2vw, 1rem);
  margin-top: 0.25rem;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const OperationProof = styled(motion.div)`
  border: 1px solid rgba(var(--accent-amber-rgb), 0.35);
  border-radius: 8px;
  background: rgba(var(--accent-amber-rgb), 0.08);
  padding: 1rem;
  min-width: 0;
`;

const OperationProofValue = styled.strong`
  display: block;
  color: var(--text-color);
  font-size: 1.05rem;
  line-height: 1.2;
  margin-bottom: 0.45rem;
`;

// Services Section
const ServicesSection = styled(Section)`
  background: var(--background-color);
  padding: clamp(2.4rem, 4vw, 3.5rem) 5% 5.5rem;

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem;
  }
`;

const ServicesShell = styled.div`
  width: min(100%, 1500px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(18rem, 0.34fr) minmax(0, 1fr);
  gap: clamp(1.5rem, 3vw, 2.5rem);
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const ServicesIntro = styled(motion.div)`
  text-align: left;
  min-width: 0;

  ${SectionTitle} {
    font-size: clamp(1.7rem, 3vw, 2.4rem);
  }

  @media (max-width: 980px) {
    text-align: center;
    max-width: 720px;
    margin: 0 auto;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3.5rem;

  @media (max-width: 600px) {
    margin-bottom: 2.25rem;
  }
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
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(0.85rem, 1.4vw, 1.1rem);
  min-width: 0;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(1.15rem, 2vw, 1.4rem);
  cursor: pointer;
  will-change: transform;
  transform: translateZ(0);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;

  &:hover {
    border-color: var(--accent-amber);
    transform: translateY(-4px) translateZ(0);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }

`;

const ServiceMeta = styled.span`
  width: fit-content;
  min-height: 28px;
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(var(--accent-amber-rgb), 0.35);
  background: rgba(var(--accent-amber-rgb), 0.08);
  color: var(--text-color);
  font-size: 0.74rem;
  font-weight: 700;
  line-height: 1.2;
  padding: 0.35rem 0.55rem;
  margin-bottom: 0.85rem;
`;

const ServiceIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  border-radius: 8px;
  margin-bottom: 1rem;

  svg {
    font-size: 1.5rem;
    color: #121212;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
  line-height: 1.3;
  overflow-wrap: anywhere;
`;

const ServiceDescription = styled.p`
  font-size: 0.86rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 0.9rem;
  flex-grow: 1;
`;

const ServiceProof = styled.p`
  color: var(--text-color);
  font-size: 0.8rem;
  line-height: 1.45;
  margin-bottom: 1rem;
  padding-top: 0.85rem;
  border-top: 1px solid var(--border-color);

  strong {
    color: var(--accent-amber);
    font-size: 0.74rem;
    margin-right: 0.35rem;
  }
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

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem;
  }
`;

const StrengthsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  max-width: 1200px;
  margin: 0 auto 3rem;
`;

const StrengthCard = styled(motion.div)`
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  min-width: 0;
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
  min-width: 0;
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

  @media (max-width: 600px) {
    padding: 4.5rem 1.25rem;
  }
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
  border-radius: 8px;
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

  @media (max-width: 600px) {
    padding: 4rem 1.25rem;
  }
`;

const IndustryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
  gap: clamp(1.5rem, 4vw, 3rem);
  max-width: 1000px;
  margin: 0 auto;
`;

const IndustryGroup = styled(motion.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
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

const PartnerRouteGrid = styled.div`
  width: min(100%, 1000px);
  margin: clamp(1.25rem, 3vw, 2rem) auto 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const PartnerRouteCard = styled(Link)`
  min-height: 132px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--card-bg);
  color: inherit;
  text-decoration: none;
  padding: 1rem;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 0.85rem;
  align-items: start;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    color: inherit;
    transform: translateY(-3px);
    border-color: rgba(var(--accent-amber-rgb), 0.6);
    box-shadow: 0 12px 34px rgba(15, 23, 42, 0.08);
  }
`;

const PartnerRouteIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: rgba(var(--accent-amber-rgb), 0.12);
  color: var(--accent-amber);
`;

const PartnerRouteTitle = styled.h3`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.3;
  margin: 0 0 0.45rem;
`;

const PartnerRouteText = styled.p`
  color: var(--text-secondary);
  font-size: 0.84rem;
  line-height: 1.55;
  margin: 0 0 0.8rem;
`;

const PartnerRouteAction = styled.span`
  color: var(--accent-amber);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  font-weight: 800;
`;

const PartnerLogo = styled(motion.img).attrs({
  loading: 'lazy',
  decoding: 'async',
})`
  height: 50px;
  max-width: 140px;
  object-fit: contain;
  transition: transform 0.2s ease, background 0.2s ease;
  will-change: transform;
  border-radius: 6px;

  /* White background for logos that need it in dark mode */
  ${props => props.$needsBg && `
    html[data-theme="dark"] & {
      background: white;
      padding: 8px 12px;
    }
  `}

  &:hover {
    transform: scale(1.05);
  }
`;

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
    { icon: <FaWarehouse />, titleKey: 'home_service_warehouse_title', descKey: 'home_service_warehouse_desc', proofKey: 'metric_capacity_detail' },
    { icon: <FaSearch />, titleKey: 'home_service_inspection_title', descKey: 'home_service_inspection_desc', proofKey: 'metric_clean_booth_detail' },
    { icon: <FaTools />, titleKey: 'home_service_packaging_title', descKey: 'home_service_packaging_desc', proofKey: 'metric_rework_detail' },
    { icon: <FaShippingFast />, titleKey: 'business_delivery_title', descKey: 'business_delivery_summary', proofKey: 'metric_qr_detail' },
  ];

  const strongPoints = [
    { icon: <FaBrain />, titleKey: 'strong_point_2_title', descKey: 'strong_point_2_desc' },
    { icon: <FaShippingFast />, titleKey: 'strong_point_5_title', descKey: 'strong_point_5_desc' },
    { icon: <FaMicroscope />, titleKey: 'strong_point_6_title', descKey: 'strong_point_6_desc' },
  ];

  const heroProof = [
    { value: '2,140㎡', labelKey: 'hero_proof_facility' },
    { value: '3,000+', labelKey: 'hero_proof_capacity' },
    { value: '40ft x2', labelKey: 'metric_container_dock' },
    { value: '16CH', labelKey: 'metric_cctv' },
  ];

  const visualMetrics = facilityMetrics.slice(0, 3);

  const partnersByIndustry = Object.entries(
    customerPartners.reduce((groups, partner) => {
      groups[partner.industryKey] = groups[partner.industryKey] || [];
      groups[partner.industryKey].push(partner);
      return groups;
    }, {})
  ).map(([industryKey, partners]) => ({
    industry: t(industryKey),
    icon: industryKey === 'partners_industry_automotive' ? <FaCar /> : <FaTv />,
    partners,
  }));

  const partnersRef = useRef(null);
  const partnersInView = useInView(partnersRef, { once: true, margin: "-50px" });

  const routeCards = [
    { to: '/business', icon: <FaWarehouse />, titleKey: 'home_route_business_title', descKey: 'home_route_business_desc' },
    { to: '/partners', icon: <FaCar />, titleKey: 'home_route_partners_title', descKey: 'home_route_partners_desc' },
    { to: '/contact', icon: <FaEnvelope />, titleKey: 'home_route_contact_title', descKey: 'home_route_contact_desc' },
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection ref={heroRef}>
        <HeroLayout>
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
              <PrimaryButton to="/contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {t('hero_primary_cta')} <FaArrowRight />
              </PrimaryButton>
              <SecondaryButton to="/business" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {t('hero_secondary_cta')}
              </SecondaryButton>
            </ButtonGroup>

            <HeroProofGrid
              aria-label={t('hero_proof_label')}
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {heroProof.map((item) => (
                <HeroProofItem key={item.labelKey}>
                  <HeroProofValue>{item.value}</HeroProofValue>
                  <HeroProofLabel>{t(item.labelKey)}</HeroProofLabel>
                </HeroProofItem>
              ))}
            </HeroProofGrid>

            <ContactInfo
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <ContactItem href="mailto:cgpark@kmtechn.com">
                <FaEnvelope /> cgpark@kmtechn.com
              </ContactItem>
            </ContactInfo>
          </TextContainer>

          <ArtworkContainer
            ref={artworkRef}
            initial={{ opacity: 0, y: 18 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <NetworkBackdrop
              src="/images/kmtech-home-network-backdrop.png"
              srcSet="/images/kmtech-home-network-backdrop-960.webp 960w, /images/kmtech-home-network-backdrop-1440.webp 1440w, /images/kmtech-home-network-backdrop.png 1672w"
              sizes="(max-width: 1120px) 100vw, 58vw"
              alt=""
              loading="eager"
              decoding="async"
            />
            <VisualHeader>
              <VisualKicker>{t('hero_visual_label')}</VisualKicker>
              <VisualTitle>{t('hero_visual_network')}</VisualTitle>
            </VisualHeader>
            <VisualMetricDock>
              {visualMetrics.map((metric) => (
                <VisualMetric key={metric.labelKey}>
                  <VisualMetricLabel>{t(metric.labelKey)}</VisualMetricLabel>
                  <VisualMetricValue>{metric.value}</VisualMetricValue>
                </VisualMetric>
              ))}
            </VisualMetricDock>
            <GlobeStage>
              <GlobeFallback />
            </GlobeStage>
            <VisualFlow>
              <VisualFlowLabel>{t('hero_visual_flow_label')}</VisualFlowLabel>
              <VisualFlowSteps>
                {processSteps.map((step) => (
                  <VisualFlowStep key={step.titleKey}>
                    {step.icon}
                    <span>{t(step.titleKey)}</span>
                  </VisualFlowStep>
                ))}
              </VisualFlowSteps>
            </VisualFlow>
          </ArtworkContainer>
        </HeroLayout>
      </HeroSection>

      {/* Services Section */}
      <ServicesSection ref={servicesRef}>
        <ServicesShell>
          <ServicesIntro
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>{t('home_problem_label')}</SectionLabel>
            <SectionTitle>{t('home_problem_title')}</SectionTitle>
            <SectionDescription>{t('home_problem_desc')}</SectionDescription>
          </ServicesIntro>

          <ServicesGrid>
            {services.map((service, index) => (
              <Link to="/business" key={service.titleKey} style={{ textDecoration: 'none', height: '100%' }}>
                <ServiceCard
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <ServiceMeta>{t('home_section_services_label')}</ServiceMeta>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{t(service.titleKey)}</ServiceTitle>
                  <ServiceDescription>{t(service.descKey)}</ServiceDescription>
                  <ServiceProof>
                    <strong>{t('home_problem_proof_label')}</strong>
                    {t(service.proofKey)}
                  </ServiceProof>
                  <ServiceLink>
                    {t('home_services_button')} <HiOutlineChevronRight />
                  </ServiceLink>
                </ServiceCard>
              </Link>
            ))}
          </ServicesGrid>
        </ServicesShell>
      </ServicesSection>

      {/* Stats Section */}
      <StatsSection ref={statsRef}>
        <StatsShell>
          <StatsIntro
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>{t('home_facility_label')}</SectionLabel>
            <SectionTitle>{t('home_facility_title')}</SectionTitle>
            <SectionDescription>{t('home_facility_desc')}</SectionDescription>
          </StatsIntro>

          <StatsGrid>
            {facilityMetrics.map((metric, index) => (
              <StatItem
                key={metric.labelKey}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <StatNumber>{metric.value}</StatNumber>
                <StatLabel>{t(metric.labelKey)}</StatLabel>
                <StatDetail>{t(metric.detailKey)}</StatDetail>
              </StatItem>
            ))}
            <OperationProofGrid>
              {operationHighlights.map((item, index) => (
                <OperationProof
                  key={item.labelKey}
                  initial={{ opacity: 0, y: 16 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + index * 0.08, duration: 0.45 }}
                >
                  <OperationProofValue>{item.value}</OperationProofValue>
                  <StatLabel>{t(item.detailKey)}</StatLabel>
                </OperationProof>
              ))}
            </OperationProofGrid>
          </StatsGrid>
        </StatsShell>
      </StatsSection>

      {/* Process Section */}
      <ProcessSection ref={processRef}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={processInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>{t('home_section_process_label')}</SectionLabel>
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
                  <ProcessStepNumber>{t('process_step_label', { number: index + 1 })}</ProcessStepNumber>
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
          <SectionLabel>{t('home_outcome_label')}</SectionLabel>
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
          <PrimaryButton to="/contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            {t('home_strengths_cta')} <FaArrowRight />
          </PrimaryButton>
        </CTAContainer>
      </StrengthsSection>

      {/* Partners Section */}
      <PartnersSection ref={partnersRef}>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          animate={partnersInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>{t('home_section_partners_label')}</SectionLabel>
          <SectionTitle>{t('core_customers_title')}</SectionTitle>
          <SectionDescription>{t('home_partner_desc')}</SectionDescription>
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
                    $needsBg={partner.needsBg}
                    initial={{ opacity: 0 }}
                    animate={partnersInView ? { opacity: 1 } : {}}
                    transition={{ delay: groupIndex * 0.15 + index * 0.05, duration: 0.4 }}
                  />
                ))}
              </PartnersGrid>
            </IndustryGroup>
          ))}
        </IndustryContainer>
        <PartnerRouteGrid>
          {routeCards.map((route) => (
            <PartnerRouteCard to={route.to} key={route.titleKey}>
              <PartnerRouteIcon>{route.icon}</PartnerRouteIcon>
              <div>
                <PartnerRouteTitle>{t(route.titleKey)}</PartnerRouteTitle>
                <PartnerRouteText>{t(route.descKey)}</PartnerRouteText>
                <PartnerRouteAction>{t('home_route_cta')} <FaArrowRight /></PartnerRouteAction>
              </div>
            </PartnerRouteCard>
          ))}
        </PartnerRouteGrid>
      </PartnersSection>
    </PageContainer>
  );
};

export default HomePage;
