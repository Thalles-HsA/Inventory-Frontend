/* eslint-disable react-hooks/rules-of-hooks */
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import validacaoUsuario from '@/utils/validacaoCadastro';
import initialValues from '@/utils/initialValues';
import Botao from '@/components/Botao';
import PublicLayout from '../PublicLayout';
import styles from '@/styles/auth.module.scss';
import { RootState } from '@/store';
import Message from '@/components/Message';
import { requestPasswordRecovery, resetMessage } from '@/slices/userSlice';

const esqueciMinhaSenha = () => {
  const { loading, error, message } = useSelector((state: RootState) => state.usuario);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const onSubmit = async (values: any) => {
    try {
      dispatch(requestPasswordRecovery(values));
      setTimeout(() => {
        dispatch(resetMessage());
      }, 3000);
    } catch {
      throw new Error('Houve um erro ao realizar o Login');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 3000);
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Esqueci minha Senha | Projeto Inventory</title>
      </Head>
      <PublicLayout>
        <div className={styles['container-auth']}>
          <div className={styles['auth-descricao']}>
            <div>
              <h2>Esqueci minha</h2>
              <h2>senha</h2>
            </div>
            <div>
              <p>Se você ainda não tem uma conta</p>
              <p>faça seu cadastro abaixo</p>
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
            initialValues={initialValues.requestPasswordRecovery}
            validationSchema={validacaoUsuario.requestPasswordRecovery}
            onSubmit={onSubmit}
          >
            {({ errors }) => (
              <Form>
                <label htmlFor="email">
                  {errors.email && <ErrorMessage name="email" component="span" className={styles['message-error']} />}
                  <Field type="email" placeholder="E-mail" name="email" />
                </label>

                <Botao disabled={loading} type="submit" className="botao-proximo">
                  {loading ? 'Aguarde...' : 'Enviar e-mail'}
                </Botao>

                {Array.isArray(error) && <Message msg={error} type="error" />}
                {Array.isArray(message) && <Message msg={message} type="success" />}

              </Form>
            )}
          </Formik>
        </div>
      </PublicLayout>
    </>
  );
};

export default esqueciMinhaSenha;
