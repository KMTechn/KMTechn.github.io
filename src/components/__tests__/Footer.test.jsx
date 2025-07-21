import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../Footer';

describe('Footer Component', () => {
  test('renders the copyright notice', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const copyrightText = `© ${new Date().getFullYear()} KMT LOGISTICS. All Rights Reserved.`;
    expect(screen.getByText(copyrightText)).toBeInTheDocument();
  });
});
