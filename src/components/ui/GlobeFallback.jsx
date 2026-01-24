import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const rotateReverse = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const glow = keyframes`
  0%, 100% { filter: drop-shadow(0 0 5px var(--accent-amber)); }
  50% { filter: drop-shadow(0 0 15px var(--accent-amber)); }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 280px;
  }
`;

const PatternWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  @media (max-width: 768px) {
    width: 260px;
    height: 260px;
  }
`;

const PatternSVG = styled.svg`
  width: 100%;
  height: 100%;
  overflow: visible;
`;

const OuterRing = styled.circle`
  fill: none;
  stroke: var(--accent-amber);
  stroke-width: 1;
  opacity: 0.2;
  transform-origin: center;
  animation: ${rotate} 30s linear infinite;
`;

const MiddleRing = styled.circle`
  fill: none;
  stroke: var(--accent-amber);
  stroke-width: 1;
  stroke-dasharray: 10 5;
  opacity: 0.3;
  transform-origin: center;
  animation: ${rotateReverse} 20s linear infinite;
`;

const InnerRing = styled.circle`
  fill: none;
  stroke: var(--accent-amber);
  stroke-width: 2;
  opacity: 0.4;
  transform-origin: center;
  animation: ${rotate} 15s linear infinite;
`;

const HexagonGroup = styled.g`
  transform-origin: center;
  animation: ${rotateReverse} 25s linear infinite;
`;

const Hexagon = styled.polygon`
  fill: none;
  stroke: var(--accent-amber);
  stroke-width: 1;
  opacity: ${props => props.$opacity || 0.3};
  animation: ${pulse} 3s ease-in-out infinite;
  animation-delay: ${props => props.$delay || 0}s;
`;

const CenterCore = styled.g`
  animation: ${float} 4s ease-in-out infinite;
`;

const CoreCircle = styled.circle`
  fill: var(--accent-amber);
  animation: ${glow} 2s ease-in-out infinite;
`;

const CoreText = styled.text`
  fill: #121212;
  font-size: 16px;
  font-weight: 700;
  text-anchor: middle;
`;

const DataNode = styled.circle`
  fill: var(--accent-amber);
  opacity: 0.8;
`;

const DataLine = styled.line`
  stroke: var(--accent-amber);
  stroke-width: 1;
  opacity: 0.3;
`;

const FloatingDot = styled.circle`
  fill: var(--accent-amber);
  opacity: ${props => props.$opacity || 0.5};
  animation: ${pulse} ${props => props.$duration || 2}s ease-in-out infinite;
  animation-delay: ${props => props.$delay || 0}s;
`;

// Generate hexagon points
const createHexagon = (cx, cy, size) => {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    points.push(`${cx + size * Math.cos(angle)},${cy + size * Math.sin(angle)}`);
  }
  return points.join(' ');
};

const GlobeFallback = () => {
  const center = { x: 150, y: 150 };

  // Memoize random values to prevent re-render flicker
  const floatingDots = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      x: center.x + Math.cos((Math.PI * 2 * i) / 12) * 110,
      y: center.y + Math.sin((Math.PI * 2 * i) / 12) * 110,
      size: 2 + (i % 3),
      opacity: 0.3 + (i % 4) * 0.1,
      duration: 2 + (i % 3),
      delay: (i % 4) * 0.5,
    })), [center.x, center.y]);

  // Data nodes on middle ring
  const dataNodes = useMemo(() =>
    Array.from({ length: 6 }, (_, i) => ({
      x: center.x + Math.cos((Math.PI * 2 * i) / 6 - Math.PI / 2) * 70,
      y: center.y + Math.sin((Math.PI * 2 * i) / 6 - Math.PI / 2) * 70,
    })), [center.x, center.y]);

  return (
    <Container>
      <PatternWrapper>
        <PatternSVG viewBox="0 0 300 300">
          <defs>
            <filter id="geoGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer decorative ring */}
          <OuterRing cx={center.x} cy={center.y} r={130} />

          {/* Middle dashed ring */}
          <MiddleRing cx={center.x} cy={center.y} r={100} />

          {/* Inner solid ring */}
          <InnerRing cx={center.x} cy={center.y} r={70} />

          {/* Hexagon layers */}
          <HexagonGroup>
            <Hexagon points={createHexagon(center.x, center.y, 110)} $opacity={0.15} $delay={0} />
            <Hexagon points={createHexagon(center.x, center.y, 85)} $opacity={0.25} $delay={0.5} />
            <Hexagon points={createHexagon(center.x, center.y, 55)} $opacity={0.35} $delay={1} />
          </HexagonGroup>

          {/* Data lines from center to nodes */}
          {dataNodes.map((node, i) => (
            <DataLine
              key={`line-${i}`}
              x1={center.x}
              y1={center.y}
              x2={node.x}
              y2={node.y}
            />
          ))}

          {/* Data nodes */}
          {dataNodes.map((node, i) => (
            <DataNode key={`node-${i}`} cx={node.x} cy={node.y} r={4} />
          ))}

          {/* Floating dots */}
          {floatingDots.map((dot, i) => (
            <FloatingDot
              key={`dot-${i}`}
              cx={dot.x}
              cy={dot.y}
              r={dot.size}
              $opacity={dot.opacity}
              $duration={dot.duration}
              $delay={dot.delay}
            />
          ))}

          {/* Center core with KM */}
          <CenterCore>
            <CoreCircle cx={center.x} cy={center.y} r={35} filter="url(#geoGlow)" />
            <CoreText x={center.x} y={center.y + 6}>KM</CoreText>
          </CenterCore>
        </PatternSVG>
      </PatternWrapper>
    </Container>
  );
};

export default GlobeFallback;
