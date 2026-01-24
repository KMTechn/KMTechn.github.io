import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../components/ui/Page';
import { FaWarehouse, FaSearch, FaTools, FaTruckLoading, FaQrcode, FaBoxes, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const PageContainer = styled.div`
  color: var(--text-color);
  overflow-x: hidden;
`;

const ContentContainer = styled(motion.div)`
  background-color: var(--card-bg);
  padding: 3rem 5%;
  border-radius: 12px;
  margin-bottom: 4rem;
`;

const BizSection = styled.div`
  margin-bottom: 4rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const BizTitle = styled.h3`
  font-size: 2.2rem;
  color: var(--accent-amber);
  margin-bottom: 1rem;
  text-align: center;
`;

const BizDescription = styled.p`
  margin-bottom: 3rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
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

const ProcessTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  margin-top: 3rem;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 20px;
    width: 4px;
    background-color: var(--border-color);
    border-radius: 2px;
  }
`;

const ProcessStep = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  position: relative;
  padding-left: 50px;
`;

const StepIcon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: var(--accent-amber);
  color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 4px solid var(--card-bg);
`;

const StepContent = styled.div`
  background: var(--background-color);
  padding: 1.5rem;
  border-radius: 12px;
  flex: 1;
  border: 1px solid var(--border-color);
`;

const StepTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  line-height: 1.6;
`;

// Logo Carousel - GPU accelerated
const scrollX = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-100%, 0, 0); }
`;

const LogoCarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
`;

const LogoTrack = styled.div`
  display: flex;
  will-change: transform;
  animation: ${scrollX} 40s linear infinite;
  backface-visibility: hidden;
`;

const LogoWrapper = styled.div`
  background: #ffffff;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 200px;
  margin: 0 1rem;
  border: 1px solid var(--border-color);
  flex-shrink: 0;
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 60px;
  object-fit: contain;
  transition: transform 0.3s ease;

  ${LogoWrapper}:hover & {
    transform: scale(1.05);
  }
`;

const BusinessPage = () => {
  const { t } = useTranslation();

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

  const tplBizData = [
    { icon: <FaWarehouse />, title: t('tpl_warehouse_title'), items: getSafeArray('tpl_warehouse_items') },
    { icon: <FaSearch />, title: t('tpl_inspection_title'), items: getSafeArray('tpl_inspection_items') },
    { icon: <FaTools />, title: t('tpl_packaging_title'), items: getSafeArray('tpl_packaging_items') },
  ];

  const workProcessSteps = [
    { icon: <FaWarehouse />, titleKey: 'process_step_1_title', descKey: 'process_step_1_desc' },
    { icon: <FaTruckLoading />, titleKey: 'process_step_2_title', descKey: 'process_step_2_desc' },
    { icon: <FaBoxes />, titleKey: 'process_step_3_title', descKey: 'process_step_3_desc' },
    { icon: <FaTools />, titleKey: 'process_step_4_title', descKey: 'process_step_4_desc' },
    { icon: <FaCheckCircle />, titleKey: 'process_step_5_title', descKey: 'process_step_5_desc' },
    { icon: <FaQrcode />, titleKey: 'process_step_6_title', descKey: 'process_step_6_desc' },
    { icon: <FaBoxes />, titleKey: 'process_step_7_title', descKey: 'process_step_7_desc' },
    { icon: <FaArrowRight />, titleKey: 'process_step_8_title', descKey: 'process_step_8_desc' },
  ];

  const customers = [
    { name: 'Continental', logo: '/logos/continental_new.png' },
    { name: 'Humax', logo: '/logos/humax_new.png' },
    { name: 'Hyundai', logo: '/logos/Hyundai_Motor_Company_logo.svg.png' },
    { name: 'Kanavi Mobility', logo: '/logos/kanavi_new.png' },
    { name: 'Kia', logo: '/logos/KIA_logo3.svg.png' },
    { name: 'LG Display', logo: '/logos/lg_display_new.png' },
    { name: 'LG Electronics', logo: '/logos/lg_electronics_new.png' },
  ];
  const duplicatedCustomers = [...customers, ...customers];

  return (
    <PageContainer>
      <Section>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <SectionTitle>{t('business_title')}</SectionTitle>
        </motion.div>

        <ContentContainer variants={itemVariants}>
          <BizSection>
            <BizTitle>{t('tpl_biz_title')}</BizTitle>
            <BizDescription>{t('tpl_biz_desc')}</BizDescription>
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

        <ContentContainer variants={itemVariants}>
          <BizSection>
            <BizTitle>{t('tpl_work_process_title')}</BizTitle>
            <ProcessTimeline>
              {workProcessSteps.map((step, index) => (
                <ProcessStep key={index} variants={itemVariants}>
                  <StepIcon>{step.icon}</StepIcon>
                  <StepContent>
                    <StepTitle>{t(step.titleKey)}</StepTitle>
                    <StepDescription>{t(step.descKey)}</StepDescription>
                  </StepContent>
                </ProcessStep>
              ))}
            </ProcessTimeline>
          </BizSection>
        </ContentContainer>
        
        <ContentContainer variants={itemVariants}>
          <BizSection>
            <BizTitle>{t('core_customers_title')}</BizTitle>
            <LogoCarouselContainer>
              <LogoTrack>
                {duplicatedCustomers.map((customer, index) => (
                  <LogoWrapper key={`${customer.name}-${index}`}>
                    <Logo src={customer.logo} alt={`${customer.name} logo`} />
                  </LogoWrapper>
                ))}
              </LogoTrack>
            </LogoCarouselContainer>
          </BizSection>
        </ContentContainer>

      </Section>
    </PageContainer>
  );
};

export default BusinessPage;
