import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageContainer = styled(motion.div)`
  width: 100%;
  padding: 8rem 5% 4rem;
  background-color: var(--titanium-dark);
  color: var(--text-primary);
  min-height: calc(100vh - 120px); // Adjust based on header/footer height
`;

export const Section = styled.section`
  padding: 6rem 5%;
  background-color: ${props => props.bg || 'transparent'};
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--text-primary);
`;

export const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: var(--accent-amber);
  margin-bottom: 4rem;
  text-align: center;
`;
