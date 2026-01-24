import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const dash = keyframes`
  to { stroke-dashoffset: 0; }
`;

const glow = keyframes`
  0%, 100% { filter: drop-shadow(0 0 3px var(--accent-amber)); }
  50% { filter: drop-shadow(0 0 8px var(--accent-amber)); }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 768px) {
    min-height: 250px;
  }
`;

const NetworkSVG = styled.svg`
  width: 100%;
  max-width: 400px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 320px;
  }
`;

const Node = styled.circle`
  fill: var(--accent-amber);
  animation: ${pulse} 2s ease-in-out infinite;
  animation-delay: ${props => props.$delay || 0}s;
`;

const CenterNode = styled.circle`
  fill: var(--accent-amber);
  animation: ${glow} 2s ease-in-out infinite;
`;

const ConnectionPath = styled.path`
  stroke: rgba(255, 204, 0, 0.4);
  stroke-width: 1.5;
  fill: none;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: ${dash} 2s ease-out forwards;
  animation-delay: ${props => props.$delay || 0}s;
`;

const NodeLabel = styled.text`
  fill: var(--text-secondary);
  font-size: 10px;
  font-weight: 500;
  text-anchor: middle;

  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

const CenterLabel = styled.text`
  fill: var(--accent-amber);
  font-size: 12px;
  font-weight: 700;
  text-anchor: middle;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const IconGroup = styled.g`
  opacity: 0;
  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: ${props => props.$delay || 0}s;
`;

// Network nodes representing global logistics connections
const nodes = [
  { id: 'korea', x: 200, y: 80, label: 'KOREA', delay: 0.2 },
  { id: 'china', x: 320, y: 140, label: 'CHINA', delay: 0.4 },
  { id: 'germany', x: 80, y: 140, label: 'GERMANY', delay: 0.6 },
  { id: 'hongkong', x: 280, y: 260, label: 'HONG KONG', delay: 0.8 },
  { id: 'global', x: 120, y: 260, label: 'GLOBAL', delay: 1.0 },
];

const center = { x: 200, y: 180 };

const GlobeFallback = () => {
  return (
    <Container>
      <NetworkSVG viewBox="0 0 400 340" preserveAspectRatio="xMidYMid meet">
        <defs>
          {/* Gradient for connection lines */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 204, 0, 0.1)" />
            <stop offset="50%" stopColor="rgba(255, 204, 0, 0.6)" />
            <stop offset="100%" stopColor="rgba(255, 204, 0, 0.1)" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines from center to each node */}
        {nodes.map((node, index) => {
          const midX = (center.x + node.x) / 2;
          const midY = (center.y + node.y) / 2 - 20;
          return (
            <ConnectionPath
              key={`line-${node.id}`}
              d={`M ${center.x} ${center.y} Q ${midX} ${midY} ${node.x} ${node.y}`}
              $delay={0.3 + index * 0.15}
            />
          );
        })}

        {/* Outer nodes */}
        {nodes.map((node) => (
          <IconGroup key={node.id} $delay={node.delay}>
            {/* Node outer ring */}
            <circle
              cx={node.x}
              cy={node.y}
              r={24}
              fill="none"
              stroke="rgba(255, 204, 0, 0.2)"
              strokeWidth="1"
            />
            {/* Node */}
            <Node
              cx={node.x}
              cy={node.y}
              r={8}
              $delay={node.delay}
            />
            {/* Label */}
            <NodeLabel x={node.x} y={node.y + 38}>
              {node.label}
            </NodeLabel>
          </IconGroup>
        ))}

        {/* Center hub */}
        <IconGroup $delay={0}>
          {/* Center outer rings */}
          <circle
            cx={center.x}
            cy={center.y}
            r={45}
            fill="none"
            stroke="rgba(255, 204, 0, 0.15)"
            strokeWidth="1"
          />
          <circle
            cx={center.x}
            cy={center.y}
            r={35}
            fill="none"
            stroke="rgba(255, 204, 0, 0.25)"
            strokeWidth="1"
          />
          {/* Center node */}
          <CenterNode
            cx={center.x}
            cy={center.y}
            r={18}
            filter="url(#glow)"
          />
          {/* KM Logo text */}
          <CenterLabel x={center.x} y={center.y + 4}>
            KM
          </CenterLabel>
        </IconGroup>

        {/* Decorative elements - small dots */}
        <circle cx={150} cy={120} r={2} fill="rgba(255, 204, 0, 0.3)" />
        <circle cx={250} cy={200} r={2} fill="rgba(255, 204, 0, 0.3)" />
        <circle cx={140} cy={200} r={2} fill="rgba(255, 204, 0, 0.3)" />
        <circle cx={260} cy={120} r={2} fill="rgba(255, 204, 0, 0.3)" />
      </NetworkSVG>
    </Container>
  );
};

export default GlobeFallback;
