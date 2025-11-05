import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Page, { Section, SectionTitle } from '../components/ui/Page';
import {
  FaCheckCircle, FaBuilding, FaBalanceScale,
  FaLeaf, FaBullseye, FaGavel, FaAward, FaBrain, FaUsersCog,
  FaUserTie, FaShippingFast, FaMicroscope, FaCogs, FaSearchPlus,
  FaSitemap, FaUsers, FaChevronDown
} from 'react-icons/fa';

const PhilosophySection = styled(Section)`
  background-color: var(--card-bg);
  text-align: center;
`;

const CoreIdeology = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto 4rem;
  h3 {
    font-size: 2.5rem;
    color: var(--accent-amber);
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: var(--text-secondary);
  }
`;

const PillarGrid = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PillarCard = styled(motion.div)`
  background: var(--background-color);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  text-align: center;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PillarIcon = styled.div`
  font-size: 3rem;
  color: var(--accent-amber);
  margin-bottom: 1.5rem;
`;

const PillarTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  flex-grow: 1;
`;

const StrengthsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
`;

const StrengthCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.1);
  }
`;

const StrengthImageContainer = styled.div`
  height: 220px;
  overflow: hidden;
`;

const StrengthImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease;

  ${StrengthCard}:hover & {
    transform: scale(1.05);
  }
`;

const StrengthContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const StrengthIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`;

const StrengthTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--text-color);
`;

const StrengthDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const OrgSection = styled(Section)`
  background-color: var(--background-color);
  padding: 6rem 2rem;
`;

const OrgTreeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const OrgNode = styled.div`
  padding: 1.5rem;
  display: inline-block;
  border-radius: 8px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  min-width: 280px;
`;

const OrgNodeCeo = styled(OrgNode)`
  background: var(--accent-amber);
  color: #121212;
  font-weight: 700;
  box-shadow: 0 8px 25px -5px rgba(255, 193, 7, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
`;

const OrgTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const OrgRole = styled.p`
  font-size: 1rem;
  margin: 0.25rem 0 0;
  opacity: 0.8;
`;

const OrgTree = styled.ul`
  padding-top: 2rem;
  position: relative;
  list-style: none;
  margin: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 2rem;
    background: var(--border-color);
  }
`;

const OrgTreeItem = styled.li`
  display: inline-block;
  text-align: center;
  padding: 2rem 1rem;
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    width: 50%;
    height: 2rem;
    border-top: 1px solid var(--border-color);
  }

  &::after {
    left: 50%;
    border-left: 1px solid var(--border-color);
  }

  &:first-child::before, &:last-child::after {
    border: 0 none;
  }

  &:last-child::before {
    border-right: 1px solid var(--border-color);
    border-radius: 0 6px 0 0;
  }

  &:first-child::after {
    border-radius: 6px 0 0 0;
  }
`;

const DepartmentNode = styled(motion.div)`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.25rem;
  min-width: 250px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-amber);
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  }
`;

const DeptHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const DeptIcon = styled.div`
  font-size: 1.5rem;
  color: var(--accent-amber);
`;

const DeptTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  flex-grow: 1;
  text-align: left;
`;

const ChevronIcon = styled(motion.div)`
  font-size: 0.8rem;
`;

const MemberInfo = styled.div`
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const Department = ({ department, t }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const members = t(department.membersKey, { returnObjects: true });
  const memberCount = Array.isArray(members) ? members.length : 0;

  return (
    <DepartmentNode onClick={() => setIsOpen(!isOpen)}>
      <DeptHeader>
        <DeptIcon>{department.icon}</DeptIcon>
        <DeptTitle>{t(department.titleKey)}</DeptTitle>
        <ChevronIcon style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <FaChevronDown size={14} />
        </ChevronIcon>
      </DeptHeader>
      {isOpen && (
        <MemberInfo>
          {memberCount > 0 ? `${memberCount}명` : '부서 정보'}
        </MemberInfo>
      )}
    </DepartmentNode>
  );
};

const AboutUsPage = () => {
  const { t } = useTranslation();

  const pillars = [
    { icon: <FaCheckCircle />, titleKey: 'pillar_credibility' },
    { icon: <FaBalanceScale />, titleKey: 'pillar_stability' },
    { icon: <FaLeaf />, titleKey: 'pillar_environmental_quality' },
    { icon: <FaBullseye />, titleKey: 'pillar_customer_orientation' },
    { icon: <FaGavel />, titleKey: 'pillar_ethical_behavior' },
    { icon: <FaBuilding />, titleKey: 'pillar_company_development' },
  ];

  const strongPoints = [
    { icon: <FaAward />, img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop', titleKey: 'strong_point_1_title', descKey: 'strong_point_1_desc' },
    { icon: <FaBrain />, img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', titleKey: 'strong_point_2_title', descKey: 'strong_point_2_desc' },
    { icon: <FaUsersCog />, img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop', titleKey: 'strong_point_3_title', descKey: 'strong_point_3_desc' },
    { icon: <FaUserTie />, img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop', titleKey: 'strong_point_4_title', descKey: 'strong_point_4_desc' },
    { icon: <FaShippingFast />, img: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=2070&auto=format&fit=crop', titleKey: 'strong_point_5_title', descKey: 'strong_point_5_desc' },
    { icon: <FaMicroscope />, img: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2071&auto=format&fit=crop', titleKey: 'strong_point_6_title', descKey: 'strong_point_6_desc' },
  ];

  const organization = {
    ceo: { titleKey: 'org_ceo', nameKey: 'org_ceo_name' },
    departments: [
      { icon: <FaCogs />, titleKey: 'org_marketing_engineering_title', membersKey: 'org_marketing_engineering_members' },
      { icon: <FaSearchPlus />, titleKey: 'org_qc_technical_title', membersKey: 'org_qc_technical_members' },
      { icon: <FaSitemap />, titleKey: 'org_product_control_title', membersKey: 'org_product_control_members' },
      { icon: <FaShippingFast />, titleKey: 'org_3pl_title', membersKey: 'org_3pl_members' },
      { icon: <FaUsers />, titleKey: 'org_management_title', membersKey: 'org_management_members' },
    ]
  };

  return (
    <Page>
      <PhilosophySection>
        <SectionTitle>{t('about_ideology_title')}</SectionTitle>
        <CoreIdeology>
          <h3>{t('principle_customer_centered')}</h3>
          <p>{t('about_ideology_desc')}</p>
        </CoreIdeology>
        <PillarGrid>
          {pillars.map((pillar) => (
            <PillarCard key={pillar.titleKey} whileHover={{ y: -10 }}>
              <PillarIcon>{pillar.icon}</PillarIcon>
              <PillarTitle>{t(pillar.titleKey)}</PillarTitle>
            </PillarCard>
          ))}
        </PillarGrid>
      </PhilosophySection>

      <Section>
        <SectionTitle>{t('about_strong_points_title')}</SectionTitle>
        <StrengthsGrid>
          {strongPoints.map((item, index) => (
            <StrengthCard key={index} whileHover={{ y: -5 }}>
              <StrengthImageContainer>
                <StrengthImage style={{ backgroundImage: `url(${item.img})` }} />
              </StrengthImageContainer>
              <StrengthContent>
                <StrengthIcon>{item.icon}</StrengthIcon>
                <StrengthTitle>{t(item.titleKey)}</StrengthTitle>
                <StrengthDescription>{t(item.descKey)}</StrengthDescription>
              </StrengthContent>
            </StrengthCard>
          ))}
        </StrengthsGrid>
      </Section>

      <OrgSection>
        <SectionTitle>{t('about_org_title')}</SectionTitle>
        <OrgTreeContainer>
          <OrgNodeCeo>
            <OrgTitle>{t(organization.ceo.nameKey)}</OrgTitle>
            <OrgRole>{t(organization.ceo.titleKey)}</OrgRole>
          </OrgNodeCeo>
          <OrgTree>
            {organization.departments.map((dept) => (
              <OrgTreeItem key={dept.titleKey}>
                <Department department={dept} t={t} />
              </OrgTreeItem>
            ))}
          </OrgTree>
        </OrgTreeContainer>
      </OrgSection>
    </Page>
  );
};

export default AboutUsPage;
