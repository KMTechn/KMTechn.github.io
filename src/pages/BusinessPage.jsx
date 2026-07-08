import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Page';
import { customerPartners, facilityMetrics, operationHighlights } from '../data/company';
import {
  FaArrowRight,
  FaBoxes,
  FaBuilding,
  FaCheckCircle,
  FaExpandArrowsAlt,
  FaQrcode,
  FaRegHandshake,
  FaSearch,
  FaShieldAlt,
  FaShippingFast,
  FaTools,
  FaTruckLoading,
  FaWarehouse,
} from 'react-icons/fa';

const PageContainer = styled.div`
  color: var(--text-color);
  overflow-x: hidden;
  background: var(--background-color);
`;

const HeroSection = styled.section`
  padding: clamp(3.5rem, 5.5vw, 4.8rem) clamp(1rem, 4vw, 3rem) clamp(1rem, 2.4vw, 1.5rem);
  background:
    radial-gradient(circle at 82% 12%, rgba(var(--accent-amber-rgb), 0.08), transparent 24rem),
    linear-gradient(180deg, var(--background-color) 0%, #fff 52%, var(--background-color) 100%);
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 760px) {
    padding-top: 5.25rem;
  }
`;

const HeroShell = styled.div`
  width: min(100%, var(--page-max-width));
  margin: 0 auto;
  display: grid;
  gap: clamp(1.25rem, 2vw, 1.8rem);
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(18rem, 0.43fr) minmax(0, 0.9fr);
  gap: clamp(1.25rem, 3vw, 2.25rem);
  align-items: stretch;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const HeroCopy = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  padding-block: clamp(0.5rem, 2vw, 1rem);
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--accent-amber);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const HeroTitle = styled.h1`
  color: var(--text-color);
  font-size: clamp(2.1rem, 3.75vw, 3.05rem);
  line-height: 1.08;
  margin-bottom: 1.15rem;
  letter-spacing: 0;
  word-break: keep-all;
  overflow-wrap: normal;
  max-width: 10.6em;

  @media (max-width: 520px) {
    font-size: clamp(2.2rem, 11vw, 3rem);
  }
`;

const HeroDescription = styled.p`
  color: #394150;
  font-size: clamp(1rem, 1.25vw, 1.12rem);
  line-height: 1.62;
  max-width: 36rem;
  margin-bottom: 1.35rem;
  word-break: keep-all;
`;

const FeatureRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.35rem;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
    gap: 0.55rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 0.65rem;
  align-items: center;
  min-width: 0;
`;

const FeatureIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--accent-amber);
  border: 1px solid rgba(var(--accent-amber-rgb), 0.45);
  background: rgba(var(--accent-amber-rgb), 0.08);
`;

const FeatureTitle = styled.strong`
  color: var(--text-color);
  display: block;
  font-size: 0.86rem;
  line-height: 1.3;
  word-break: keep-all;
`;

const FeatureText = styled.span`
  color: var(--text-secondary);
  display: block;
  font-size: 0.74rem;
  line-height: 1.35;
  margin-top: 0.1rem;
  word-break: keep-all;
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;

  @media (max-width: 520px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const PrimaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 48px;
  padding: 0.78rem 1.15rem;
  border-radius: 8px;
  background: var(--accent-amber);
  border: 1px solid var(--accent-amber);
  color: #121212;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    color: #121212;
    background: #e6b800;
    transform: translateY(-2px);
  }
`;

const SecondaryLink = styled(PrimaryLink)`
  background: #fff;
  color: var(--text-color);
  border-color: var(--border-color);

  &:hover {
    color: var(--text-color);
    background: #fff;
    border-color: rgba(var(--accent-amber-rgb), 0.6);
  }
`;

const OperationsPanel = styled(motion.div)`
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: clamp(0.85rem, 1.6vw, 1.1rem);
  box-shadow: 0 16px 42px rgba(15, 23, 42, 0.08);
  min-width: 0;
  display: grid;
  grid-template-columns: minmax(15rem, 0.74fr) minmax(0, 1fr);
  gap: 0;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }
`;

const PanelColumn = styled.div`
  min-width: 0;
  display: grid;
  gap: 0.9rem;
  padding-right: clamp(0.9rem, 2vw, 1.2rem);
  border-right: 1px solid var(--border-color);

  @media (max-width: 760px) {
    padding-right: 0;
    border-right: 0;
  }
`;

const PanelBlock = styled.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 0.85rem;
  min-width: 0;
`;

const PanelTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.85rem;
`;

const PanelTitle = styled.h2`
  color: var(--text-color);
  font-size: 1.02rem;
  line-height: 1.25;
  margin: 0;
`;

const PanelCaption = styled.span`
  color: var(--text-secondary);
  font-size: 0.72rem;
  white-space: nowrap;
`;

const CapabilityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const CapabilityCard = styled.div`
  min-height: 82px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--background-color);
  padding: 0.85rem;
  display: grid;
  gap: 0.35rem;

  svg {
    color: var(--accent-amber);
    font-size: 1.2rem;
  }
`;

const CapabilityValue = styled.strong`
  color: var(--text-color);
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  line-height: 1;
  overflow-wrap: anywhere;
  white-space: nowrap;
`;

const CapabilityLabel = styled.span`
  color: var(--text-secondary);
  font-size: 0.76rem;
  line-height: 1.35;
`;

const FlowList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.55rem;

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const FlowItem = styled.div`
  min-height: 70px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 0.65rem;
  display: grid;
  place-items: center;
  text-align: center;
  gap: 0.35rem;

  svg {
    color: var(--text-color);
    font-size: 1.35rem;
  }
`;

const FlowName = styled.strong`
  color: var(--text-color);
  font-size: 0.76rem;
  line-height: 1.25;
  word-break: keep-all;
`;

const MapPanel = styled.div`
  position: relative;
  min-height: clamp(18rem, 30vw, 23rem);
  border: 0;
  border-radius: 0 8px 8px 0;
  overflow: hidden;
  background: #111;

  img {
    width: 100%;
    height: 100%;
    min-height: inherit;
    object-fit: cover;
    padding: 0;
    display: block;
    filter: none;
  }

  @media (max-width: 760px) {
    border-radius: 8px;
    border: 1px solid var(--border-color);
  }
`;

const MapLabel = styled.div`
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  display: grid;
  gap: 0.35rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-radius: 8px;
  padding: 0.75rem 0.9rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  @media (max-width: 900px) {
    display: none;
  }
`;

const LegendLine = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--text-secondary);
  font-size: 0.75rem;
  line-height: 1.3;
  word-break: keep-all;
  white-space: nowrap;

  &::before {
    content: '';
    width: 22px;
    height: 3px;
    border-radius: 8px;
    background: var(--accent-amber);
  }
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(0.9rem, 2vw, 1.25rem);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.article)`
  background: #fff;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(1rem, 1.8vw, 1.25rem);
  min-width: 0;
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
  box-shadow: 0 12px 34px rgba(15, 23, 42, 0.04);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(var(--accent-amber-rgb), 0.65);
    box-shadow: 0 16px 42px rgba(15, 23, 42, 0.08);
  }
`;

const ServiceIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #121212;
  background: rgba(var(--accent-amber-rgb), 0.2);
  border: 1px solid rgba(var(--accent-amber-rgb), 0.4);

  svg {
    font-size: 1.65rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--text-color);
  margin: 0 0 0.55rem;
  line-height: 1.25;
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.88rem;
  line-height: 1.55;
  margin: 0 0 0.85rem;
`;

const ServiceThumbnail = styled.div`
  width: 100%;
  height: clamp(88px, 11vw, 122px);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  background: var(--background-color);
  margin: 0.3rem 0 0.85rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const ServiceList = styled.ul`
  list-style: none;
  display: grid;
  gap: 0.4rem;
  margin: 0 0 0.9rem;
  padding: 0;

  li {
    display: flex;
    gap: 0.45rem;
    color: var(--text-color);
    font-size: 0.82rem;
    line-height: 1.45;
    min-width: 0;
  }

  svg {
    color: var(--accent-amber);
    flex: 0 0 auto;
    margin-top: 0.17rem;
  }
`;

const ModuleFacts = styled.div`
  display: grid;
  gap: 0.5rem;
  margin-top: 0.8rem;
  padding-top: 0.85rem;
  border-top: 1px solid var(--border-color);
`;

const ModuleFact = styled.div`
  display: grid;
  grid-template-columns: 5.5rem minmax(0, 1fr);
  gap: 0.65rem;
  align-items: start;
  color: var(--text-secondary);
  font-size: 0.82rem;
  line-height: 1.5;
  min-width: 0;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }
`;

const ModuleFactLabel = styled.strong`
  color: var(--text-color);
  font-size: 0.76rem;
  line-height: 1.4;
`;

const MetricsBar = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 11rem), 1fr));
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 12px 36px rgba(15, 23, 42, 0.05);
  overflow: hidden;
`;

const MetricCell = styled.div`
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr);
  gap: 0.85rem;
  align-items: center;
  padding: 1rem clamp(1rem, 2vw, 1.35rem);
  min-width: 0;
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-right: 0;
  }
`;

const MetricIcon = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--text-color);
  background: rgba(var(--accent-amber-rgb), 0.14);

  svg {
    font-size: 1.35rem;
  }
`;

const MetricValue = styled.div`
  color: var(--text-color);
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  font-weight: 900;
  line-height: 1.05;
  overflow-wrap: anywhere;
  white-space: nowrap;
`;

const MetricLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.35;
  margin-top: 0.25rem;
`;

const ProcessSection = styled(Section)`
  background: var(--card-bg);
`;

const SectionHeader = styled.div`
  width: min(100%, 760px);
  margin: 0 auto clamp(2rem, 5vw, 3rem);
  text-align: center;
`;

const SectionKicker = styled.span`
  display: inline-block;
  color: var(--accent-amber);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
`;

const SectionHeading = styled.h2`
  color: var(--text-color);
  font-size: clamp(1.8rem, 4vw, 2.45rem);
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: 0;
`;

const SectionDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 680px;
  margin: 0 auto;
`;

const ProcessGrid = styled.div`
  width: min(100%, 1200px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessCard = styled(motion.article)`
  position: relative;
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 0;
`;

const StepTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const StepNumber = styled.span`
  color: var(--accent-amber);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const StepIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: rgba(var(--accent-amber-rgb), 0.1);
  color: var(--accent-amber);
  flex: 0 0 auto;
`;

const StepTitle = styled.h3`
  font-size: 1rem;
  color: var(--text-color);
  margin: 0;
  line-height: 1.35;
`;

const StepDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
`;

const PartnersSection = styled(Section)`
  background: var(--background-color);
`;

const PartnersPreview = styled.div`
  width: min(100%, 1100px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 9rem), 1fr));
  gap: 0.85rem;
`;

const PartnerLogoCard = styled.div`
  min-height: 112px;
  background: #fff;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  display: grid;
  place-items: center;

  img {
    max-width: 150px;
    max-height: 58px;
    object-fit: contain;
  }
`;

const ConsultationSection = styled(Section)`
  background:
    radial-gradient(circle at 80% 0%, rgba(var(--accent-amber-rgb), 0.12), transparent 24rem),
    var(--card-bg);
  border-top: 1px solid var(--border-color);
`;

const ConsultationGrid = styled.div`
  width: min(100%, 1120px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(18rem, 0.42fr) minmax(0, 1fr);
  gap: clamp(1.25rem, 4vw, 2rem);
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const ConsultationIntro = styled.div`
  ${SectionHeading} {
    margin-bottom: 0.85rem;
  }
`;

const ChecklistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const ChecklistCard = styled.article`
  min-height: 132px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: #fff;
  padding: 1rem;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 0.8rem;
  align-items: start;
`;

const ChecklistIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--accent-amber);
  background: rgba(var(--accent-amber-rgb), 0.11);
`;

const ChecklistTitle = styled.h3`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.35;
  margin: 0 0 0.45rem;
`;

const ChecklistText = styled.p`
  color: var(--text-secondary);
  font-size: 0.86rem;
  line-height: 1.55;
  margin: 0;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const BusinessPage = () => {
  const { t } = useTranslation();

  const getSafeArray = (key) => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? result : [result];
  };

  const features = [
    { icon: <FaShieldAlt />, titleKey: 'business_feature_accuracy_title', descKey: 'business_feature_accuracy_desc' },
    { icon: <FaQrcode />, titleKey: 'business_feature_trace_title', descKey: 'business_feature_trace_desc' },
    { icon: <FaRegHandshake />, titleKey: 'business_feature_flexible_title', descKey: 'business_feature_flexible_desc' },
  ];

  const services = [
    {
      icon: <FaWarehouse />,
      image: '/images/kmtech-about-warehouse-hero-960.webp',
      title: t('tpl_warehouse_title'),
      descKey: 'business_warehouse_summary',
      items: getSafeArray('tpl_warehouse_items').slice(0, 3),
      facts: ['business_warehouse_target', 'business_warehouse_operation', 'business_warehouse_output'],
    },
    {
      icon: <FaSearch />,
      image: '/images/kmtech-contact-warehouse-hero-960.webp',
      title: t('tpl_inspection_title'),
      descKey: 'business_inspection_summary',
      items: getSafeArray('tpl_inspection_items').slice(0, 3),
      facts: ['business_inspection_target', 'business_inspection_operation', 'business_inspection_output'],
    },
    {
      icon: <FaBoxes />,
      image: '/images/kmtech-about-warehouse-hero-1440.webp',
      title: t('tpl_packaging_title'),
      descKey: 'business_packaging_summary',
      items: getSafeArray('tpl_packaging_items').slice(0, 3),
      facts: ['business_packaging_target', 'business_packaging_operation', 'business_packaging_output'],
    },
    {
      icon: <FaShippingFast />,
      image: '/images/kmtech-contact-warehouse-hero-1440.webp',
      title: t('business_delivery_title'),
      descKey: 'business_delivery_summary',
      items: getSafeArray('business_delivery_items').slice(0, 3),
      facts: ['business_delivery_target', 'business_delivery_operation', 'business_delivery_output'],
    },
  ];

  const panelFlow = [
    { icon: <FaTruckLoading />, labelKey: 'process_step_1_title' },
    { icon: <FaSearch />, labelKey: 'process_step_5_title' },
    { icon: <FaWarehouse />, labelKey: 'process_step_3_title' },
    { icon: <FaBoxes />, labelKey: 'process_step_7_title' },
  ];

  const processSteps = [
    { icon: <FaWarehouse />, titleKey: 'process_step_1_title', descKey: 'process_step_1_desc' },
    { icon: <FaTruckLoading />, titleKey: 'process_step_2_title', descKey: 'process_step_2_desc' },
    { icon: <FaBoxes />, titleKey: 'process_step_3_title', descKey: 'process_step_3_desc' },
    { icon: <FaTools />, titleKey: 'process_step_4_title', descKey: 'process_step_4_desc' },
    { icon: <FaCheckCircle />, titleKey: 'process_step_5_title', descKey: 'process_step_5_desc' },
    { icon: <FaQrcode />, titleKey: 'process_step_6_title', descKey: 'process_step_6_desc' },
    { icon: <FaBoxes />, titleKey: 'process_step_7_title', descKey: 'process_step_7_desc' },
    { icon: <FaArrowRight />, titleKey: 'process_step_8_title', descKey: 'process_step_8_desc' },
  ];

  const capabilityIcons = [<FaBuilding />, <FaExpandArrowsAlt />, <FaTruckLoading />, <FaShieldAlt />];
  const metricItems = [...facilityMetrics.slice(0, 2), ...operationHighlights];
  const metricIcons = [<FaBuilding />, <FaExpandArrowsAlt />, <FaSearch />, <FaQrcode />, <FaTools />];
  const factLabels = ['business_module_target', 'business_module_operation', 'business_module_output'];
  const consultationChecks = [
    { icon: <FaBoxes />, titleKey: 'business_consult_check_volume_title', descKey: 'business_consult_check_volume_desc' },
    { icon: <FaBuilding />, titleKey: 'business_consult_check_product_title', descKey: 'business_consult_check_product_desc' },
    { icon: <FaCheckCircle />, titleKey: 'business_consult_check_quality_title', descKey: 'business_consult_check_quality_desc' },
    { icon: <FaTruckLoading />, titleKey: 'business_consult_check_delivery_title', descKey: 'business_consult_check_delivery_desc' },
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroShell>
          <HeroGrid>
            <HeroCopy initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <Eyebrow>{t('business_hero_label')}</Eyebrow>
              <HeroTitle>{t('business_title')}</HeroTitle>
              <HeroDescription>{t('tpl_biz_desc')}</HeroDescription>
              <FeatureRow>
                {features.map((feature) => (
                  <FeatureItem key={feature.titleKey}>
                    <FeatureIcon>{feature.icon}</FeatureIcon>
                    <div>
                      <FeatureTitle>{t(feature.titleKey)}</FeatureTitle>
                      <FeatureText>{t(feature.descKey)}</FeatureText>
                    </div>
                  </FeatureItem>
                ))}
              </FeatureRow>
              <HeroActions>
                <PrimaryLink to="/contact">
                  {t('business_consult_cta')} <FaArrowRight />
                </PrimaryLink>
                <SecondaryLink to="/partners">
                  {t('business_partner_cta')} <FaArrowRight />
                </SecondaryLink>
              </HeroActions>
            </HeroCopy>

            <OperationsPanel initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.45 }}>
              <PanelColumn>
                <PanelBlock>
                  <PanelTitleRow>
                    <PanelTitle>{t('business_facility_snapshot')}</PanelTitle>
                    <PanelCaption>{t('business_actual_data_label')}</PanelCaption>
                  </PanelTitleRow>
                  <CapabilityGrid>
                    {facilityMetrics.slice(0, 4).map((metric, index) => (
                      <CapabilityCard key={metric.labelKey}>
                        {capabilityIcons[index]}
                        <CapabilityValue>{metric.value}</CapabilityValue>
                        <CapabilityLabel>{t(metric.labelKey)}</CapabilityLabel>
                      </CapabilityCard>
                    ))}
                  </CapabilityGrid>
                </PanelBlock>

                <PanelBlock>
                  <PanelTitleRow>
                    <PanelTitle>{t('business_flow_label')}</PanelTitle>
                    <PanelCaption>{t('tpl_work_process_title')}</PanelCaption>
                  </PanelTitleRow>
                  <FlowList>
                    {panelFlow.map((item) => (
                      <FlowItem key={item.labelKey}>
                        {item.icon}
                        <FlowName>{t(item.labelKey)}</FlowName>
                      </FlowItem>
                    ))}
                  </FlowList>
                </PanelBlock>
              </PanelColumn>

              <MapPanel>
                <img
                  src="/images/kmtech-about-warehouse-hero.png"
                  srcSet="/images/kmtech-about-warehouse-hero-960.webp 960w, /images/kmtech-about-warehouse-hero-1440.webp 1440w, /images/kmtech-about-warehouse-hero.png 1672w"
                  sizes="(max-width: 760px) 100vw, 46vw"
                  alt=""
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <MapLabel>
                  <LegendLine>{t('business_facility_snapshot')}</LegendLine>
                  <LegendLine>{t('business_actual_data_label')}</LegendLine>
                </MapLabel>
              </MapPanel>
            </OperationsPanel>
          </HeroGrid>

          <ServicesGrid variants={containerVariants} initial="hidden" animate="visible">
            {services.map((service) => (
              <ServiceCard key={service.title} variants={itemVariants}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <div>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{t(service.descKey)}</ServiceDescription>
                  <ServiceThumbnail>
                    <img src={service.image} alt="" loading="lazy" decoding="async" />
                  </ServiceThumbnail>
                  <ServiceList>
                    {service.items.map((item) => (
                      <li key={item}><FaCheckCircle /> <span>{item}</span></li>
                    ))}
                  </ServiceList>
                  <ModuleFacts>
                    {service.facts.map((factKey, factIndex) => (
                      <ModuleFact key={factKey}>
                        <ModuleFactLabel>{t(factLabels[factIndex])}</ModuleFactLabel>
                        <span>{t(factKey)}</span>
                      </ModuleFact>
                    ))}
                  </ModuleFacts>
                </div>
              </ServiceCard>
            ))}
          </ServicesGrid>

          <MetricsBar>
            {metricItems.map((metric, index) => (
              <MetricCell key={metric.labelKey}>
                <MetricIcon>{metricIcons[index]}</MetricIcon>
                <div>
                  <MetricValue>{metric.value}</MetricValue>
                  <MetricLabel>{t(metric.labelKey)}</MetricLabel>
                  <MetricLabel>{t(metric.detailKey)}</MetricLabel>
                </div>
              </MetricCell>
            ))}
          </MetricsBar>
        </HeroShell>
      </HeroSection>

      <ProcessSection>
        <SectionHeader>
          <SectionKicker>{t('business_flow_label')}</SectionKicker>
          <SectionHeading>{t('tpl_work_process_title')}</SectionHeading>
          <SectionDescription>{t('business_flow_desc')}</SectionDescription>
        </SectionHeader>
        <ProcessGrid>
          {processSteps.map((step, index) => (
            <ProcessCard key={step.titleKey} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
              <StepTop>
                <StepNumber>{t('process_step_label', { number: index + 1 })}</StepNumber>
                <StepIcon>{step.icon}</StepIcon>
              </StepTop>
              <StepTitle>{t(step.titleKey)}</StepTitle>
              <StepDescription>{t(step.descKey)}</StepDescription>
            </ProcessCard>
          ))}
        </ProcessGrid>
      </ProcessSection>

      <PartnersSection>
        <SectionHeader>
          <SectionKicker>{t('home_section_partners_label')}</SectionKicker>
          <SectionHeading>{t('core_customers_title')}</SectionHeading>
          <SectionDescription>{t('partners_section_desc')}</SectionDescription>
        </SectionHeader>
        <PartnersPreview>
          {customerPartners.map((partner) => (
            <PartnerLogoCard key={partner.name}>
              <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" decoding="async" />
            </PartnerLogoCard>
          ))}
        </PartnersPreview>
      </PartnersSection>

      <ConsultationSection>
        <ConsultationGrid>
          <ConsultationIntro>
            <SectionKicker>{t('business_consult_ready_label')}</SectionKicker>
            <SectionHeading>{t('business_consult_ready_title')}</SectionHeading>
            <SectionDescription>{t('business_consult_ready_desc')}</SectionDescription>
          </ConsultationIntro>
          <ChecklistGrid>
            {consultationChecks.map((item) => (
              <ChecklistCard key={item.titleKey}>
                <ChecklistIcon>{item.icon}</ChecklistIcon>
                <div>
                  <ChecklistTitle>{t(item.titleKey)}</ChecklistTitle>
                  <ChecklistText>{t(item.descKey)}</ChecklistText>
                </div>
              </ChecklistCard>
            ))}
          </ChecklistGrid>
        </ConsultationGrid>
      </ConsultationSection>
    </PageContainer>
  );
};

export default BusinessPage;
