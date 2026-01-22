import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  width: 100%;
  /* The problematic top padding has been removed. */
  padding: 0 5% 4rem;
  background-color: var(--background-color);
  color: var(--text-color);
  min-height: calc(100vh - 120px);
`;

const MotionContainer = styled(motion.div)``;

export const Section = styled.section`
  padding: 6rem 5%;
  background-color: ${props => props.bg || 'transparent'};
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--text-color);
`;

export const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: var(--accent-amber);
  margin-bottom: 4rem;
  text-align: center;
`;

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const Page = ({ children }) => {
  return (
    <PageContainer>
      <MotionContainer
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </MotionContainer>
    </PageContainer>
  );
};

export default Page;
