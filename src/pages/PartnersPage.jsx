import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Section, SectionTitle } from '../components/ui/Page';

// Importing all the provided logo files
import logoHyundai from '../assets/logos/Hyundai_Motor_Company_logo.svg.png';
import logoKia from '../assets/logos/KIA_logo3.svg.png';
import logoLgDisplay from '../assets/logos/LG_Display_logo_(english).png';
import logoContinental from '../assets/logos/continental.jpeg';
import logoHumax from '../assets/logos/humax.jpeg';
import logoKanavi from '../assets/logos/kanavi mobility.jpeg';


const PageContainer = styled.div`
  color: var(--text-color);
`;

const PartnerGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
`;

const PartnerCard = styled(motion.div)`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  border: 1px solid var(--border-color);
`;

const PartnerLogo = styled.img`
  max-width: 80%;
  max-height: 80px;
  object-fit: contain;
`;

const partners = [
  { name: 'Hyundai', logo: logoHyundai },
  { name: 'Kia', logo: logoKia },
  { name: 'LG Display', logo: logoLgDisplay },
  { name: 'Continental', logo: logoContinental },
  { name: 'Humax', logo: logoHumax },
  { name: 'Kanavi Mobility', logo: logoKanavi }
];

const PartnersPage = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <PageContainer>
      <Section>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <SectionTitle>{t('partners_title')}</SectionTitle>
        </motion.div>
        <PartnerGrid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {partners.map((partner) => (
            <PartnerCard 
              key={partner.name}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.05, 
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                borderColor: 'var(--accent-amber)'
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <PartnerLogo src={partner.logo} alt={`${partner.name} Logo`} />
            </PartnerCard>
          ))}
        </PartnerGrid>
      </Section>
    </PageContainer>
  );
};

export default PartnersPage;