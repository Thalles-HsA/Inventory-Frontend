/* eslint-disable global-require */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import mockRouter from 'next-router-mock';
import Navbar from '../../../src/components/Navbar';
import { store } from '../../../src/store';
import useAuth from '../../../src/hooks/useAuth';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('../../../src/hooks/useAuth');

const mockUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;

describe('Component Navbar no auth', () => {
  beforeEach(() => {
    mockRouter.push('/');
    mockUseAuth.mockReturnValue({ auth: false, loading: false });
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  });

  const verifyLink = (linkText: string, expectedHref: string) => {
    const link = screen.getByText(linkText);
    expect(link).toHaveAttribute('href', expectedHref);
  };

  it('Render link corretly if not autenticate', () => {
    verifyLink('Funcionalidades', '/funcionalidades');
    verifyLink('Planos e Preços', '/planos');
    verifyLink('Contato', '/contato');
    verifyLink('Sobre', '/sobre');
    verifyLink('Entrar', '/login');
    verifyLink('Registrar', '/cadastro');
  });

  it('renders corretly', () => {
    const logoLink = screen.getByTestId('navbar-logo');
    const navbar = screen.getByTestId('navbar');

    expect(logoLink).toHaveAttribute('href', '/');
    expect(navbar).toBeInTheDocument();
  });

  it('Render link corretly if not autenticate', () => {
    const navbarNoAuth = screen.queryByTestId('navbar-no-auth');
    const navbarAuth = screen.queryByTestId('navbar-auth');

    expect(navbarNoAuth).toBeInTheDocument();
    expect(navbarAuth).not.toBeInTheDocument();
  });

  it('Render class corretly', () => {
    const navbarNoAuth = screen.getByTestId('navbar-no-auth');
    expect(navbarNoAuth).toHaveClass('menu-no-auth');
  });
});

describe('Component Navbar auth', () => {
  beforeEach(() => {
    mockRouter.push('/');
    mockUseAuth.mockReturnValue({ auth: true, loading: false });
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  });

  const verifyLink = (linkText: string, expectedHref: string) => {
    const link = screen.getByText(linkText);
    expect(link).toHaveAttribute('href', expectedHref);
  };

  it('Render link corretly if autenticate', () => {
    verifyLink('Clientes', '/cadastros/clientes');
    verifyLink('Fornecedor', '/cadastros/fornecedor');
    verifyLink('Produtos', '/cadastros/produtos');
    verifyLink('Anuncios', '/cadastros/anuncios');

    verifyLink('Controle de Estoque', '/estoque/controleEstoque');
    verifyLink('Entrada de NF-e', '/estoque/entradaNfe');

    verifyLink('Orçamentos', '/vendas/orcamento');
    verifyLink('Pedidos de Venda', '/vendas/pedidosVenda');
    verifyLink('Notas Fiscais de Produtos', '/vendas/notasProdutos');
    verifyLink('Notas Fiscais de Serviços', '/vendas/notasServicos');
    verifyLink('Vendas Diárias', '/vendas/vendasDiaria');

    verifyLink('Pedidos de Compra', '/compras/pedidosCompra');
    verifyLink('Notas de Compra', '/compras/notasCompra');

    verifyLink('Relatório de Cadastro', '/relatorio/relatorioCadastro');
    verifyLink('Relatório de Estoque', '/relatorio/relatorioEstoque');
    verifyLink('Relatório de Vendas', '/relatorio/relatorioVendas');
    verifyLink('Relatório de Compras', '/relatorio/relatorioCompras');
  });

  it('Render link corretly if autenticate', () => {
    const logoLink = screen.getByTestId('navbar-logo');
    expect(logoLink).toHaveAttribute('href', '/dashboard');
  });

  it('Render class corretly', () => {
    const navbarAuth = screen.getByTestId('navbar-auth');
    expect(navbarAuth).toHaveClass('menu-auth');
  });
});
