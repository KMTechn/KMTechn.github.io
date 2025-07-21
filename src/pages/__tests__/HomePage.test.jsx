import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../../pages/HomePage';

// A more robust mock for react-three/fiber and drei
vi.mock('@react-three/fiber', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    Canvas: ({ children }) => <div data-testid="canvas">{children}</div>,
    useFrame: () => {}, // Mock useFrame to do nothing
  };
});

vi.mock('@react-three/drei', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    OrbitControls: () => <div data-testid="orbit-controls" />,
    Sphere: ({ children }) => <div>{children}</div>,
    Text: ({ children }) => <span>{children}</span>,
    Stars: () => <div data-testid="stars" />,
    Tube: () => null,
    useTexture: () => null,
  };
});

describe('HomePage', () => {
  test('renders the main headline', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    // Check for the main title text
    const title = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'h1' && content.startsWith('Precision in Motion');
    });
    expect(title).toBeInTheDocument();

    // Check for the subtitle
    const subtitle = screen.getByText(/KMT LOGISTICS delivers unparalleled service/i);
    expect(subtitle).toBeInTheDocument();
    
    // Check that the canvas mock is rendered
    expect(screen.getByTestId('canvas')).toBeInTheDocument();
  });
});
