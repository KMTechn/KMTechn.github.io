import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Section, SectionTitle } from '../components/ui/Page';
import { 
  FaUsers, FaHandshake, FaShieldAlt, FaCheckCircle, FaBuilding, FaBalanceScale, 
  FaLeaf, FaBullseye, FaGavel, FaAward, FaBrain, FaUsersCog, 
  FaUserTie, FaShippingFast, FaMicroscope, FaSitemap 
} from 'react-icons/fa';

const PageContainer = styled.div`
  color: var(--text-color);
`;

const IdeologySection = styled(Section)`
  background-color: var(--card-bg);
`;

const Description = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  line-height: 1.7;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--border-color);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  width: 350px; /* Set a fixed width for better alignment */
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  flex-shrink: 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1;
`;

// Organization Chart Styles
const OrgChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  overflow-x: auto;
  padding: 1rem;
`;

const OrgNode = styled.div`
  padding: 1rem 1.5rem;
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  text-align: center;
  min-width: 220px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
`;

const OrgNodeCeo = styled(OrgNode)`
  background: var(--accent-amber);
  color: #121212;
  border-color: var(--accent-amber);
`;

const OrgTitle = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
`;

const OrgName = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
`;

const OrgLevel = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  gap: 2rem;
  margin-top: 3rem;

  &::before {
    content: '';
    position: absolute;
    top: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 1.5rem;
    background: var(--border-color);
  }
`;

const OrgBranch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 1.5rem;
    background: var(--border-color);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -1.5rem;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--border-color);
  }
`;


const AboutUsPage = () => {
  const { t } = useTranslation();

  const principles = [
    { icon: <FaUsers />, title: t('principle_customer_centered') },
    { icon: <FaHandshake />, title: t('principle_customer_satisfaction') },
    { icon: <FaShieldAlt />, title: t('principle_confidentiality') },
  ];

  const pillars = [
    { icon: <FaCheckCircle />, title: t('pillar_credibility') },
    { icon: <FaBalanceScale />, title: t('pillar_stability') },
    { icon: <FaLeaf />, title: t('pillar_environmental_quality') },
    { icon: <FaBullseye />, title: t('pillar_customer_orientation') },
    { icon: <FaGavel />, title: t('pillar_ethical_behavior') },
    { icon: <FaBuilding />, title: t('pillar_company_development') },
  ];

  const strongPoints = [
    { icon: <FaAward />, title: t('strong_point_1_title'), desc: t('strong_point_1_desc') },
    { icon: <FaBrain />, title: t('strong_point_2_title'), desc: t('strong_point_2_desc') },
    { icon: <FaUsersCog />, title: t('strong_point_3_title'), desc: t('strong_point_3_desc') },
    { icon: <FaUserTie />, title: t('strong_point_4_title'), desc: t('strong_point_4_desc') },
    { icon: <FaShippingFast />, title: t('strong_point_5_title'), desc: t('strong_point_5_desc') },
    { icon: <FaMicroscope />, title: t('strong_point_6_title'), desc: t('strong_point_6_desc') },
  ];

  return (
    <PageContainer>
      <Section>
        <SectionTitle>{t('about_ideology_title')}</SectionTitle>
        <Description>{t('about_ideology_desc')}</Description>
        <CardGrid>
          {principles.map((item, index) => (
            <Card key={index} whileHover={{ y: -10 }}>
              <IconWrapper>{item.icon}</IconWrapper>
              <CardTitle>{item.title}</CardTitle>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <IdeologySection>
        <SectionTitle>{t('about_pillars_title')}</SectionTitle>
        <CardGrid>
          {pillars.map((item, index) => (
            <Card key={index} whileHover={{ y: -10 }}>
              <IconWrapper>{item.icon}</IconWrapper>
              <CardTitle>{item.title}</CardTitle>
            </Card>
          ))}
        </CardGrid>
      </IdeologySection>

      <Section>
        <SectionTitle>{t('about_strong_points_title')}</SectionTitle>
        <CardGrid>
          {strongPoints.map((item, index) => (
            <Card key={index} whileHover={{ y: -10 }}>
              <IconWrapper>{item.icon}</IconWrapper>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.desc}</CardDescription>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <IdeologySection>
        <SectionTitle>{t('about_org_title')}</SectionTitle>
        <Description>{t('about_org_desc')}</Description>
        <OrgChartContainer>
          <OrgNodeCeo>
            <OrgTitle>{t('org_ceo')}</OrgTitle>
            <OrgName>{t('org_ceo_name')}</OrgName>
          </OrgNodeCeo>
          <OrgLevel>
            <OrgBranch>
              <OrgNode>
                <OrgTitle>{t('org_marketing_engineering_title')}</OrgTitle>
                <OrgName>{t('org_marketing_engineering_members')}</OrgName>
              </OrgNode>
            </OrgBranch>
            <OrgBranch>
              <OrgNode>
                <OrgTitle>{t('org_qc_technical_title')}</OrgTitle>
                <OrgName>{t('org_qc_technical_members')}</OrgName>
              </OrgNode>
            </OrgBranch>
            <OrgBranch>
              <OrgNode>
                <OrgTitle>{t('org_product_control_title')}</OrgTitle>
                <OrgName>{t('org_product_control_members')}</OrgName>
              </OrgNode>
            </OrgBranch>
            <OrgBranch>
              <OrgNode>
                <OrgTitle>{t('org_3pl_title')}</OrgTitle>
                <OrgName>{t('org_3pl_members')}</OrgName>
              </OrgNode>
            </OrgBranch>
            <OrgBranch>
              <OrgNode>
                <OrgTitle>{t('org_management_title')}</OrgTitle>
                <OrgName>{t('org_management_members')}</OrgName>
              </OrgNode>
            </OrgBranch>
          </OrgLevel>
        </OrgChartContainer>
      </IdeologySection>
    </PageContainer>
  );
};

export default AboutUsPage;
