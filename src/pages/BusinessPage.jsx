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
  FaCheckCircle,
  FaClipboardCheck,
  FaQrcode,
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
`;

const HeroSection = styled.section`
  padding: clamp(5.5rem, 9vw, 8rem) clamp(1rem, 5vw, 5%) clamp(4rem, 7vw, 5rem);
  background: linear-gradient(165deg, var(--background-color) 0%, var(--card-bg) 100%);
  border-bottom: 1px solid var(--border-color);
`;

const HeroGrid = styled.div`
  width: min(100%, 1200px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(20rem, 0.95fr);
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-amber);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
`;

const HeroTitle = styled.h1`
  color: var(--text-color);
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1.15;
  margin-bottom: 1.25rem;
  letter-spacing: 0;
  word-break: keep-all;
`;

const HeroDescription = styled.p`
  color: var(--text-secondary);
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  line-height: 1.8;
  max-width: 680px;
  margin-bottom: 2rem;
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const PrimaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0.85rem 1.2rem;
  border-radius: 8px;
  background: var(--accent-amber);
  border: 1px solid var(--accent-amber);
  color: #121212;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    color: #121212;
    background: #e6b800;
    transform: translateY(-2px);
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`;

const SecondaryLink = styled(PrimaryLink)`
  background: transparent;
  color: var(--text-color);
  border-color: var(--border-color);

  &:hover {
    color: var(--accent-amber);
    background: transparent;
    border-color: var(--accent-amber);
  }
`;

const MetricStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  max-width: 720px;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled.div`
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  min-width: 0;
`;

const MetricValue = styled.div`
  color: var(--text-color);
  font-size: clamp(1.15rem, 3vw, 1.55rem);
  font-weight: 800;
  line-height: 1.1;
  white-space: nowrap;
`;

const MetricLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.35;
  margin-top: 0.4rem;
`;

const MetricDetail = styled.div`
  color: var(--text-secondary);
  font-size: 0.74rem;
  line-height: 1.35;
  margin-top: 0.35rem;
`;

const OperationsPanel = styled(motion.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(1.25rem, 3vw, 1.75rem);
  box-shadow: 0 14px 48px rgba(0, 0, 0, 0.08);
  min-width: 0;
`;

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1rem;
`;

const LogoPlate = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-color);
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  padding: 0.65rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const PanelTitle = styled.h2`
  color: var(--text-color);
  font-size: clamp(1.15rem, 2.5vw, 1.55rem);
  margin: 0;
  line-height: 1.3;
`;

const FlowRail = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const FlowItem = styled.div`
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.85rem;
  min-height: 92px;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;

  svg {
    color: var(--accent-amber);
    font-size: 1rem;
  }
`;

const FlowLabel = styled.span`
  color: var(--text-secondary);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const FlowName = styled.strong`
  color: var(--text-color);
  font-size: 0.9rem;
  line-height: 1.3;
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Highlight = styled.div`
  border: 1px solid rgba(var(--accent-amber-rgb), 0.35);
  background: rgba(var(--accent-amber-rgb), 0.08);
  border-radius: 8px;
  padding: 0.85rem;
`;

const HighlightValue = styled.div`
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--text-color);
  line-height: 1.2;
`;

const HighlightLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.75rem;
  line-height: 1.35;
  margin-top: 0.35rem;
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
  font-weight: 700;
  letter-spacing: 0.12em;
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

const ServicesGrid = styled(motion.div)`
  width: min(100%, 1200px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.25rem);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.article)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: clamp(1.1rem, 3vw, 1.45rem);
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(var(--accent-amber-rgb), 0.6);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.08);
  }
`;

const ServiceIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: #121212;
  background: var(--accent-amber);

  svg {
    font-size: 1.25rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.08rem;
  color: var(--text-color);
  margin: 0;
  line-height: 1.35;
`;

const ServiceList = styled.ul`
  list-style: none;
  display: grid;
  gap: 0.65rem;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    gap: 0.55rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.55;
    min-width: 0;
  }

  svg {
    color: var(--accent-amber);
    flex: 0 0 auto;
    margin-top: 0.2rem;
  }
`;

const ProcessSection = styled(Section)`
  background: var(--card-bg);
`;

const ProcessGrid = styled.div`
  width: min(100%, 1200px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1080px) {
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
  min-height: 170px;
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
  letter-spacing: 0.1em;
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

  const services = [
    { icon: <FaWarehouse />, title: t('tpl_warehouse_title'), items: getSafeArray('tpl_warehouse_items') },
    { icon: <FaSearch />, title: t('tpl_inspection_title'), items: getSafeArray('tpl_inspection_items') },
    { icon: <FaTools />, title: t('tpl_packaging_title'), items: getSafeArray('tpl_packaging_items') },
    { icon: <FaShippingFast />, title: t('business_delivery_title'), items: getSafeArray('business_delivery_items') },
  ];

  const panelFlow = [
    { icon: <FaTruckLoading />, labelKey: 'process_step_1_title' },
    { icon: <FaWarehouse />, labelKey: 'process_step_3_title' },
    { icon: <FaClipboardCheck />, labelKey: 'process_step_5_title' },
    { icon: <FaShippingFast />, labelKey: 'process_step_8_title' },
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

  return (
    <PageContainer>
      <HeroSection>
        <HeroGrid>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Eyebrow><FaShieldAlt /> {t('business_hero_label')}</Eyebrow>
            <HeroTitle>{t('business_title')}</HeroTitle>
            <HeroDescription>{t('tpl_biz_desc')}</HeroDescription>
            <HeroActions>
              <PrimaryLink to="/contact">
                {t('business_consult_cta')} <FaArrowRight />
              </PrimaryLink>
              <SecondaryLink to="/partners">{t('business_partner_cta')}</SecondaryLink>
            </HeroActions>
            <MetricStrip>
              {facilityMetrics.map((metric) => (
                <MetricCard key={metric.labelKey}>
                  <MetricValue>{metric.value}</MetricValue>
                  <MetricLabel>{t(metric.labelKey)}</MetricLabel>
                  <MetricDetail>{t(metric.detailKey)}</MetricDetail>
                </MetricCard>
              ))}
            </MetricStrip>
          </motion.div>

          <OperationsPanel initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.45 }}>
            <PanelHeader>
              <LogoPlate>
                <img src="/logo.png" alt="KMTech" />
              </LogoPlate>
              <div>
                <Eyebrow>{t('business_flow_label')}</Eyebrow>
                <PanelTitle>{t('business_operations_title')}</PanelTitle>
              </div>
            </PanelHeader>
            <FlowRail>
              {panelFlow.map((item, index) => (
                <FlowItem key={item.labelKey}>
                  {item.icon}
                  <FlowLabel>{t('process_step_label', { number: index + 1 })}</FlowLabel>
                  <FlowName>{t(item.labelKey)}</FlowName>
                </FlowItem>
              ))}
            </FlowRail>
            <HighlightGrid>
              {operationHighlights.map((item) => (
                <Highlight key={item.labelKey}>
                  <HighlightValue>{item.value}</HighlightValue>
                  <HighlightLabel>{t(item.detailKey)}</HighlightLabel>
                </Highlight>
              ))}
            </HighlightGrid>
          </OperationsPanel>
        </HeroGrid>
      </HeroSection>

      <Section>
        <SectionHeader>
          <SectionKicker>{t('business_services_label')}</SectionKicker>
          <SectionHeading>{t('tpl_biz_title')}</SectionHeading>
          <SectionDescription>{t('business_services_desc')}</SectionDescription>
        </SectionHeader>
        <ServicesGrid variants={containerVariants} initial="hidden" animate="visible">
          {services.map((service) => (
            <ServiceCard key={service.title} variants={itemVariants}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceList>
                {service.items.map((item) => (
                  <li key={item}><FaCheckCircle /> <span>{item}</span></li>
                ))}
              </ServiceList>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Section>

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

      <Section>
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
      </Section>
    </PageContainer>
  );
};

export default BusinessPage;
