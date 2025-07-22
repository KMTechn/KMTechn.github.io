import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../components/ui/Page';
import { FaCar, FaWarehouse, FaDisplay, FaObjectGroup, FaMicrochip } from 'react-icons/fa6';
import { FaSearch, FaTools, FaIndustry, FaCogs } from 'react-icons/fa';

const PageContainer = styled.div`
  color: var(--text-color);
`;

const TabContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const TabButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: 2px solid var(--border-color);
  background-color: ${({ active }) => (active ? 'var(--accent-amber)' : 'transparent')};
  color: ${({ active }) => (active ? '#121212' : 'var(--text-color)')};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--accent-amber);
    color: #121212;
    border-color: var(--accent-amber);
  }
`;

const ContentContainer = styled(motion.div)`
  background-color: var(--card-bg);
  padding: 3rem 5%;
  border-radius: 12px;
`;

const BizSection = styled.div`
  margin-bottom: 2rem;
`;

const BizTitle = styled.h3`
  font-size: 2.2rem;
  color: var(--accent-amber);
  margin-bottom: 2rem;
  text-align: center;
`;

const ProductGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled(motion.div)`
  background: var(--background-color);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

const ProductTitle = styled.h4`
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-color);
  font-weight: 600;
`;

const ProductList = styled.ul`
  list-style: none;
  padding-left: 0;
  flex-grow: 1;
  margin-bottom: 1.5rem;
  li {
    margin-bottom: 0.8rem;
    line-height: 1.6;
    &::before {
      content: '•';
      color: var(--accent-amber);
      margin-right: 0.8rem;
      font-weight: bold;
    }
  }
`;

const InfoSection = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
`;

const SubHeading = styled.h5`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--accent-amber);
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InfoText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;


const BusinessPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = React.useState('agent');

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

  const getSafeArray = (key) => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? result : [result];
  };

  const agentBizData = {
    display: { 
      title: t('agent_display_title'), 
      icon: <FaDisplay />, 
      items: getSafeArray('agent_display_items'),
      suppliers: t('agent_display_suppliers'),
      applications: t('agent_display_applications')
    },
    cover_glass: { 
      title: t('agent_cover_glass_title'), 
      icon: <FaObjectGroup />, 
      items: getSafeArray('agent_cover_glass_items'),
      suppliers: t('agent_cover_glass_suppliers'),
      applications: t('agent_cover_glass_applications')
    },
    molding: { 
      title: t('agent_molding_title'), 
      icon: <FaCar />, 
      items: getSafeArray('agent_molding_items'),
      suppliers: t('agent_molding_suppliers'),
      applications: t('agent_molding_applications')
    },
    semiconductor: { 
      title: t('agent_semiconductor_title'), 
      icon: <FaMicrochip />, 
      items: getSafeArray('agent_semiconductor_items'),
      suppliers: t('agent_semiconductor_suppliers'),
      applications: t('agent_semiconductor_applications')
    },
  };

  const tplBizData = [
    { icon: <FaWarehouse />, title: t('tpl_warehouse_title'), items: getSafeArray('tpl_warehouse_items') },
    { icon: <FaSearch />, title: t('tpl_inspection_title'), items: getSafeArray('tpl_inspection_items') },
    { icon: <FaTools />, title: t('tpl_packaging_title'), items: getSafeArray('tpl_packaging_items') },
  ];

  return (
    <PageContainer>
      <Section>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <SectionTitle>{t('business_title')}</SectionTitle>
          <TabContainer variants={containerVariants} initial="hidden" animate="visible">
            <TabButton whileHover={{ y: -2 }} active={activeTab === 'agent'} onClick={() => setActiveTab('agent')}>{t('business_tab_agent')}</TabButton>
            <TabButton whileHover={{ y: -2 }} active={activeTab === '3pl'} onClick={() => setActiveTab('3pl')}>{t('business_tab_3pl')}</TabButton>
          </TabContainer>
        </motion.div>

        {activeTab === 'agent' && (
          <ContentContainer variants={itemVariants}>
            <BizSection>
              <BizTitle>{t('agent_biz_title')}</BizTitle>
              <ProductGrid variants={containerVariants} initial="hidden" animate="visible">
                {Object.values(agentBizData).map((data, index) => (
                  <ProductCard key={index} variants={itemVariants}>
                    <ProductTitle>{data.icon} {data.title}</ProductTitle>
                    <ProductList>
                      {data.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ProductList>
                    <InfoSection>
                      <SubHeading><FaIndustry /> {t('agent_suppliers_title')}</SubHeading>
                      <InfoText>{data.suppliers}</InfoText>
                      <SubHeading style={{marginTop: '1rem'}}><FaCogs /> {t('agent_applications_title')}</SubHeading>
                      <InfoText>{data.applications}</InfoText>
                    </InfoSection>
                  </ProductCard>
                ))}
              </ProductGrid>
            </BizSection>
          </ContentContainer>
        )}

        {activeTab === '3pl' && (
          <ContentContainer variants={itemVariants}>
            <BizSection>
              <BizTitle>{t('tpl_biz_title')}</BizTitle>
              <motion.p 
                style={{marginBottom: '3rem', lineHeight: '1.7', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem'}}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {t('tpl_biz_desc')}
              </motion.p>
              <ProductGrid variants={containerVariants} initial="hidden" animate="visible">
                {tplBizData.map((data, index) => (
                  <ProductCard key={index} variants={itemVariants}>
                    <ProductTitle>{data.icon} {data.title}</ProductTitle>
                    <ProductList>
                      {data.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ProductList>
                  </ProductCard>
                ))}
              </ProductGrid>
            </BizSection>
          </ContentContainer>
        )}
      </Section>
    </PageContainer>
  );
};

export default BusinessPage;
