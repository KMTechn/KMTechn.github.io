import React from 'react';
import styled from 'styled-components';
import { FaExclamationTriangle, FaRedo, FaHome } from 'react-icons/fa';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 160px);
  padding: 2rem;
  text-align: center;
  background: linear-gradient(165deg, var(--background-color) 0%, var(--card-bg) 100%);
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 204, 0, 0.1);
  border-radius: 50%;
  margin-bottom: 1.5rem;

  svg {
    font-size: 2.5rem;
    color: var(--accent-amber);
  }
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const ErrorTitle = styled.h1`
  font-size: 1.75rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ErrorMessage = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  max-width: 500px;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: var(--accent-amber);
  color: #121212;
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e6a700;
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 204, 0, 0.3);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: transparent;
  color: var(--text-color);
  font-size: 0.95rem;
  font-weight: 600;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-amber);
    color: var(--accent-amber);
  }
`;

const ErrorDetails = styled.details`
  margin-top: 2rem;
  max-width: 600px;
  width: 100%;
  text-align: left;

  summary {
    cursor: pointer;
    color: var(--text-secondary);
    font-size: 0.85rem;
    padding: 0.5rem;

    &:hover {
      color: var(--accent-amber);
    }
  }
`;

const ErrorCode = styled.pre`
  margin-top: 1rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 1rem;
  border-radius: 8px;
  overflow: auto;
  font-size: 0.8rem;
  color: var(--text-secondary);
  max-height: 150px;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error("Uncaught error:", error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <LogoImage src="/logo.png" alt="KMTech" />
          <IconWrapper>
            <FaExclamationTriangle />
          </IconWrapper>
          <ErrorTitle>문제가 발생했습니다</ErrorTitle>
          <ErrorMessage>
            페이지를 불러오는 중 오류가 발생했습니다.
            새로고침을 시도하시거나, 문제가 계속되면 홈페이지로 이동해 주세요.
          </ErrorMessage>
          <ButtonGroup>
            <PrimaryButton onClick={this.handleRefresh}>
              <FaRedo /> 새로고침
            </PrimaryButton>
            <SecondaryButton href="/">
              <FaHome /> 홈으로 가기
            </SecondaryButton>
          </ButtonGroup>

          <ErrorDetails>
            <summary>기술적 세부 정보 보기</summary>
            <ErrorCode>
              {this.state.error && this.state.error.toString()}
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </ErrorCode>
          </ErrorDetails>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
