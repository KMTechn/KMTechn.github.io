import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(
    90deg,
    var(--card-bg) 25%,
    rgba(255, 204, 0, 0.1) 50%,
    var(--card-bg) 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: ${props => props.$radius || '8px'};
`;

const SkeletonContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background-color);
  padding-top: 80px;
`;

const HeroSkeleton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 4rem 5%;
  min-height: calc(100vh - 80px);
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkeletonText = styled(SkeletonBase)`
  height: ${props => props.$height || '20px'};
  width: ${props => props.$width || '100%'};
`;

const SkeletonCircle = styled(SkeletonBase)`
  width: ${props => props.$size || '300px'};
  height: ${props => props.$size || '300px'};
  border-radius: 50%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
`;

const SkeletonCard = styled(SkeletonBase)`
  height: ${props => props.$height || '200px'};
  width: 100%;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 4rem 5%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 3rem 5%;
  background: var(--card-bg);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  opacity: 0.8;
`;

const LoadingText = styled.p`
  color: var(--accent-amber);
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Spinner = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid var(--border-color);
  border-top-color: var(--accent-amber);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

/**
 * Full page loading skeleton for home page
 */
export const HomePageSkeleton = () => (
  <SkeletonContainer>
    <LogoContainer>
      <LogoImage src="/logo.png" alt="KMTech" />
      <LoadingText>
        <Spinner /> Loading...
      </LoadingText>
    </LogoContainer>

    <HeroSkeleton>
      <TextGroup>
        <SkeletonText $height="16px" $width="120px" />
        <SkeletonText $height="48px" $width="80%" />
        <SkeletonText $height="48px" $width="60%" />
        <SkeletonText $height="20px" $width="90%" />
        <SkeletonText $height="20px" $width="70%" />
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <SkeletonText $height="50px" $width="140px" $radius="8px" />
          <SkeletonText $height="50px" $width="120px" $radius="8px" />
        </div>
      </TextGroup>
      <SkeletonCircle />
    </HeroSkeleton>

    <StatsRow>
      {[1, 2, 3, 4].map(i => (
        <StatSkeleton key={i}>
          <SkeletonText $height="40px" $width="100px" />
          <SkeletonText $height="16px" $width="80px" />
        </StatSkeleton>
      ))}
    </StatsRow>

    <CardsGrid>
      {[1, 2, 3].map(i => (
        <SkeletonCard key={i} $height="280px" />
      ))}
    </CardsGrid>
  </SkeletonContainer>
);

/**
 * Compact loading indicator with logo
 */
export const LoadingSpinner = () => (
  <LogoContainer style={{ height: '100vh', justifyContent: 'center' }}>
    <LogoImage src="/logo.png" alt="KMTech" />
    <LoadingText>
      <Spinner /> Loading...
    </LoadingText>
  </LogoContainer>
);

/**
 * Card skeleton for lazy loaded content
 */
export const CardSkeleton = ({ count = 3, height = '200px' }) => (
  <CardsGrid>
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} $height={height} />
    ))}
  </CardsGrid>
);

/**
 * Single line skeleton
 */
export const LineSkeleton = ({ width = '100%', height = '20px' }) => (
  <SkeletonText $width={width} $height={height} />
);

export default HomePageSkeleton;
