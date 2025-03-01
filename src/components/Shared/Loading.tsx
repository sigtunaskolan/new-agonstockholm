import React from 'react';
import styled from '@emotion/styled';

const LoadingContainer = styled.div<{ fullScreen?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.fullScreen ? '100vh' : '200px'};
  width: 100%;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: var(--secondary);
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

type LoadingProps = {
  fullScreen?: boolean;
};

const Loading: React.FC<LoadingProps> = ({ fullScreen = false }) => {
  return (
    <LoadingContainer fullScreen={fullScreen}>
      <Spinner />
    </LoadingContainer>
  );
};

export default Loading;