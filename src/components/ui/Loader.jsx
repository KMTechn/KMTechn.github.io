import React from 'react';
import { Html, useProgress } from '@react-three/drei';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ProgressWrapper = styled.div`
  width: 200px;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`;

const ProgressBar = styled.div`
  width: ${props => props.progress}%;
  height: 100%;
  background: var(--accent-amber);
  transition: width 0.3s ease;
`;

const ProgressText = styled.p`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
`;

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <LoaderContainer>
        <ProgressText>{Math.round(progress)}% Loaded</ProgressText>
        <ProgressWrapper>
          <ProgressBar progress={progress} />
        </ProgressWrapper>
      </LoaderContainer>
    </Html>
  );
}

export default Loader;
