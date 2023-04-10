import "./Auth.css"

// Types
import { UsuarioLogin } from "../../types/Interface";
import { RootState } from "../../store";

// Validação e criação de formulário
import { Form, Field, ErrorMessage, Formik } from "formik";
import validacaoUsuario from "../../controllers/validacaoCadastro"
import initialValues from "../../controllers/initialValues";

// Icons 
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa"

// Imagens
import imgLogin from "./img/caixasmarrons.svg"

// Hooks
import { useEffect, useRef } from "react"

// Router
import { NavLink } from "react-router-dom";

// Components
import Botao from "../../components/Botao/Botao"
import Message from "../../components/Message/Message";

//Redux
import { login, reset } from "../../slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {

  const emailInputRef = useRef<HTMLInputElement>(null);
  const dispatch: any = useDispatch()
  const { loading, error } = useSelector((state: RootState) => state.auth);

  // A função onSubmit é responsável por enviar o formulário preenchido pelo usuário para o backend. Ela utiliza a validação mais precisa do backend para garantir a integridade dos dados. Ao ser ativada, a função faz um dispatch da função "register" que vem do reducer do Redux presente no arquivo "AuthSlice". Se o registro for bem sucedido, o usuário é cadastrado no banco de dados MongoDB e logado no sistema. Caso contrário, um erro é retornado e exibido ao usuário por meio do componente "Message" adicionado ao final do formulário.
  const onSubmit = (values: UsuarioLogin )=> {
    dispatch(login(values));
  }

  // O useEffect é usado em conjunto com o useRef para focar o primeiro input do formulário quando a página é carregada. Isso é feito definindo o elemento a ser focado com o useRef e, em seguida, utilizando o useEffect para disparar a função de foco assim que o componente é montado. Dessa forma, o usuário é direcionado diretamente para o primeiro campo do formulário, facilitando a interação com a página.
  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  // O useEffect é utilizado para limpar os estados dos reducers do Redux no arquivo "AuthSlice" quando o componente é desmontado. Isso é necessário para garantir que não haja resquícios de dados do usuário anterior na próxima vez que o formulário for carregado. Isso é feito usando o método "cleanup" que faz um dispatch das ações necessárias para limpar os estados dos reducers. O useEffect é acionado quando o componente é desmontado e a função "cleanup" é executada.
  useEffect(() => {
    dispatch(reset())
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
          <p>Faça seu <NavLink to="/cadastro">cadastro aqui </NavLink></p>
        </div>
      </div>

      <img src={imgLogin} alt="Duas caixas marrons" className="imagem-auth animacao-mecher-caixas" />

      {/* Nesta pagina, foi utilizado o Formik, que ajuda a reduzir a quantidade de código escrita, simplificando a aplicação. Além disso, ele oferece validações importantes e em caso de erro, o componente "ErrorMessage" exibe o erro acima dos inputs. */}
      <Formik
        initialValues={initialValues.login}
        validationSchema={validacaoUsuario.login}
        onSubmit={onSubmit}
      >
        {({ errors }) => (
          <Form>

            {/* Este é o formulário de login, onde o usuário fornece seu email e senha. Após a submissão do formulário, é realizada uma validação no backend para verificar se o usuário já está cadastrado no banco de dados e se a senha está correta. Se tudo estiver correto, o usuário é autenticado e redirecionado para a página inicial. Caso contrário, uma mensagem de erro é exibida usando o componente "Message". */}
            <label>
              {errors.email && <ErrorMessage name="email" component="span" className="message-error" />}
              <Field type="email" placeholder='E-mail' name='email' innerRef={emailInputRef} />
            </label>

            <label>
              {errors.senha && <ErrorMessage name="senha" component="span" className="message-error" />}
              <Field type="password" placeholder='Senha' name='senha' />
            </label>

            <NavLink to="/esqueceuSenha">
              <span className="esqueceu-senha">Esqueceu sua senha?</span>
            </NavLink>

            <Botao type="submit" className="botao-proximo">
              {loading ? 'Aguarde...' : 'Login'}
            </Botao>

            {Array.isArray(error) && <Message msg={error} type="error" />}

            <span className="continue-redes">Ou continue com</span>

            <div className="icons-login">
              <FcGoogle style={{ padding: "0 24px" }} />
              <FaFacebookF color="#1778f2" style={{ padding: "0 24px" }} />
            </div>
          </Form>
        )}
      </Formik>

    </>
  )
}

export default Login