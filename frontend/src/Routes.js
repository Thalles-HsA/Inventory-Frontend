// Router
import {  Navigate, Route, Routes, } from 'react-router-dom';

// Paginas não autenticadas

import Registrarcopy from './pages/Auth/Registrarcopy';
import Registrar from './pages/Auth/Registrar';
import Login from './pages/Auth/Login';
import Funcionalidades from "./pages/Funcionalidades";
import Planos from "./pages/Planos";
import Contato from "./pages/Contato";
import Blog from "./pages/Blog";

// Páginas Autenticadas
import Home from "./pages/Home";
import Clientes from './pages/Cadastro/Clientes';
import Anuncios from './pages/Cadastro/Anuncios';
import Fornecedor from './pages/Cadastro/Fornecedor';
import Produto from './pages/Cadastro/Produto';
import ControleDeEstoque from './pages/Estoque/ControleDeEstoque';
import EntradaDeNfe from './pages/Estoque/EntradaDeNFe';
import Orcamento from './pages/Vendas/Orcamento';
import NotasFiscaisDeProduto from './pages/Vendas/NotasFiscaisDeProdutos';
import NotasFiscaisDeServico from './pages/Vendas/NotasFiscaisDeServico';
import PedidoDeVenda from './pages/Vendas/PedidoDeVenda';
import VendasDiarias from './pages/Vendas/VendasDiarias';
import NotasDeCompra from './pages/Compras/NotasDeCompra';
import PedidosDeCompra from './pages/Compras/PedidosDeCompra';
import RelatorioDeCadastro from './pages/Relatorios/RelatorioDeCadastro';
import RelatorioDeEstoque from './pages/Relatorios/RelatorioDeEstoque';
import RelatorioDeVendas from './pages/Relatorios/RelatorioDeVendas';
import RelatorioDeCompras from './pages/Relatorios/RelatorioDeCompras';
import Perfil from "./pages/Perfil/Perfil"

const Router = ({auth}) => {
    return (

        < Routes>

            <Route
                path="/"
                element={auth ? <Home /> : <Navigate to="/login" />}
            />
            <Route
                path="/cadastro/teste"
                element={!auth ? <Registrarcopy /> : <Navigate to="/login" />}
            />
            <Route
                path="/funcionalidades"
                element={!auth ? <Funcionalidades /> : <Navigate to="/" />}
            />
            <Route
                path="/planos"
                element={!auth ? <Planos /> : <Navigate to="/" />}
            />
            <Route
                path="/contato"
                element={!auth ? <Contato /> : <Navigate to="/" />}
            />
            <Route
                path="/blog"
                element={!auth ? <Blog /> : <Navigate to="/" />}
            />
            <Route
                path="/cadastro"
                element={!auth ? <Registrar /> : <Navigate to="/" />}
            />
            <Route
                path="/login"
                element={!auth ? <Login /> : <Navigate to="/" />}
            />
            <Route
                path="/cadastro/clientes"
                element={auth ? <Clientes /> : <Navigate to="/login" />}
            />
            <Route
                path="/cadastro/anuncios"
                element={auth ? <Anuncios /> : <Navigate to="/login" />}
            />
            <Route
                path="/cadastro/fornecedor"
                element={auth ? <Fornecedor /> : <Navigate to="/login" />}
            />
            <Route
                path="/cadastro/produtos"
                element={auth ? <Produto /> : <Navigate to="/login" />}
            />
            <Route
                path="/estoque/controleEstoque"
                element={auth ? <ControleDeEstoque /> : <Navigate to="/login" />}
            />
            <Route
                path="/estoque/entradaNfe"
                element={auth ? <EntradaDeNfe /> : <Navigate to="/login" />}
            />
            <Route
                path="/vendas/orcamento"
                element={auth ? <Orcamento /> : <Navigate to="/login" />}
            />
            <Route
                path="/vendas/notasProdutos"
                element={auth ? <NotasFiscaisDeProduto /> : <Navigate to="/login" />}
            />
            <Route
                path="/vendas/notasServicos"
                element={auth ? <NotasFiscaisDeServico /> : <Navigate to="/login" />}
            />
            <Route
                path="/vendas/pedidosVenda"
                element={auth ? <PedidoDeVenda /> : <Navigate to="/login" />}
            />
            <Route
                path="/vendas/vendasDiaria"
                element={auth ? <VendasDiarias /> : <Navigate to="/login" />}
            />
            <Route
                path="/compras/pedidoCompra"
                element={auth ? <PedidosDeCompra /> : <Navigate to="/login" />}
            />
            <Route
                path="/compras/notasCompra"
                element={auth ? <NotasDeCompra /> : <Navigate to="/login" />}
            />
            <Route
                path="/relatorio/relatorioCadastro"
                element={auth ? <RelatorioDeCadastro /> : <Navigate to="/login" />}
            />
            <Route
                path="/relatorio/relatorioCompras"
                element={auth ? <RelatorioDeCompras /> : <Navigate to="/login" />}
            />
            <Route
                path="/relatorio/relatorioVendas"
                element={auth ? <RelatorioDeVendas /> : <Navigate to="/login" />}
            />
            <Route
                path="/relatorio/relatorioEstoque"
                element={auth ? <RelatorioDeEstoque /> : <Navigate to="/login" />}
            />
            <Route
                path="/perfil"
                element={auth ? <Perfil /> : <Navigate to="/login" />}
            />

        </Routes>
    )
}

export default Router
