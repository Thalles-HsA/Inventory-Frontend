import "./Auth.css"

// Validação e criação de formulário
import { Formik, Form, Field, ErrorMessage, FormikProvider } from "formik";
import validacaoUsuario from "../../controllers/validacaoUsuario"

// icons 
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa"

//imagens e pré-load
import imgLogin from "./caixasmarrons.svg"

// Hooks
import { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import Botao from "../../components/Botao/Botao"
import Message from "../../components/Message/Message";

//Redux
import { login, reset } from "../../slices/authSlice";

const Login = () => {
 
  const emailInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  const initialValues = {
    email: "",
    senha: "",
  }

  const onSubmit = (values) => {
    console.log(values);
    dispatch(login(values))
  };


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

      <img src={imgLogin} alt="Duas caixas marrons" className="imagem-auth animacao-mecher-caixas" />

      <FormikProvider>
        <Formik
          initialValues={initialValues}
          validationSchema={validacaoUsuario.login}
          onSubmit={onSubmit}
        >
          {({ values, errors, setFieldTouched, touched,
          }) => (
            <Form>
              <Field type="email" placeholder='E-mail' name='email' innerRef={emailInputRef} onBlur={() => setFieldTouched('email')} />
              {touched.email && errors.email && <ErrorMessage name="email" component="span" />}

              <Field type="password" placeholder='Senha' name='senha' onBlur={() => setFieldTouched('senha')} />
              {touched.senha && errors.senha && <ErrorMessage name="senha" component="span" />}

              <Link to="/esqueceuSenha">
                <span className="esqueceu-senha">Esqueceu sua senha?</span>
              </Link>

              <Botao disabled={loading} type="submit">
                {loading ? 'Aguarde...' : 'Login'}
              </Botao>

              {error && <Message msg={error} type="error" />}

              <span className="continue-redes">Ou continue com</span>

              <div className="icons-login">
                <FcGoogle style={{ padding: "0 24px" }} />
                <FaFacebookF color="#1778f2" style={{ padding: "0 24px" }} />
              </div>
            </Form>
          )}
        </Formik>
      </FormikProvider>
    </>
  )
}

export default Login