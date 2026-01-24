import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaHome, FaEnvelope, FaArrowLeft } from 'react-icons/fa';

const Container = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(165deg, var(--background-color) 0%, var(--card-bg) 100%);
`;

const Content = styled(motion.div)`
  text-align: center;
  max-width: 500px;
`;

const ErrorCode = styled.h1`
  font-size: clamp(6rem, 20vw, 10rem);
  font-weight: 700;
  line-height: 1;
  margin: 0;
  background: linear-gradient(135deg, var(--accent-amber), #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: var(--accent-amber);
  color: #121212;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #e6a700;
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 204, 0, 0.3);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: transparent;
  color: var(--text-color);
  font-size: 0.95rem;
  font-weight: 600;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-amber);
    color: var(--accent-amber);
  }
`;

const LogoImage = styled.img`
  height: 60px;
  width: auto;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LogoImage src="/logo.png" alt="KMTech" />
        <ErrorCode>404</ErrorCode>
        <Title>{t('error_404_title') || '페이지를 찾을 수 없습니다'}</Title>
        <Description>
          {t('error_404_desc') || '요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다. 아래 버튼을 통해 다른 페이지로 이동해 주세요.'}
        </Description>
        <ButtonGroup>
          <PrimaryButton to="/">
            <FaHome /> {t('error_404_home') || '홈으로 가기'}
          </PrimaryButton>
          <SecondaryButton to="/contact">
            <FaEnvelope /> {t('nav_contact') || '문의하기'}
          </SecondaryButton>
        </ButtonGroup>
      </Content>
    </Container>
  );
};

export default NotFoundPage;
