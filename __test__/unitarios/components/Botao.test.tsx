import { render, screen } from '@testing-library/react';
import Botao from '../../../src/components/Botao';

describe('Component Botao', () => {
  it('renders correctly with default setting', () => {
    render(<Botao>Click me</Botao>);
    const button = screen.getByTestId('button');

    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveClass('botao');
    expect(button).toHaveTextContent('Click me');
  });

  it('renders disabled button when disabled prop is true', () => {
    render(<Botao disabled>Click me</Botao>);
    const button = screen.getByTestId('button');

    expect(button).toBeDisabled();
  });

  it('renders button with custom className', () => {
    const customClassName = 'botao-voltar';
    render(<Botao className={customClassName}>Click me</Botao>);
    const button = screen.getByTestId('button');

    expect(button).toHaveClass('botao', customClassName);
  });

  it('renders the correct children', () => {
    render(<Botao>Click me</Botao>);
    const button = screen.getByTestId('button');

    expect(button).toHaveTextContent('Click me');
  });

  it('renders the correct attribute type', () => {
    const { rerender } = render(<Botao>Click me</Botao>);
    const button = screen.getByTestId('button');

    expect(button).toHaveAttribute('type', 'button');

    rerender(<Botao type="submit">Click me</Botao>);
    const novoButton = screen.getByTestId('button');

    expect(novoButton).toHaveAttribute('type', 'submit');
  });
});
