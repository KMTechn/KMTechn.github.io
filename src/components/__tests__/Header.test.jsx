import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';
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

describe('Header Component', () => {
  test('renders the logo and navigation links', () => {
    renderWithProviders(<Header />);

    // Check for the logo
    const logo = screen.getByAltText(/KMTECH Logo/i);
    expect(logo).toBeInTheDocument();

    // Check for navigation links
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('logo links to the homepage', () => {
    renderWithProviders(<Header />);
    const logoLink = screen.getByAltText(/KMTECH Logo/i).closest('a');
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
