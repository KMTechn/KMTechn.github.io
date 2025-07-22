import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  test('renders the copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText("© 2024 KMTech. All Rights Reserved.")).toBeInTheDocument();
  });
});