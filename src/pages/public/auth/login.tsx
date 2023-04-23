import styles from "./Auth.module.scss"

// Types
import { UsuarioLogin } from "../../../types/Interface";
import { RootState } from "../../../store";

// Validação e criação de formulário
import { Form, Field, ErrorMessage, Formik } from "formik";
import validacaoUsuario from "../../../controllers/validacaoCadastro"
import initialValues from "../../../controllers/initialValues";

// Icons 
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa"

// Hooks
import { useEffect, useRef } from "react"

// Next
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from "next/image";

// Components
import Botao from "../../../components/Botao/Botao"
import Message from "../../../components/Message/Message";

//Redux
import { login, reset } from "../../../slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import PublicLayout from "../PublicLayout";

const Login = () => {

  const emailInputRef = useRef<HTMLInputElement>(null);
  const dispatch: any = useDispatch()
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  // A função onSubmit é responsável por enviar o formulário preenchido pelo usuário para o backend. Ela utiliza a validação mais precisa do backend para garantir a integridade dos dados. Ao ser ativada, a função faz um dispatch da função "register" que vem do reducer do Redux presente no arquivo "AuthSlice". Se o registro for bem sucedido, o usuário é cadastrado no banco de dados MongoDB e logado no sistema. Caso contrário, um erro é retornado e exibido ao usuário por meio do componente "Message" adicionado ao final do formulário.
  const onSubmit = async (values: UsuarioLogin) => {
    try {
      await dispatch(login(values));
    } catch (error) {
      console.log(error);
      // Lógica para tratamento de erros, caso ocorra algum problema no login
    }
  }

  // O useEffect é utilizado para limpar os estados dos reducers do Redux no arquivo "AuthSlice" quando o componente é desmontado. Isso é necessário para garantir que não haja resquícios de dados do usuário anterior na próxima vez que o formulário for carregado. Isso é feito usando o método "cleanup" que faz um dispatch das ações necessárias para limpar os estados dos reducers. O useEffect é acionado quando o componente é desmontado e a função "cleanup" é executada.
  useEffect(() => {
    dispatch(reset())
    emailInputRef.current?.focus();
  }, [dispatch]);

  return (
    <PublicLayout>
      <div className={styles["container-auth"]}>
        <div className={styles["auth-descricao"]}>
          <div>
            <h2>Entrar no</h2>
            <h2 className="inventory">Inventory</h2>
          </div>
          <div>
            <p>Se você ainda não tem uma conta</p>
            <p>Faça seu cadastro abaixo</p>
            <Botao className="botao-cadastro-login" type="button">
              <Link href="/cadastro">Cadastre-se</Link>
            </Botao>
          </div>
        </div>

        <Image
          src="/img/homemcomcaixa.jpg"
          alt="Duas caixas marrons"
          // className={`${styles["animacao-mecher-caixas"]} ${styles.image}`}
          className={styles["image-login"]}
          width={500}
          height={500}
          priority
        />

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
                {errors.email && <ErrorMessage name="email" component="span" className={styles["message-error"]} />}
                <Field type="email" placeholder='E-mail' name='email' innerRef={emailInputRef} />
              </label>

              <label>
                {errors.senha && <ErrorMessage name="senha" component="span" className={styles["message-error"]} />}
                <Field type="password" placeholder='Senha' name='senha' />
              </label>

              <Link href="/esqueceuSenha">
                <span className={styles["esqueceu-senha"]}>Esqueceu sua senha?</span>
              </Link>

              <Botao disabled={loading} type="submit" className="botao-proximo">
                {loading ? 'Aguarde...' : 'Login'}
              </Botao>

              {Array.isArray(error) && <Message msg={error} type="error" />}

              <span className={styles["continue-redes"]}>Ou continue com</span>

              <div className={styles["icons-login"]}>
                <FcGoogle style={{ padding: "0 24px" }} />
                <FaFacebookF color="#1778f2" style={{ padding: "0 24px" }} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </PublicLayout>
  )
}

export default Login