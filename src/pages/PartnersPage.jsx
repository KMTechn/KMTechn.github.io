import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Page, { Section, SectionTitle } from '../components/ui/Page';

const PartnersGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
  justify-items: center;
`;

const PartnerCard = styled(motion.div)`
  background: var(--background-color);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  border: 1px solid var(--border-color);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const PartnerLogo = styled.img`
  max-width: 100%;
  max-height: 70px;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s;

  ${PartnerCard}:hover & {
    filter: grayscale(0%);
  }
`;

const PartnersPage = () => {
  const { t } = useTranslation();

  const partners = [
    { name: 'Continental', logo: '/logos/continental.jpeg' },
    { name: 'Humax', logo: '/logos/humax.jpeg' },
    { name: 'Hyundai', logo: '/logos/Hyundai_Motor_Company_logo.svg.png' },
    { name: 'Kanavi Mobility', logo: '/logos/kanavi mobility.jpeg' },
    { name: 'Kia', logo: '/logos/KIA_logo3.svg.png' },
    { name: 'LG Display', logo: '/logos/LG_Display_logo_(english).png' },
    { name: 'LG Electronics', logo: '/logos/LG electronics.png' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <Page>
      <Section>
        <SectionTitle>{t('core_customers_title')}</SectionTitle>
        <PartnersGrid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {partners.map((partner) => (
            <PartnerCard key={partner.name} variants={itemVariants}>
              <PartnerLogo src={partner.logo} alt={`${partner.name} logo`} />
            </PartnerCard>
          ))}
        </PartnersGrid>
      </Section>
    </Page>
  );
};

export default PartnersPage;
