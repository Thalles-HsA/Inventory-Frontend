import "./Auth.css"

// icons 

import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa"

//imagens e pré-load
import imgLogin from "./caixasmarrons.svg"

// Hooks
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import Botao from "../../components/Botao/Botao"
import Message from "../../components/Message/Message";

//Redux
import { login, reset } from "../../slices/authSlice";

const Login = () => {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const dispatch = useDispatch()


  const { loading, error, usuario } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarios = {
      email,
      senha,
    };

    console.log(usuario);

    dispatch(login(usuarios))

  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <>
      <div className="auth-descricao">
        <div>
          <h2>Entrar no</h2>
          <h2 className="inventory">Inventory</h2>
        </div>
        <div>
          <p>Se você ainda não tem uma conta</p>
          <p>Faça seu <Link to="/cadastro">cadastro aqui </Link></p>
        </div>
      </div>

        <img
          src={imgLogin}
          alt="Duas caixas marrons"
          className="imagem-auth animacao-mecher-caixas"
        />


      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder='E-mail'
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder='Senha'
          onChange={(event) => setSenha(event.target.value)}
          value={senha}
        />

        <Link to="/esqueceuSenha"><span className="esqueceu-senha">Esqueceu sua senha?</span></Link>

        <Botao disabled={loading}>
          {loading ? 'Aguarde...' : 'Login'}
        </Botao>
        {/* {!loading && <Botao>Login</Botao>}
        {loading && <Botao disable={true}>Aguarde...</Botao>} */}
        {error && <Message msg={error} type="error" />}

        <span className="continue-redes">Ou continue com</span>

        <div className="icons-login">
          <FcGoogle style={{ padding: "0 24px" }} />
          <FaFacebookF color="#1778f2" style={{ padding: "0 24px" }} />
        </div>





      </form>
    </>
  )
}

export default Login