import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageContainer, Title } from '../components/ui/Page';
import { FaUsers, FaEye, FaBullseye } from 'react-icons/fa';

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  text-align: center;

  p {
    margin-bottom: 1.5rem;
  }
`;

const VisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  max-width: 1000px;
  margin: 4rem auto 0;
  text-align: left;
`;

const VisionCard = styled.div`
  background: var(--titanium-light);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
`;

const VisionIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`;

const VisionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const AboutPage = () => {
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>About KMT LOGISTICS</Title>
      <Content>
        <p>
          Founded on the principles of reliability, efficiency, and security, KMT LOGISTICS has grown to be a trusted partner in the global supply chain industry. We specialize in providing comprehensive logistics, meticulous inspection, and secure storage solutions tailored to meet the unique needs of each client.
        </p>
        <p>
          Our journey began in 2010, with a small team of passionate logisticians who believed they could make a difference. Today, we are a global force, but our core values remain unchanged.
        </p>
      </Content>
      <VisionGrid>
        <VisionCard>
          <VisionIcon><FaEye /></VisionIcon>
          <VisionTitle>Our Vision</VisionTitle>
          <p>To be the world's most customer-centric logistics company, where customers can find and discover anything they might want to move across the globe.</p>
        </VisionCard>
        <VisionCard>
          <VisionIcon><FaBullseye /></VisionIcon>
          <VisionTitle>Our Mission</VisionTitle>
          <p>To simplify the complexities of logistics through innovative technology, a dedicated team, and a commitment to exceptional service and transparency.</p>
        </VisionCard>
        <VisionCard>
          <VisionIcon><FaUsers /></VisionIcon>
          <VisionTitle>Our Team</VisionTitle>
          <p>Our team is our greatest asset. Comprised of industry veterans and tech innovators, we work collaboratively to solve the toughest challenges in logistics.</p>
        </VisionCard>
      </VisionGrid>
    </PageContainer>
  );
};

export default AboutPage;
