/* eslint-disable jsx-a11y/label-has-associated-control */
import { Form, Field, ErrorMessage, Formik } from 'formik';

import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import styles from '@/styles/auth.module.scss';

import { UsuarioLogin } from '@/types/Interface';
import { RootState } from '../../../store';
import { loginUser, reset } from '@/slices/authSlice';
import validacaoUsuario from '@/controllers/validacaoCadastro';
import initialValues from '@/controllers/initialValues';

import Botao from '@/components/Botao';
import Message from '@/components/Message';
import PublicLayout from '../PublicLayout';

const Login = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const onSubmit = async (values: UsuarioLogin) => {
    try {
      await dispatch(loginUser(values));
      if (!error) {
        router.push('/dashboard');
      }
    } catch {
      throw new Error('Houve um erro ao realizar o Login');
    }
  };

  useEffect(() => {
    dispatch(reset());
    emailInputRef.current?.focus();
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Login | Projeto Inventory</title>
      </Head>
      <PublicLayout>
        <div className={styles['container-auth']}>
          <div className={styles['auth-descricao']}>
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
            className={styles['image-login']}
            width={500}
            height={500}
            priority
          />
          <Formik
            initialValues={initialValues.login}
            validationSchema={validacaoUsuario.login}
            onSubmit={onSubmit}
          >
            {({ errors }) => (
              <Form>
                <label>
                  {errors.email && <ErrorMessage name="email" component="span" className={styles['message-error']} />}
                  <Field type="email" placeholder="E-mail" name="email" innerRef={emailInputRef} />
                </label>

                <label>
                  {errors.senha && <ErrorMessage name="senha" component="span" className={styles['message-error']} />}
                  <Field type="password" placeholder="Senha" name="senha" />
                </label>

                <Link href="/esqueceuSenha">
                  <span className={styles['esqueceu-senha']}>Esqueceu sua senha?</span>
                </Link>

                <Botao disabled={loading} type="submit" className="botao-proximo">
                  {loading ? 'Aguarde...' : 'Login'}
                </Botao>

                {Array.isArray(error) && <Message msg={error} type="error" />}

                <span className={styles['continue-redes']}>Ou continue com</span>

                <div className={styles['icons-login']}>
                  <FcGoogle style={{ padding: '0 24px' }} />
                  <FaFacebookF color="#1778f2" style={{ padding: '0 24px' }} />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </PublicLayout>
    </>
  );
};

export default Login;
