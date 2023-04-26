/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import styles from '@/styles/auth.module.scss';

import { Usuario } from '@/types/Interface';

import validacaoUsuario from '@/controllers/validacaoCadastro';
import initialValues from '@/controllers/initialValues';

import Message from '@/components/Message';
import Botao from '@/components/Botao';

import { getNextClassName, getPreviousClassName } from '@/utils/animationNextPrevious';
import { registerUser, reset } from '@/slices/authSlice';
import { RootState } from '@/store';

import PublicLayout from '../PublicLayout';

const Registrar = () => {
  const [etapa, setEtapa] = useState<number>(1);
  const [tipo, setTipo] = useState<string>('cnpj');
  const [valid, setValid] = useState<boolean>(false);

  const [animationStep1, setAnimationStep1] = useState<string>(styles['']);
  const [animationStep2, setAnimationStep2] = useState<string>('');
  const [animationStep3, setAnimationStep3] = useState<string>('');

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleNextDiv = () => {
    getNextClassName(
      {
        etapa,
        setAnimationStep1,
        setAnimationStep2,
        setAnimationStep3
      }
    );
    setTimeout(() => {
      setEtapa(etapa + 1);
      setValid(false);
    }, 600);
  };

  const handleProviousDiv = () => {
    getPreviousClassName(
      {
        etapa,
        setAnimationStep1,
        setAnimationStep2,
        setAnimationStep3
      }
    );
    setTimeout(() => {
      setEtapa(etapa - 1);
    }, 600);
  };

  const onSubmit = async (values: Usuario) => {
    if (etapa === 3) {
      try {
        await dispatch(registerUser(values));
      } catch {
        throw new Error('Houve algum erro a fazer o submit do formulario');
      }
    }
  };

  useEffect(() => {
    dispatch(reset());
    inputRef.current?.focus();
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>cadastro | Projeto Inventory</title>
      </Head>
      <PublicLayout>
        <div className={styles['container-auth']}>
          <div className={styles['auth-descricao']}>
            <div>
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
            className={styles['image-cadastro']}
            width={500}
            height={500}
            priority
          />
          <Formik
            initialValues={tipo === 'cpf' ? initialValues.cpf : initialValues.cnpj}
            validationSchema={tipo === 'cpf' ? validacaoUsuario.registrarcpf : validacaoUsuario.registrarcnpj}
            onSubmit={onSubmit}
          >
            {({ values, setFieldValue, errors, setFieldTouched }) => (
              <Form>
                <div
                  id="etapa1"
                  className={animationStep1}
                  style={{ display: etapa === 1 ? 'block' : 'none' }}
                >
                  <p>Primeiro coloque seu e-mail e senha</p>
                  <span className={styles.obrigatorio}>(*) Campos obrigatórios</span>
                  <label>
                    {valid && errors.email && (
                      <ErrorMessage
                        name="email"
                        component="span"
                        className={styles['message-error']}
                      />
                    )}
                    <Field
                      type="email"
                      placeholder="E-mail*"
                      name="email"
                      innerRef={inputRef}
                      onFocus={() => setValid(false)}
                    />
                  </label>
                  <label>
                    {valid && errors.senha && (
                      <ErrorMessage
                        name="senha"
                        component="span"
                        className={styles['message-error']}
                      />
                    )}
                    <Field
                      type="password"
                      placeholder="Senha*"
                      name="senha"
                      onFocus={() => setValid(false)}
                    />
                  </label>
                  <label>
                    {valid && errors.confirmarSenha && (
                      <ErrorMessage
                        name="confirmarSenha"
                        component="span"
                        className={styles['message-error']}
                      />
                    )}
                    <Field
                      type="password"
                      placeholder="Confirme sua senha*"
                      name="confirmarSenha"
                      onFocus={() => setValid(false)}
                    />
                  </label>
                  <Botao
                    onClick={() => {
                      setValid(true);
                      if (
                        errors.email === undefined &&
                        errors.senha === undefined &&
                        errors.confirmarSenha === undefined
                      ) { handleNextDiv(); }
                    }}
                    type="submit"
                    className="botao-proximo"
                  >
                    Próximo
                  </Botao>
                </div>
                <div
                  id="etapa2"
                  className={animationStep2}
                  style={{ display: etapa === 2 ? 'block' : 'none' }}
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
                        setTipo('cnpj');
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
                        setTipo('cpf');
                      }}
                    />
                    <span className={styles.tipo}>
                      Pessoa Fisícia
                    </span>
                  </label>
                  { tipo === 'cnpj'
                    ? (
                      <>
                        <label>
                          {valid && errors.cnpj && values.tipo === 'cnpj' && (
                          <ErrorMessage
                            name="razaoSocial"
                            component="span"
                            className={styles['message-error']}
                          />
                          )}
                          <Field
                            type="text"
                            placeholder="Razão Social*"
                            name="razaoSocial"
                            onFocus={() => setValid(false)}
                          />
                        </label>
                        <label>
                          {valid && errors.razaoSocial && values.tipo === 'cnpj' && (
                          <ErrorMessage
                            name="cnpj"
                            component="span"
                            className={styles['message-error']}
                          />
                          )}
                          <Field
                            type="text"
                            placeholder="**.***.***/****-**"
                            name="cnpj"
                            onFocus={() => setValid(false)}
                          />
                        </label>
                      </>
                      )
                    : (
                      <>
                        <label>
                          {valid && errors.nome && (
                          <ErrorMessage
                            name="nome"
                            component="span"
                            className={styles['message-error']}
                          />
                          )}
                          <Field
                            type="text"
                            placeholder="Nome*"
                            name="nome"
                            onFocus={() => setValid(false)}
                          />
                        </label>
                        <label>
                          {valid && errors.cpf && (
                          <ErrorMessage
                            name="cpf"
                            component="span"
                            className={styles['message-error']}
                          />
                          )}
                          <Field
                            type="text"
                            placeholder="***.***.***-**"
                            name="cpf"
                            onBlur={() => setFieldTouched('cpf')}
                            onFocus={() => setValid(false)}
                          />
                        </label>
                      </>
                      )}
                  <Botao
                    type="submit"
                    onClick={() => {
                      setValid(true);
                      if (
                        errors.cnpj === undefined &&
                        errors.razaoSocial === undefined &&
                        errors.cpf === undefined &&
                        errors.nome === undefined
                      ) { handleNextDiv(); }
                    }}
                    className="botao-proximo"
                  >
                    Próximo
                  </Botao>
                  <Botao
                    type="button"
                    className="botao-voltar"
                    onClick={() => handleProviousDiv()}
                  >
                    Voltar
                  </Botao>
                </div>
                <div
                  id="etapa3"
                  className={animationStep3}
                  style={{ display: etapa === 3 ? 'block' : 'none' }}
                >
                  <p>Por último seu endereço.</p>
                  <span className={styles.obrigatorio}>(*) Campos obrigatórios</span>
                  <label>
                    {valid && errors.logradouro && (
                      <ErrorMessage
                        name="logradouro"
                        component="span"
                        className={styles['message-error']}
                      />
                    )}
                    <Field
                      type="text"
                      placeholder="Logradouro*"
                      name="logradouro"
                      onFocus={() => setValid(false)}
                    />
                  </label>
                  <label>
                    {valid && errors.numero && (
                      <ErrorMessage
                        name="numero"
                        component="span"
                        className={styles['message-error']}
                      />
                    )}
                    <Field
                      className={styles['input-menor']}
                      type="text"
                      placeholder="Número*"
                      name="numero"
                      onFocus={() => setValid(false)}
                    />
                  </label>
                  <label>
                    {valid && errors.complemento && (
                      <ErrorMessage
                        name="complemento"
                        component="span"
                        className={styles['message-error']}
                      />
                    )}
                    <Field
                      className={styles['input-medio']}
                      type="text"
                      placeholder="Complemento"
                      name="complemento"
                      onFocus={() => setValid(false)}
                    />
                  </label>
                  <label>
                    {valid && errors.bairro && (
                      <ErrorMessage
                        name="bairro"
                        component="span"
                        className={styles['message-error']}
                      />
                    )}
                    <Field
                      type="text"
                      placeholder="Bairro*"
                      name="bairro"
                      onFocus={() => setValid(false)}
                    />
                  </label>
                  <label>
                    {valid && errors.cidade && (
                      <ErrorMessage
                        name="cidade"
                        component="span"
                        className={styles['message-error']}
                      />
                    )}
                    <Field
                      type="text"
                      placeholder="Cidade*"
                      name="cidade"
                      onFocus={() => setValid(false)}
                    />
                  </label>
                  <label>
                    {valid && errors.estado && (
                      <ErrorMessage
                        name="estado"
                        component="span"
                        className={styles['message-error']}
                      />
                    )}
                    <Field
                      className={styles['input-menor']}
                      type="text"
                      placeholder="UF*"
                      name="estado"
                      onFocus={() => setValid(false)}
                    />
                  </label>
                  <label>
                    {valid && errors.cep && (
                      <ErrorMessage
                        name="cep"
                        component="span"
                        className={styles['message-error']}
                      />
                    )}
                    <Field
                      className={styles['input-medio']}
                      type="text"
                      placeholder="CEP*"
                      name="cep"
                      onFocus={() => setValid(false)}
                    />
                  </label>
                  <Botao
                    disabled={loading}
                    type="submit"
                    className="botao-proximo"
                    onClick={() => {
                      setValid(true);
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
    </>
  );
};

export default Registrar;
