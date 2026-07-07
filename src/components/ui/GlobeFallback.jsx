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

const GlobeImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 620px;
  max-height: 620px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 24px 42px rgba(15, 23, 42, 0.14));
`;

const GlobeFallback = () => {
  return (
    <Container aria-hidden="true">
      <GlobeImage src="/images/kmtech-globe-logistics-alpha.png" alt="" loading="eager" decoding="async" />
    </Container>
  );
};

export default GlobeFallback;
