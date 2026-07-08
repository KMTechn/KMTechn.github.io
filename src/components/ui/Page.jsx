import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  width: 100%;
  padding: 0 0 3rem;
  background-color: var(--background-color);
  color: var(--text-color);
  min-height: calc(100dvh - 120px);
`;

const MotionContainer = styled(motion.div)``;

export const Section = styled.section`
  padding: clamp(2.2rem, 4vw, 3.6rem) clamp(1rem, 5vw, 5%);
  background-color: ${props => props.bg || 'transparent'};
  overflow-x: clip;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.65rem, 3.4vw, 2.25rem);
  text-align: center;
  margin-bottom: clamp(1.75rem, 4vw, 3rem);
  color: var(--text-color);
  line-height: 1.2;
  overflow-wrap: anywhere;
`;

export const Title = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 3.1rem);
  color: var(--accent-amber);
  margin-bottom: clamp(1.75rem, 4vw, 3rem);
  text-align: center;
  line-height: 1.15;
  overflow-wrap: anywhere;
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
