/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/funcionalidades', destination: '/public/funcionalidades', },
      { source: '/planos', destination: '/public/planos', },
      { source: '/contato', destination: '/public/contato', },
      { source: '/sobre', destination: '/public/sobre', },
      { source: '/login', destination: '/public/auth/login', },
      { source: '/cadastro', destination: '/public/auth/cadastro', },

      { source: '/dashboard', destination: '/private/dashboard', },

      { source: '/cadastros/clientes', destination: '/private/cadastros/clientes', },
      { source: '/cadastros/fornecedor', destination: '/private/cadastros/fornecedor', },
      { source: '/cadastros/produtos', destination: '/private/cadastros/produtos', },
      { source: '/cadastros/anuncios', destination: '/private/cadastros/anuncios', },

      { source: '/estoque/controleEstoque', destination: '/private/estoque/controleEstoque', },
      { source: '/estoque/entradaNfe', destination: '/private/estoque/entradaNfe', },

      { source: '/vendas/orcamento', destination: '/private/vendas/orcamento', },
      { source: '/vendas/pedidosVenda', destination: '/private/vendas/pedidosVenda', },
      { source: '/vendas/notasProdutos', destination: '/private/vendas/notasProdutos', },
      { source: '/vendas/notasServicos', destination: '/private/vendas/notasServicos', },
      { source: '/vendas/vendasDiaria', destination: '/private/vendas/vendasDiaria', },

      { source: '/compras/pedidosCompra', destination: '/private/compras/pedidosCompra', },
      { source: '/compras/notasCompra', destination: '/private/compras/notasCompra', },

      { source: '/relatorio/relatorioCadastro', destination: '/private/relatorio/relatorioCadastro', },
      { source: '/relatorio/relatorioEstoque', destination: '/private/relatorio/relatorioEstoque', },
      { source: '/relatorio/relatorioVendas', destination: '/private/relatorio/relatorioVendas', },
      { source: '/relatorio/relatorioCompras', destination: '/private/relatorio/relatorioCompras', },

      { source: '/perfil', destination: '/public/perfil', },
    ]
  },
}


module.exports = nextConfig
