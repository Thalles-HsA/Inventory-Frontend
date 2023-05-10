import { render, screen } from '@testing-library/react';
import Footer from '../../../src/components/Footer';

describe('Component Footer', () => {
  it('renders correctly with default setting', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer');

    expect(footerElement).toHaveClass('footer');
  });

  it('should render developer name with correct link', () => {
    render(<Footer />);
    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('href', 'https://www.linkedin.com/in/thalleshsa/');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noreferrer');
  });

  it('should render name devoloper', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer');

    expect(footerElement).toHaveTextContent('Thalles Henrique');
  });
});
