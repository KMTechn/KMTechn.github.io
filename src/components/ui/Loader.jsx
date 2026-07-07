import React from 'react';
import { Html, useProgress } from '@react-three/drei';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  width: min(220px, 60vw);
  display: grid;
  place-items: center;
  gap: 0.85rem;
  pointer-events: none;
`;

const LoaderMark = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-color);
  display: grid;
  place-items: center;
  padding: 0.55rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ProgressWrapper = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(var(--card-bg-rgb), 0.7);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border-color);
`;

const ProgressBar = styled.div`
  width: ${({ $progress }) => $progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.25s ease;
`;

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <LoaderContainer aria-hidden="true">
        <LoaderMark>
          <img src="/logo.png" alt="" />
        </LoaderMark>
        <ProgressWrapper>
          <ProgressBar $progress={Math.max(progress, 8)} />
        </ProgressWrapper>
      </LoaderContainer>
    </Html>
  );
}

export default Loader;
