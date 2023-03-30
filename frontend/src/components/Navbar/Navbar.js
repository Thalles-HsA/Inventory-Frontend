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

// Redux
import { logout, reset } from "../../slices/authSlice";



const Navbar = () => {

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

            <Link to="/" className="nav-logo">
                <img src={logo} alt="" />
                <h1>Inventory</h1>
            </Link>
            {auth ?
                (<>
                    <ul className="nav-link">
                        <li>
                            <NavLink to="/cadastros">
                                Cadastro
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/estoque">
                                Estoque
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/vendas">
                                Vendas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Relatório" >
                                Relatório
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="nav-auth">
                        <li>
                            <NavLink to="/login" >
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