import { render, screen } from '@testing-library/react';
import Message from '../../../src/components/Message';

describe('Component Message', () => {
  it('renders correctly with default setting', () => {
    const msg = [
      'Senha não inválida',
      'Usuário não encontrado'
    ];

    render(<Message msg={msg} type="error" />);

    const menssageError1 = screen.getByText('Senha não inválida');
    const menssageError2 = screen.getByText('Usuário não encontrado');

    expect(menssageError1).toBeInTheDocument();
    expect(menssageError2).toBeInTheDocument();
  });

  it('renders button with custom className', () => {
    const msg = [
      'Senha não inválida',
      'Usuário não encontrado'
    ];

    const { rerender } = render(<Message msg={msg} type="error" />);

    const menssage = screen.getByTestId('message');

    expect(menssage).toHaveClass('message', 'error');
    expect(menssage).not.toHaveClass('success');

    rerender(<Message msg={msg} type="success" />);

    const novaMenssage = screen.getByTestId('message');

    expect(novaMenssage).toHaveClass('message', 'success');
    expect(novaMenssage).not.toHaveClass('error');
  });
});
