import React from 'react';
import styled, { keyframes } from 'styled-components';

const routeFlow = keyframes`
  from { stroke-dashoffset: 90; }
  to { stroke-dashoffset: 0; }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    min-height: 220px;
  }
`;

const VisualFrame = styled.div`
  position: relative;
  width: min(100%, 520px);
  aspect-ratio: 1.14;
  display: grid;
  place-items: center;
`;

const NetworkSvg = styled.svg`
  width: 100%;
  height: 100%;
  overflow: visible;
`;

const RoutePath = styled.path`
  fill: none;
  stroke: var(--accent-amber);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 14 10;
  animation: ${routeFlow} 4.2s linear infinite;
`;

const RouteBase = styled.path`
  fill: none;
  stroke: var(--border-color);
  stroke-width: 14;
  stroke-linecap: round;
`;

const FacilityBlock = styled.rect`
  fill: var(--card-bg);
  stroke: var(--border-color);
  stroke-width: 2;
  rx: 8;
`;

const AmberBlock = styled.rect`
  fill: var(--accent-amber);
  rx: 8;
`;

const LabelText = styled.text`
  fill: var(--text-color);
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0;
`;

const SmallText = styled.text`
  fill: var(--text-secondary);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
`;

const Node = styled.circle`
  fill: var(--accent-amber);
  stroke: var(--background-color);
  stroke-width: 5;
`;

const LogoCard = styled.div`
  position: absolute;
  inset: auto 50% 50% auto;
  transform: translate(50%, 50%);
  width: clamp(72px, 18vw, 100px);
  height: clamp(72px, 18vw, 100px);
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-color);
  display: grid;
  place-items: center;
  padding: 0.8rem;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const GlobeFallback = () => {
  return (
    <Container aria-hidden="true">
      <VisualFrame>
        <NetworkSvg viewBox="0 0 520 455" role="img">
          <RouteBase d="M72 320 C130 190 206 155 260 224 C314 292 389 238 448 118" />
          <RoutePath d="M72 320 C130 190 206 155 260 224 C314 292 389 238 448 118" />

          <FacilityBlock x="40" y="282" width="142" height="92" />
          <AmberBlock x="60" y="302" width="44" height="18" />
          <AmberBlock x="112" y="302" width="48" height="18" />
          <FacilityBlock x="70" y="330" width="82" height="20" />
          <LabelText x="58" y="405">JIKSAN 3PL</LabelText>
          <SmallText x="58" y="424">2,140m2 / 3,000 pallet</SmallText>

          <FacilityBlock x="184" y="74" width="152" height="102" />
          <FacilityBlock x="205" y="99" width="110" height="30" />
          <AmberBlock x="223" y="142" width="74" height="14" />
          <LabelText x="206" y="50">QUALITY CHECK</LabelText>
          <SmallText x="206" y="66">3,000 Class clean booth</SmallText>

          <FacilityBlock x="356" y="74" width="124" height="88" />
          <AmberBlock x="374" y="94" width="88" height="18" />
          <FacilityBlock x="383" y="124" width="70" height="18" />
          <LabelText x="358" y="196">ERP QR</LabelText>
          <SmallText x="358" y="214">Scan / repackage</SmallText>

          <FacilityBlock x="332" y="292" width="130" height="76" />
          <AmberBlock x="356" y="316" width="74" height="18" />
          <FacilityBlock x="374" y="340" width="38" height="10" />
          <LabelText x="344" y="401">DELIVERY</LabelText>
          <SmallText x="344" y="419">Loading / outbound</SmallText>

          <Node cx="72" cy="320" r="12" />
          <Node cx="260" cy="224" r="12" />
          <Node cx="448" cy="118" r="12" />
        </NetworkSvg>
        <LogoCard>
          <img src="/logo.png" alt="" />
        </LogoCard>
      </VisualFrame>
    </Container>
  );
};

export default GlobeFallback;
