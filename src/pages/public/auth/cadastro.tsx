import styles from "./Auth.module.scss"

import { Usuario } from "../../../types/Interface";

// Validação e criação de usuário e formulário
import { Formik, Form, Field, ErrorMessage } from "formik";
import validacaoUsuario from "../../../controllers/validacaoCadastro"
import initialValues from "../../../controllers/initialValues";

// Imagem e pré-carregamento
import imgRegistro from "/img-auth/paginaregistro.png"

// Componentes
import Message from "../../../components/Message/Message";
import Botao from '../../../components/Botao/Botao'

// Hooks
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from 'react'

// Redux
import { register, reset } from "../../../slices/authSlice";
import { RootState } from "../../../store";

// Next
import Link from "next/link";
import Image from "next/image";
import PublicLayout from "../PublicLayout";
import { useRouter } from "next/router";

const Registrar = () => {

  const [etapa, setEtapa] = useState<number>(1);
  const [tipo, setTipo] = useState<string>("cnpj")
  const [valid, setValid] = useState<boolean>(false)

  const [animationStep1, setAnimationStep1] = useState(styles['']);
  const [animationStep2, setAnimationStep2] = useState('');
  const [animationStep3, setAnimationStep3] = useState('');

  const dispatch: any = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  // A função handleProximo é responsável por ativar o evento do botão "próximo" no formulário. Ela troca as classes CSS das divs para permitir o efeito de transição e adiciona +1 ao state "etapa", levando o usuário para a próxima etapa do formulário. Além disso, ela também ativa a validação do Formik através de um submit. É importante mencionar que um setTimeout foi adicionado para garantir que a animação seja executada corretamente.
  const handleNextDiv = () => {

    getNextClassName();

    setTimeout(() => {
      setEtapa(etapa + 1);
      setValid(false)
    }, 600);
  };

  //A função handleAnterior tem o mesmo propósito da handleProximo, porém de forma invertida. Ela é responsável por ativar o evento do botão "anterior", que troca as classes CSS das divs do formulário, permitindo que o efeito de transição seja executado adequadamente no sentido contrário. Além disso, essa função subtrai -1 do state "etapa", levando o usuário de volta para a etapa anterior do formulário. É importante ressaltar que, para garantir a execução correta da animação, foi necessário adicionar um setTimeout.
  const handleProviousDiv = () => {

    getPreviousClassName()

    setTimeout(() => {
      setEtapa(etapa - 1);
    }, 600)

  };

  // As classes CSS são aplicadas para garantir a animação de transição suave entre as etapas do formulário. Para cada etapa do formulário, são adicionadas uma de três classes disponíveis, dependendo da direção da transição. A primeira classe é usada quando a etapa atual está entrando, a segunda quando a etapa atual está saindo e a terceira é usada quando a próxima etapa está entrando. Isso garante que a animação funcione sem problemas e dê uma sensação de progresso suave para o usuário.
  const getNextClassName = () => {
    if (etapa === 1) {
      setAnimationStep1(styles['animacao-sair']);
      setAnimationStep2(styles['animacao-entrar']);
      setTimeout(() => {
        setAnimationStep1(styles['']);
      }, 600)
      return;
    } else if (etapa === 2) {
      setAnimationStep2(styles['animacao-sair']);
      setAnimationStep3(styles['animacao-entrar']);
      setTimeout(() => {
        setAnimationStep2(styles['']);
      }, 600)
    }
  }

  const getPreviousClassName = () => {
    if (etapa === 2) {
      setAnimationStep1(styles['animacao-voltar-entrar']);
      setAnimationStep2(styles['animacao-voltar-sair']);
      setTimeout(() => {
        setAnimationStep2(styles['']);
      }, 600)
      return;
    } else if (etapa === 3) {
      setAnimationStep2(styles['animacao-voltar-entrar']);
      setAnimationStep3(styles['animacao-voltar-sair']);
      setTimeout(() => {
        setAnimationStep3(styles['']);
      }, 600)
    }
  }

  // A função onSubmit é responsável por enviar o formulário preenchido pelo usuário para o backend. Ela utiliza a validação mais precisa do backend para garantir a integridade dos dados. Ao ser ativada, a função faz um dispatch da função "register" que vem do reducer do Redux presente no arquivo "AuthSlice". Se o registro for bem sucedido, o usuário é cadastrado no banco de dados MongoDB e logado no sistema. Caso contrário, um erro é retornado e exibido ao usuário por meio do componente "Message" adicionado ao final do formulário.
  const onSubmit = async (values: Usuario) => {
    console.log(values);

    if (etapa === 3) {
      try {
        await dispatch(register(values));
      } catch (error) {
        console.log(error);
        // Lógica para tratamento de erros, caso ocorra algum problema no login
      }
    }
  };

  // O useEffect é usado em conjunto com o useRef para focar o primeiro input do formulário quando a página é carregada. Isso é feito definindo o elemento a ser focado com o useRef e, em seguida, utilizando o useEffect para disparar a função de foco assim que o componente é montado. Dessa forma, o usuário é direcionado diretamente para o primeiro campo do formulário, facilitando a interação com a página.
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // O useEffect é utilizado para limpar os estados dos reducers do Redux no arquivo "AuthSlice" quando o componente é desmontado. Isso é necessário para garantir que não haja resquícios de dados do usuário anterior na próxima vez que o formulário for carregado. Isso é feito usando o método "cleanup" que faz um dispatch das ações necessárias para limpar os estados dos reducers. O useEffect é acionado quando o componente é desmontado e a função "cleanup" é executada.
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);



  return (
    <PublicLayout>
      <div className={styles["container-auth"]}>
        <div className={styles["auth-descricao"]}>
          <div >
            <h2>Cadastre-se agora no</h2>
            <h2 className="inventory">Inventory</h2>
          </div>
          <div>
            <p>Já tem uma conta?</p>
            <p>Faça seu login abaixo</p>
            <Botao className="botao-cadastro-login" type="button">
              <Link href="/login">Login</Link>
            </Botao>
          </div>
        </div>


        <Image
          src="/img/paginaregistro.jpg"
          alt="Caixas, carrinhos e prancheta"
          className={styles["image-cadastro"]}
          width={500}
          height={500}
          priority
        />

        {/* Nesta pagina, foi utilizado o Formik, que ajuda a reduzir a quantidade de código escrita, simplificando a aplicação. Além disso, ele oferece validações importantes e em caso de erro, o componente "ErrorMessage" exibe o erro acima dos inputs. */}
        <Formik
          initialValues={tipo === "cpf" ? initialValues.cpf : initialValues.cnpj}
          validationSchema={tipo === "cpf" ? validacaoUsuario.registrarcpf : validacaoUsuario.registrarcnpj}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, errors, setFieldTouched }) => (
            <Form>

              {/* Esta é a primeira etapa do formulário, onde o usuário deve fornecer o seu e-mail, senha e confirmação de senha. Essas informações são capturadas por meio de inputs e validadas pelo Formik. Caso haja algum erro de validação, o ErrorMessage é exibido acima dos inputs.  */}
              <div
                id="etapa1"
                className={animationStep1}

                // A lógica do estilo é simples: se a etapa corresponder à lógica, o display é "block", exibindo a div atual. Caso contrário, o display é "none", ocultando a div atual. Essa lógica é implementada por meio de uma expressão ternária dentro do objeto style, que é passado como propriedade para cada div correspondente a uma etapa do formulário.
                style={{ display: etapa === 1 ? "block" : "none" }}
              >
                <p>Primeiro coloque seu e-mail e senha</p>

                <span className={styles.obrigatorio}>(*) Campos obrigatórios</span>

                <label>
                  {valid && errors.email &&
                    <ErrorMessage name="email" component="span" className={styles["message-error"]} />
                  }
                  <Field
                    type="email"
                    placeholder='E-mail*'
                    name="email"
                    innerRef={inputRef}
                    onFocus={() => setValid(false)}
                  />
                </label>

                <label>
                  {valid && errors.senha &&
                    <ErrorMessage name="senha" component="span" className={styles["message-error"]} />
                  }
                  <Field
                    type="password"
                    placeholder='Senha*'
                    name="senha"
                    onFocus={() => setValid(false)}
                  />
                </label>

                <label>
                  {valid && errors.confirmarSenha &&
                    <ErrorMessage name="confirmarSenha" component="span" className={styles["message-error"]} />
                  }
                  <Field
                    type="password"
                    placeholder='Confirme sua senha*'
                    name="confirmarSenha"
                    onFocus={() => setValid(false)}
                  />
                </label>

                <Botao
                  onClick={() => {
                    setValid(true)
                    if (
                      errors.email === undefined &&
                      errors.senha === undefined &&
                      errors.confirmarSenha === undefined
                    ) { handleNextDiv() }
                  }}
                  type="submit"
                  className="botao-proximo"
                >
                  Próximo
                </Botao>
              </div>

              {/* Esta é a segunda etapa do formulário, onde o usuário deve fornecer o tipo de cliente que é e colocar seu nome e documento. Essas informações são capturadas por meio de inputs e validadas pelo Formik. Caso haja algum erro de validação, o ErrorMessage é exibido acima dos inputs.  */}
              <div
                id="etapa2"
                className={animationStep2}
                style={{ display: etapa === 2 ? "block" : "none" }}
              >
                <p>Agora que tipo de cliente você é</p>

                <span className={styles.obrigatorio}>(*) Campos obrigatórios</span>

                <label>
                  <Field
                    type="radio"
                    name="tipo"
                    value="cnpj"
                    onClick={() => {
                      setFieldValue('tipo', 'cnpj');
                      setTipo("cnpj");
                    }}
                  />
                  <span className={styles.tipo}>
                    Pessoa Jurídica
                  </span>
                </label>

                <label>
                  <Field
                    type="radio"
                    name="tipo"
                    value="cpf"
                    onClick={() => {
                      setFieldValue('tipo', 'cpf');
                      setTipo("cpf");
                    }}
                  />
                  <span className={styles.tipo}>
                    Pessoa Fisícia
                  </span>
                </label>

                {
                  tipo === "cnpj"
                    ? (
                      <>
                        <label>
                          {valid && errors.cnpj && values.tipo === "cnpj" &&
                            <ErrorMessage name="razaoSocial" component="span" className={styles["message-error"]} />
                          }
                          <Field
                            type="text"
                            placeholder='Razão Social*'
                            name="razaoSocial"
                            onFocus={() => setValid(false)} />
                        </label>

                        <label>
                          {valid && errors.razaoSocial && values.tipo === "cnpj" &&
                            <ErrorMessage name="cnpj" component="span" className={styles["message-error"]} />
                          }
                          <Field
                            type="text"
                            placeholder='**.***.***/****-**'
                            name="cnpj"
                            onFocus={() => setValid(false)} />
                        </label>
                      </>
                    )
                    :
                    (
                      <>
                        <label>
                          {valid && errors.nome &&
                            <ErrorMessage name="nome" component="span" className={styles["message-error"]} />
                          }
                          <Field
                            type="text"
                            placeholder='Nome*'
                            name="nome"
                            onFocus={() => setValid(false)}
                          />
                        </label>

                        <label>
                          {valid && errors.cpf &&
                            <ErrorMessage name="cpf" component="span" className={styles["message-error"]} />
                          }
                          <Field
                            type="text"
                            placeholder='***.***.***-**'
                            name="cpf"
                            onBlur={() => setFieldTouched('cpf')}
                            onFocus={() => setValid(false)}
                          />
                        </label>
                      </>
                    )
                }
                <Botao
                  type="submit"
                  onClick={() => {
                    setValid(true)
                    if (
                      errors.cnpj === undefined &&
                      errors.razaoSocial === undefined &&
                      errors.cpf === undefined &&
                      errors.nome === undefined
                    ) { handleNextDiv() }
                  }}
                  className="botao-proximo"
                >
                  Próximo
                </Botao >

                <Botao
                  type="button"
                  className="botao-voltar" onClick={() => handleProviousDiv()}>
                  Voltar
                </Botao>
              </div>

              {/* Nesta etapa, o usuário deve fornecer informações de endereço, incluindo CEP, número da residência, complemento, cidade e estado. Essas informações são capturadas por meio de inputs e validadas pelo Formik. Caso haja algum erro de validação, o ErrorMessage é exibido acima dos inputs. Aqui realizamos a valições tambem vindas do backend ao clicar no botao "Concluir", se estiver tudo certo o formulário é enviado e o cliente cadastrado e logado, do contrario uma messagem de erro é exibida atrávez do componente "Message"   */}
              <div
                id="etapa3"
                className={animationStep3}
                style={{ display: etapa === 3 ? "block" : "none" }}
              >
                <p>Por último seu endereço.</p>

                <span className={styles["obrigatorio"]}>(*) Campos obrigatórios</span>
                <label>
                  {valid && errors.logradouro &&
                    <ErrorMessage name="logradouro" component="span" className={styles["message-error"]} />
                  }
                  <Field
                    type="text"
                    placeholder='Logradouro*'
                    name="logradouro"
                    onFocus={() => setValid(false)}
                  />
                </label>

                <label>
                  {valid && errors.numero &&
                    <ErrorMessage name="numero" component="span" className={styles["message-error"]} />
                  }
                  <Field
                    className={styles["input-menor"]}
                    type="text" placeholder='Número*'
                    name="numero"
                    onFocus={() => setValid(false)}
                  />
                </label>

                <label>
                  {valid && errors.complemento &&
                    <ErrorMessage name="complemento" component="span" className={styles["message-error"]} />
                  }
                  <Field
                    className={styles["input-medio"]}
                    type="text"
                    placeholder='Complemento'
                    name="complemento"
                    onFocus={() => setValid(false)}
                  />
                </label>

                <label>
                  {valid && errors.bairro &&
                    <ErrorMessage name="bairro" component="span" className={styles["message-error"]} />
                  }
                  <Field
                    type="text"
                    placeholder='Bairro*'
                    name="bairro"
                    onFocus={() => setValid(false)}
                  />
                </label>

                <label>
                  {valid && errors.cidade &&
                    <ErrorMessage name="cidade" component="span" className={styles["message-error"]} />
                  }
                  <Field
                    type="text"
                    placeholder='Cidade*'
                    name="cidade"
                    onFocus={() => setValid(false)}
                  />
                </label>

                <label>
                  {valid && errors.estado &&
                    <ErrorMessage name="estado" component="span" className={styles["message-error"]} />
                  }
                  <Field
                    className={styles["input-menor"]}
                    type="text"
                    placeholder='UF*'
                    name="estado"
                    onFocus={() => setValid(false)}
                  />
                </label>

                <label>
                  {valid && errors.cep &&
                    <ErrorMessage name="cep" component="span" className={styles["message-error"]} />
                  }
                  <Field
                    className={styles["input-medio"]}
                    type="text"
                    placeholder='CEP*'
                    name="cep"
                    onFocus={() => setValid(false)} />
                </label>

                <Botao
                  disabled={loading}
                  type="submit"
                  className="botao-proximo"
                  onClick={() => {
                    setValid(true)
                  }}
                >
                  {loading ? 'Aguarde...' : 'Cadastrar'}
                </Botao>

                <Botao
                  type="button"
                  className="botao-voltar"
                  onClick={handleProviousDiv}
                >
                  Voltar
                </Botao>

                {Array.isArray(error) && <Message msg={error} type="error" />}
              </div>

            </Form>
          )}
        </Formik>
      </div>
    </PublicLayout>
  )
}

export default Registrar