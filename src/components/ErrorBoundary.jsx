import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 160px); // Full height minus header/footer
  padding: 2rem;
  text-align: center;
  background-color: var(--card-bg);
  border-radius: 12px;
  margin: 2rem;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  color: var(--accent-amber);
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorContainer>
          <ErrorTitle>Something went wrong.</ErrorTitle>
          <ErrorMessage>
            We're having trouble loading this page. Please try refreshing the browser. 
            If the problem persists, it might be a compatibility issue with 3D rendering.
          </ErrorMessage>
          <pre style={{ marginTop: '2rem', background: 'var(--background-color)', padding: '1rem', borderRadius: '8px', maxWidth: '100%', overflow: 'auto' }}>
            {this.state.error && this.state.error.toString()}
          </pre>
        </ErrorContainer>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
