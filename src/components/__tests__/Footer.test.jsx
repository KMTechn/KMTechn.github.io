import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../Footer';
import { ThemeProvider } from '../../contexts/ThemeContext';

const renderWithProviders = (ui) => {
  return render(
    <ThemeProvider>
      <Router>
        {ui}
      </Router>
    </ThemeProvider>
  );
};

describe('Footer Component', () => {
  test('renders the copyright notice', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText("© 2024 KMTech. All Rights Reserved.")).toBeInTheDocument();
  });
});
