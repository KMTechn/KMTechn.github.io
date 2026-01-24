import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: radial-gradient(ellipse at center, rgba(30, 30, 50, 0.3) 0%, transparent 70%);
`;

const GlobeWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  animation: ${float} 6s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

const GlobeImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 30%, #4a8db7 60%, #1a365d 100%);
  box-shadow:
    inset -30px -30px 60px rgba(0, 0, 0, 0.4),
    inset 20px 20px 40px rgba(100, 180, 255, 0.1),
    0 0 60px rgba(74, 141, 183, 0.3),
    0 0 100px rgba(74, 141, 183, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    width: 30%;
    height: 20%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    filter: blur(10px);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background:
      radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(0, 0, 0, 0.2) 0%, transparent 50%);
  }
`;

const OrbitRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  border: 1px solid rgba(255, 204, 0, ${props => props.$opacity});
  border-radius: 50%;
  animation: ${rotate} ${props => props.$duration}s linear infinite;

  @media (max-width: 768px) {
    width: ${props => props.$size * 0.8}px;
    height: ${props => props.$size * 0.8}px;
  }
`;

const LocationDot = styled.div`
  position: absolute;
  width: ${props => props.$size || 8}px;
  height: ${props => props.$size || 8}px;
  background: var(--accent-amber);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--accent-amber), 0 0 20px rgba(255, 204, 0, 0.5);
  animation: ${pulse} 2s ease-in-out infinite;
  animation-delay: ${props => props.$delay || 0}s;
`;

const ConnectionLine = styled.div`
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.6), transparent);
  transform-origin: left center;
  animation: ${pulse} 3s ease-in-out infinite;
  animation-delay: ${props => props.$delay || 0}s;
`;

const StarField = styled.div`
  position: absolute;
  inset: -50px;
  overflow: hidden;
  pointer-events: none;
`;

const Star = styled.div`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: white;
  border-radius: 50%;
  opacity: ${props => props.$opacity};
  animation: ${pulse} ${props => props.$duration}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  top: ${props => props.$top}%;
  left: ${props => props.$left}%;
`;

const locations = [
  { top: '25%', left: '35%', size: 10, delay: 0, label: 'Seoul' },
  { top: '30%', left: '75%', size: 8, delay: 0.5, label: 'Berlin' },
  { top: '55%', left: '45%', size: 8, delay: 1, label: 'Wuhu' },
  { top: '60%', left: '65%', size: 8, delay: 1.5, label: 'Hong Kong' },
];

const stars = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 2 + 1,
  opacity: Math.random() * 0.5 + 0.2,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 2,
  top: Math.random() * 100,
  left: Math.random() * 100,
}));

const GlobeFallback = () => {
  return (
    <Container>
      <StarField>
        {stars.map(star => (
          <Star
            key={star.id}
            $size={star.size}
            $opacity={star.opacity}
            $duration={star.duration}
            $delay={star.delay}
            $top={star.top}
            $left={star.left}
          />
        ))}
      </StarField>

      <OrbitRing $size={320} $opacity={0.2} $duration={30} />
      <OrbitRing $size={380} $opacity={0.15} $duration={45} />
      <OrbitRing $size={440} $opacity={0.1} $duration={60} />

      <GlobeWrapper>
        <GlobeImage />

        {locations.map((loc, index) => (
          <LocationDot
            key={index}
            $size={loc.size}
            $delay={loc.delay}
            style={{ top: loc.top, left: loc.left }}
            title={loc.label}
          />
        ))}

        <ConnectionLine
          $delay={0.3}
          style={{
            top: '28%',
            left: '40%',
            width: '35%',
            transform: 'rotate(5deg)',
          }}
        />
        <ConnectionLine
          $delay={0.8}
          style={{
            top: '45%',
            left: '40%',
            width: '25%',
            transform: 'rotate(45deg)',
          }}
        />
        <ConnectionLine
          $delay={1.2}
          style={{
            top: '58%',
            left: '50%',
            width: '15%',
            transform: 'rotate(-15deg)',
          }}
        />
      </GlobeWrapper>
    </Container>
  );
};

export default GlobeFallback;
