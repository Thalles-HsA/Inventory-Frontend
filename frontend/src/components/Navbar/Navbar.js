import "./Navbar.css";

// icons
import { FaUserCog } from "react-icons/fa"
import { IoExitOutline } from "react-icons/io5"

// Components
import { NavLink, Link } from "react-router-dom";
import logo from "./umacaixa.svg";

//hooks
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Redux
import { logout, reset } from "../../slices/authSlice";



const Navbar = () => {

    const [hover, setHover] = useState("")
    const [activeMenu, setActiveMenu] = useState("");



    const { auth } = useAuth();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());

        navigate("/login");
    };

    return (
        <nav className="navbar">

            <Link to="/" className="nav-logo" onClick={() => setActiveMenu("") }>
                <img src={logo} alt="" />
                <h1 className="inventory">Inventory</h1>
            </Link>
            {auth ?
                (<>
                    <ul className="nav-link-auth">
                        <li >
                            <a
                                
                                className={activeMenu === "cadastro" ? "underline" : ""}
                                onMouseEnter={() => { setHover("cadastro") }}
                                onMouseLeave={() => { setHover(false) }}
                            >
                                Cadastro
                            </a>
                            {<ul
                                className="submenu"
                                style={{ display: hover === "cadastro" ? "block" : "none" }}
                                onMouseEnter={() => { setHover("cadastro") }}
                                onMouseLeave={() => { setHover(false) }}
                            >
                                <li>
                                    <NavLink to="/cadastros/clientes" activeClassName="" onClick={() => { setActiveMenu("cadastro") }}>Clientes</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cadastros/fornecedor" activeClassName="" onClick={() => { setActiveMenu("cadastro") }}>Fornecedor</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cadastros/produtos" activeClassName="" onClick={() => { setActiveMenu("cadastro") }}>Produtos</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cadastros/anuncios" activeClassName="" onClick={() => { setActiveMenu("cadastro") }}>Anuncios</NavLink>
                                </li>
        
                            </ul>}
                        </li>
                        <li>
                            <a
                                href="#"
                                className={activeMenu === "estoque" ? "underline" : ""}
                                onMouseEnter={() => { setHover("estoque") }}
                                onMouseLeave={() => { setHover(false) }}
                            >
                                Estoque
                            </a>
                            {<ul
                                className="submenu"
                                style={{ display: hover === "estoque" ? "block" : "none" }}
                                onMouseEnter={() => { setHover("estoque") }}
                                onMouseLeave={() => { setHover(false) }}
                            >
                                <li>
                                    <NavLink to="/estoque/controleEstoque" onClick={() => { setActiveMenu("estoque") }}>Controle de Estoque</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/estoque/entradaNfe" onClick={() => { setActiveMenu("estoque") }}>Entrada de NF-e</NavLink>
                                </li>

                            </ul>}
                        </li>
                        <li>
                            <a
                                href="#"
                                className={activeMenu === "vendas" ? "underline" : ""}
                                onMouseEnter={() => { setHover("vendas") }}
                                onMouseLeave={() => { setHover(false) }}
                            >
                                Vendas
                            </a>
                            {<ul
                                className="submenu"
                                style={{ display: hover === "vendas" ? "block" : "none" }}
                                onMouseEnter={() => { setHover("vendas") }}
                                onMouseLeave={() => { setHover(false) }}
                            >
                                <li>
                                    <NavLink to="/vendas/orcamento" onClick={() => { setActiveMenu("vendas") }}>Orçamentos</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/vendas/pedidosVenda" onClick={() => { setActiveMenu("vendas") }}>Pedidos de Venda</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/vendas/notasProdutos" onClick={() => { setActiveMenu("vendas") }}>Notas Fiscais de Produtos</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/vendas/notasServicos" onClick={() => { setActiveMenu("vendas") }}>Notas Fiscais de Serviços</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/vendas/vendasDiaria" onClick={() => { setActiveMenu("vendas") }}>Vendas Diárias</NavLink>
                                </li>

                            </ul>}
                        </li>
                        <li>
                            <a
                                href="#"
                                className={activeMenu === "compras" ? "underline" : ""}
                                onMouseEnter={() => { setHover("compras") }}
                                onMouseLeave={() => { setHover(false) }}
                            >
                                Compras
                            </a>
                            {<ul
                                className="submenu"
                                style={{ display: hover === "compras" ? "block" : "none" }}
                                onMouseEnter={() => { setHover("compras") }}
                                onMouseLeave={() => { setHover(false) }}
                            >
                                <li>
                                    <NavLink to="/compras/pedidoCompra" onClick={() => { setActiveMenu("compras") }}>Pedido de compra</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/compras/notasCompra" onClick={() => { setActiveMenu("compras") }}>Notas de Compra</NavLink>
                                </li>

                            </ul>}
                        </li>
                        <li>
                            <a
                                href="#"
                                className={activeMenu === "relatorio" ? "underline" : ""}
                                onMouseEnter={() => { setHover("relatorio") }}
                                onMouseLeave={() => { setHover(false) }}
                            >
                                Relatórios
                            </a>
                            {<ul
                                className="submenu"
                                style={{ display: hover === "relatorio" ? "block" : "none" }}
                                onMouseEnter={() => { setHover("relatorio") }}
                                onMouseLeave={() => { setHover(false) }}
                            >
                                <li>
                                    <NavLink to="/relatorio/relatorioCadastro" onClick={() => { setActiveMenu("relatorio") }}>Relatório de Cadastro</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/relatorio/relatorioEstoque" onClick={() => { setActiveMenu("relatorio") }}>Relatório de Estoque</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/relatorio/relatorioVendas" onClick={() => { setActiveMenu("relatorio") }}>Relatório de Vendas</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/relatorio/relatorioCompras" onClick={() => { setActiveMenu("relatorio") }}>Relatório de Compras</NavLink>
                                </li>

                            </ul>}
                        </li>
                    </ul>
                    <ul className="nav-auth-svg">
                        <li>
                            <NavLink to="/perfil" >
                                <FaUserCog />
                            </NavLink>
                        </li>
                        <li>
                            <IoExitOutline onClick={handleLogout} />
                        </li>

                    </ul>
                </>) :

                (<>
                    <ul className="nav-link">
                        <li>
                            <NavLink to="/funcionalidades">
                                Funcionalidades
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/planos">
                                Planos e Preços
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contato">
                                Contato
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">
                                Blog
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/cadastro/teste">
                                Blog
                            </NavLink>
                        </li> */}
                    </ul>
                    <ul className="nav-auth">
                        <li>
                            <NavLink to="/login">
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cadastro">
                                Registrar
                            </NavLink>
                        </li>
                    </ul>
                </>)}


        </nav>
    )
}

export default Navbar