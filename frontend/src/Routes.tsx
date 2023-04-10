// Router
import { Navigate, Route, Routes, Outlet } from 'react-router-dom';

// Páginas não autenticadas
import Registrar from './pages/Auth/Registrar';
import Login from './pages/Auth/Login';
import Funcionalidades from "./pages/Funcionalidades/Funcionalidade";
import Planos from "./pages/Planos/Planos";
import Contato from "./pages/Contato/Contato";
import Blog from "./pages/Blog/Blog";

// Páginas Autenticadas
import Home from "./pages/Home/Home";
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

interface Props {
    auth: boolean;
}

const Router: React.FC<Props> = ({ auth }) => {
    return (

        < Routes>

            {/* Rotas não autenticadas */}
            <Route path="/" element={<Outlet />}>
                <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />} />
                <Route path="funcionalidades" element={!auth ? <Funcionalidades /> : <Navigate to="/" />} />
                <Route path="planos" element={!auth ? <Planos /> : <Navigate to="/" />} />
                <Route path="contato" element={!auth ? <Contato /> : <Navigate to="/" />} />
                <Route path="blog" element={!auth ? <Blog /> : <Navigate to="/" />} />
                <Route path="cadastro" element={!auth ? <Registrar /> : <Navigate to="/" />} />
                <Route path="login" element={!auth ? <Login /> : <Navigate to="/" />} />
            </Route>

            {/* Rotas de cadastro */}
            <Route path="/cadastros/" element={<Outlet />}>
                <Route path="clientes" element={auth ? <Clientes /> : <Navigate to="/login" />} />
                <Route path="anuncios" element={auth ? <Anuncios /> : <Navigate to="/login" />} />
                <Route path="fornecedor" element={auth ? <Fornecedor /> : <Navigate to="/login" />} />
                <Route path="produtos" element={auth ? <Produto /> : <Navigate to="/login" />} />
            </Route>

            {/* Rotas de estoque*/}
            <Route path="/estoque/" element={<Outlet />}>
                <Route path="controleEstoque" element={auth ? <ControleDeEstoque /> : <Navigate to="/login" />} />
                <Route path="entradaNfe" element={auth ? <EntradaDeNfe /> : <Navigate to="/login" />} />
            </Route>

            {/* Rotas de vendas*/}
            <Route path="/vendas/" element={<Outlet />}>
                <Route path="orcamento" element={auth ? <Orcamento /> : <Navigate to="/login" />} />
                <Route path="notasProdutos" element={auth ? <NotasFiscaisDeProduto /> : <Navigate to="/login" />} />
                <Route path="notasServicos" element={auth ? <NotasFiscaisDeServico /> : <Navigate to="/login" />} />
                <Route path="pedidosVenda" element={auth ? <PedidoDeVenda /> : <Navigate to="/login" />} />
                <Route path="vendasDiaria" element={auth ? <VendasDiarias /> : <Navigate to="/login" />} />
            </Route>

            {/* Rotas de compras*/}
            <Route path="/compras/" element={<Outlet />}>
                <Route path="pedidoCompra" element={auth ? <PedidosDeCompra /> : <Navigate to="/login" />} />
                <Route path="notasCompra" element={auth ? <NotasDeCompra /> : <Navigate to="/login" />} />
            </Route>

            {/* Rotas de relatórios*/}
            <Route path="/relatorio/" element={<Outlet />}>
                <Route path="relatorioCadastro" element={auth ? <RelatorioDeCadastro /> : <Navigate to="/login" />} />
                <Route path="relatorioCompras" element={auth ? <RelatorioDeCompras /> : <Navigate to="/login" />} />
                <Route path="relatorioVendas" element={auth ? <RelatorioDeVendas /> : <Navigate to="/login" />} />
                <Route path="relatorioEstoque" element={auth ? <RelatorioDeEstoque /> : <Navigate to="/login" />} />
            </Route>

            <Route path="/perfil" element={auth ? <Perfil /> : <Navigate to="/login" />} />

        </Routes>
    )
}

export default Router
