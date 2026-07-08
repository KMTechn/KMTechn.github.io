import React from 'react';
import styled from 'styled-components';

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

const GlobePicture = styled.picture`
  width: 100%;
  height: 100%;
  max-width: 620px;
  max-height: 620px;
  position: relative;
  display: grid;
  place-items: center;
`;

const GlobeImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 620px;
  max-height: 620px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 24px 42px rgba(15, 23, 42, 0.14));
`;

const RouteOverlay = styled.svg`
  position: absolute;
  inset: 4.5%;
  width: 91%;
  height: 91%;
  pointer-events: none;
  overflow: visible;

  .route {
    fill: none;
    stroke: url(#mobile-route-gold);
    stroke-width: 0.34;
    stroke-linecap: round;
    opacity: 0.72;
    filter: drop-shadow(0 0 1.2px rgba(255, 204, 0, 0.36));
  }

  .route--soft {
    stroke-width: 0.26;
    opacity: 0.42;
  }

  .hub {
    fill: #ffcc00;
    stroke: rgba(255, 255, 255, 0.96);
    stroke-width: 0.34;
    filter: drop-shadow(0 0 2px rgba(255, 204, 0, 0.58));
  }

  .node {
    fill: #ffcc00;
    stroke: rgba(255, 255, 255, 0.92);
    stroke-width: 0.22;
    filter: drop-shadow(0 0 1.4px rgba(255, 204, 0, 0.42));
  }

  @media (max-width: 600px) {
    .route {
      stroke-width: 0.4;
      opacity: 0.76;
    }

    .route--soft {
      stroke-width: 0.32;
      opacity: 0.46;
    }
  }
`;

const routePaths = [
  { key: 'shanghai', className: 'route', d: 'M55.4 27.2 C53.1 28.5 50.3 30.3 48.2 31.8' },
  { key: 'tokyo', className: 'route', d: 'M55.4 27.2 C56.3 26.6 57.7 27.2 58.6 28.7' },
  { key: 'shenzhen', className: 'route', d: 'M55.4 27.2 C52.6 30.0 48.7 34.0 45.7 37.2' },
  { key: 'singapore', className: 'route route--soft', d: 'M55.4 27.2 C51.6 35.5 43.8 47.1 39.0 52.2' },
];

const routeNodes = [
  { key: 'jiksan', className: 'hub', x: 55.4, y: 27.2, r: 1.05 },
  { key: 'shanghai', className: 'node', x: 48.2, y: 31.8, r: 0.48 },
  { key: 'tokyo', className: 'node', x: 58.6, y: 28.7, r: 0.48 },
  { key: 'shenzhen', className: 'node', x: 45.7, y: 37.2, r: 0.48 },
  { key: 'singapore', className: 'node', x: 39.0, y: 52.2, r: 0.48 },
];

const GlobeFallback = () => {
  return (
    <Container aria-hidden="true">
      <GlobePicture>
        <source
          type="image/webp"
          srcSet="/images/kmtech-globe-clean-alpha-640.webp 640w, /images/kmtech-globe-clean-alpha-960.webp 960w"
          sizes="(max-width: 600px) 232px, (max-width: 1120px) 380px, 460px"
        />
        <GlobeImage
          src="/images/kmtech-globe-clean-alpha.png"
          alt=""
          loading="eager"
          decoding="async"
        />
        <RouteOverlay viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="mobile-route-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff7a8" />
              <stop offset="58%" stopColor="#ffcc00" />
              <stop offset="100%" stopColor="#c69200" />
            </linearGradient>
          </defs>
          {routePaths.map((route) => (
            <path key={route.key} className={route.className} d={route.d} />
          ))}
          {routeNodes.map((node) => (
            <circle
              key={node.key}
              className={node.className}
              cx={node.x}
              cy={node.y}
              r={node.r}
            />
          ))}
        </RouteOverlay>
      </GlobePicture>
    </Container>
  );
};

export default GlobeFallback;
