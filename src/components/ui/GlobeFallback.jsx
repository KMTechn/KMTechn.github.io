import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  position: relative;
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    min-height: 220px;
  }
`;

const GlobeShell = styled.div`
  width: 100%;
  height: 100%;
  max-width: 620px;
  max-height: 620px;
  position: relative;
  display: grid;
  place-items: center;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 6.5%;
    border-radius: 999px;
    z-index: 3;
    pointer-events: none;
    background:
      radial-gradient(circle at 27% 18%, rgba(255, 255, 255, 0.22), transparent 17%),
      radial-gradient(circle at 76% 72%, rgba(255, 204, 0, 0.1), transparent 24%);
    mix-blend-mode: screen;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 4.5%;
    border-radius: 999px;
    z-index: 4;
    pointer-events: none;
    box-shadow:
      inset 0 0 0 1px rgba(255, 255, 255, 0.28),
      inset 16px 18px 42px rgba(255, 255, 255, 0.1),
      inset -22px -28px 52px rgba(5, 19, 38, 0.2);
  }
`;

const GlobePicture = styled.picture`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  position: relative;
  z-index: 1;
`;

const GlobeImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 620px;
  max-height: 620px;
  object-fit: contain;
  display: block;
  filter:
    saturate(1.05)
    contrast(1.08)
    brightness(0.98)
    drop-shadow(0 24px 42px rgba(15, 23, 42, 0.16));
`;

const RouteOverlay = styled.svg`
  position: absolute;
  inset: 4.5%;
  z-index: 2;
  width: 91%;
  height: 91%;
  pointer-events: none;
  overflow: visible;

  .route {
    fill: none;
    stroke: url(#route-gold);
    stroke-width: 0.42;
    stroke-linecap: round;
    opacity: 0.68;
    filter: drop-shadow(0 0 1.2px rgba(255, 204, 0, 0.34));
  }

  .route--soft {
    stroke-width: 0.3;
    opacity: 0.38;
  }

  .node {
    fill: #ffcc00;
    stroke: rgba(255, 255, 255, 0.88);
    stroke-width: 0.28;
    filter: drop-shadow(0 0 1.8px rgba(255, 204, 0, 0.5));
  }

  @media (max-width: 600px) {
    .route {
      stroke-width: 0.38;
      opacity: 0.58;
    }

    .route--soft {
      opacity: 0.28;
    }
  }
`;

const GlobeFallback = () => {
  return (
    <Container aria-hidden="true">
      <GlobeShell>
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
        </GlobePicture>
        <RouteOverlay viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="route-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff8b8" />
              <stop offset="54%" stopColor="#ffcc00" />
              <stop offset="100%" stopColor="#c88900" />
            </linearGradient>
          </defs>
          <path className="route" d="M61 40 C48 24 30 25 18 38" />
          <path className="route" d="M61 40 C72 25 84 31 89 45" />
          <path className="route" d="M61 40 C70 54 70 67 62 78" />
          <path className="route" d="M61 40 C54 48 46 54 39 61" />
          <path className="route route--soft" d="M61 40 C48 37 39 42 32 50" />
          <path className="route route--soft" d="M61 40 C70 43 79 51 84 62" />
          <circle className="node" cx="61" cy="40" r="1.2" />
          <circle className="node" cx="18" cy="38" r="0.72" />
          <circle className="node" cx="89" cy="45" r="0.72" />
          <circle className="node" cx="62" cy="78" r="0.72" />
          <circle className="node" cx="39" cy="61" r="0.72" />
        </RouteOverlay>
      </GlobeShell>
    </Container>
  );
};

export default GlobeFallback;
