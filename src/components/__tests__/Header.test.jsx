import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

describe('Header Component', () => {
  test('renders the logo and navigation links', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Check for the logo
    const logo = screen.getByAltText(/KMTECH Logo/i);
    expect(logo).toBeInTheDocument();

    // Check for navigation links
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('logo links to the homepage', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const logoLink = screen.getByAltText(/KMTECH Logo/i).closest('a');
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
