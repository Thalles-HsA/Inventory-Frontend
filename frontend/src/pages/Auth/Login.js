// Hooks
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";

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

  const handleSubmit =  (e) => {
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
    <div className="registrar-container">
      <div>
        <div>
          <h2>Cadastre-se agora no</h2>
          <h2>Inventory</h2>
        </div>
        <div>
          <p>Já tem uma conta?</p>
          <p>Faça seu <span>Login aqui</span></p>
        </div>
      </div>

      <div>
        <img src="/assets/img/prancheta.svg" alt="" />
        <img src="/assets/img/caixasmarrons.svg" alt="" />
      </div>

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

        {!loading && <Botao>Login</Botao>}
        {loading && <Botao>Aguarde...</Botao>}
        {error && <Message msg={error} type="error" />}


      </form>
    </div>
  )
}

export default Login