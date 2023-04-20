import styles from "./Navbar.module.scss";

// Next
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'


// Icons
import { FaUserCog } from "react-icons/fa"
import { IoExitOutline } from "react-icons/io5"

// Img
import logo from "./umacaixa.svg";

// Hooks
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { useState } from "react";

// Redux
import { logout, reset } from "../../slices/authSlice";

const Navbar = (): JSX.Element => {

    const [hover, setHover] = useState<string>("")
    const [activeMenu, setActiveMenu] = useState<string>("");

    const { auth } = useAuth();
    const router = useRouter();
    const dispatch: any = useDispatch();

    const handleLogout = (): void => {
        dispatch(logout());
        dispatch(reset());

        router.push("/login");
    };

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={`${styles['menu-logo']} ${styles['menu']}`} onClick={() => setActiveMenu("")}>
                <Image src={logo} alt="Logo do Inventory" />
                <h1 className="inventory">Inventory</h1>
            </Link>
            {auth ?
                (
                    <>
                        <ul className={`${styles['menu-auth']} ${styles['menu']}`}>
                            <li >
                                <p
                                    className={`${activeMenu === "cadastro" ? styles.underline : ""}`}
                                    onMouseEnter={() => { setHover("cadastro") }}
                                    onMouseLeave={() => { setHover("") }}
                                >
                                    Cadastro
                                </p>
                                {<ul
                                    style={{ display: hover === "cadastro" ? "block" : "none" }}
                                    onMouseEnter={() => { setHover("cadastro") }}
                                    onMouseLeave={() => { setHover("") }}
                                >
                                    <li>
                                        <Link href="/cadastros/clientes" onClick={() => { setActiveMenu("cadastro") }}>Clientes</Link>
                                    </li>
                                    <li>
                                        <Link href="/cadastros/fornecedor" onClick={() => { setActiveMenu("cadastro") }}>Fornecedor</Link>
                                    </li>
                                    <li>
                                        <Link href="/cadastros/produtos" onClick={() => { setActiveMenu("cadastro") }}>Produtos</Link>
                                    </li>
                                    <li>
                                        <Link href="/cadastros/anuncios" onClick={() => { setActiveMenu("cadastro") }}>Anuncios</Link>
                                    </li>

                                </ul>}
                            </li>
                            <li>
                                <p
                                    className={`${activeMenu === "estoque" ? styles.underline : ""}`}
                                    onMouseEnter={() => { setHover("estoque") }}
                                    onMouseLeave={() => { setHover("") }}
                                >
                                    Estoque
                                </p>
                                {<ul
                                    style={{ display: hover === "estoque" ? "block" : "none" }}
                                    onMouseEnter={() => { setHover("estoque") }}
                                    onMouseLeave={() => { setHover("") }}
                                >
                                    <li>
                                        <Link href="/estoque/controleEstoque" onClick={() => { setActiveMenu("estoque") }}>Controle de Estoque</Link>
                                    </li>
                                    <li>
                                        <Link href="/estoque/entradaNfe" onClick={() => { setActiveMenu("estoque") }}>Entrada de NF-e</Link>
                                    </li>

                                </ul>}
                            </li>
                            <li>
                                <p

                                    className={`${activeMenu === "vendas" ? styles.underline : ""}`}
                                    onMouseEnter={() => { setHover("vendas") }}
                                    onMouseLeave={() => { setHover("") }}
                                >
                                    Vendas
                                </p>
                                {<ul
                                    style={{ display: hover === "vendas" ? "block" : "none" }}
                                    onMouseEnter={() => { setHover("vendas") }}
                                    onMouseLeave={() => { setHover("") }}
                                >
                                    <li>
                                        <Link href="/vendas/orcamento" onClick={() => { setActiveMenu("vendas") }}>Orçamentos</Link>
                                    </li>
                                    <li>
                                        <Link href="/vendas/pedidosVenda" onClick={() => { setActiveMenu("vendas") }}>Pedidos de Venda</Link>
                                    </li>
                                    <li>
                                        <Link href="/vendas/notasProdutos" onClick={() => { setActiveMenu("vendas") }}>Notas Fiscais de Produtos</Link>
                                    </li>
                                    <li>
                                        <Link href="/vendas/notasServicos" onClick={() => { setActiveMenu("vendas") }}>Notas Fiscais de Serviços</Link>
                                    </li>
                                    <li>
                                        <Link href="/vendas/vendasDiaria" onClick={() => { setActiveMenu("vendas") }}>Vendas Diárias</Link>
                                    </li>

                                </ul>}
                            </li>
                            <li>
                                <p
                                    className={`${activeMenu === "compras" ? styles.underline : ""}`}
                                    onMouseEnter={() => { setHover("compras") }}
                                    onMouseLeave={() => { setHover("") }}
                                >
                                    Compras
                                </p>
                                {<ul
                                    style={{ display: hover === "compras" ? "block" : "none" }}
                                    onMouseEnter={() => { setHover("compras") }}
                                    onMouseLeave={() => { setHover("") }}
                                >
                                    <li>
                                        <Link href="/compras/pedidosCompra" onClick={() => { setActiveMenu("compras") }}>Pedidos de Compra</Link>
                                    </li>
                                    <li>
                                        <Link href="/compras/notasCompra" onClick={() => { setActiveMenu("compras") }}>Notas de Compra</Link>
                                    </li>

                                </ul>}
                            </li>
                            <li>
                                <p
                                    className={`${activeMenu === "relatorio" ? styles.underline : ""}`}
                                    onMouseEnter={() => { setHover("relatorio") }}
                                    onMouseLeave={() => { setHover("") }}
                                >
                                    Relatórios
                                </p>
                                {<ul
                                    style={{ display: hover === "relatorio" ? "block" : "none" }}
                                    onMouseEnter={() => { setHover("relatorio") }}
                                    onMouseLeave={() => { setHover("") }}
                                >
                                    <li>
                                        <Link href="/private/relatorio/relatorioCadastro" as="/relatorio/relatorioCadastro" onClick={() => { setActiveMenu("relatorio") }}>Relatório de Cadastro</Link>
                                    </li>
                                    <li>
                                        <Link href="/private/relatorio/relatorioEstoque" as="/relatorio/relatorioEstoque" onClick={() => { setActiveMenu("relatorio") }}>Relatório de Estoque</Link>
                                    </li>
                                    <li>
                                        <Link href="/private/relatorio/relatorioVendas" as="/relatorio/relatorioVendas" onClick={() => { setActiveMenu("relatorio") }}>Relatório de Vendas</Link>
                                    </li>
                                    <li>
                                        <Link href="/private/relatorio/relatorioCompras" as="/relatorio/relatorioCompras" onClick={() => { setActiveMenu("relatorio") }}>Relatório de Compras</Link>
                                    </li>

                                </ul>}
                            </li>
                        </ul>
                        <ul className={`${styles['menu-logout']} ${styles['menu']}`}>
                            <li>
                                <Link href="/perfil" >
                                    <FaUserCog />
                                </Link>
                            </li>
                            <li>
                                <IoExitOutline onClick={handleLogout} />
                            </li>

                        </ul>
                    </>
                ) :
                (
                    <>
                        <ul className={`${styles['menu-no-auth']} ${styles['menu']}`}>
                            <li>
                                <Link href="/public/funcionalidades" as="/funcionalidades">
                                    Funcionalidades
                                </Link>
                            </li>
                            <li>
                                <Link href="/public/planos" as="/planos">
                                    Planos e Preços
                                </Link>
                            </li>
                            <li>
                                <Link href="/public/contato" as="/contato">
                                    Contato
                                </Link>
                            </li>
                            <li>
                                <Link href="/public/blog" as="/blog">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                        <ul className={`${styles['menu-sign']} ${styles['menu']}`}>
                            <li>
                                <Link href="/login">
                                    Entrar
                                </Link>
                            </li>
                            <li>
                                <Link href="/public/auth/cadastro" as="/cadastro">
                                    Registrar
                                </Link>
                            </li>
                        </ul>
                    </>
                )}
        </nav>
    )
}

export default Navbar