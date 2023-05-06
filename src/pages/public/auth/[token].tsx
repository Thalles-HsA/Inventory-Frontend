import { useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Image from 'next/image';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import Botao from '@/components/Botao';
import { passwordRecovery, resetMessage, validateToken } from '@/slices/userSlice';
import { RootState } from '@/store';
import Message from '@/components/Message';
import styles from '@/styles/auth.module.scss';
import initialValues from '@/utils/initialValues';
import validacaoUsuario from '@/utils/validacaoCadastro';

interface TokenValidationPageProps {
  token: string;
  email: string;
}

const TokenValidationPage = ({ token, email }: TokenValidationPageProps) => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const { loading, success, error, message } = useSelector((state: RootState) => state.usuario);
  const router = useRouter();

  useEffect(() => {
    dispatch(validateToken(token));
  }, [token, dispatch]);

  const onSubmit = async (values: any) => {
    try {
      dispatch(passwordRecovery({ ...values, email }));
      setTimeout(() => {
        dispatch(resetMessage());
        if (success) {
          router.push('/login');
        }
      }, 3000);
    } catch (errors) {
      throw new Error('Houve um erro ao realizar o Login');
    }
  };

  if (success) {
    return (
      <>
        <Head>
          <title>Esqueci minha Senha | Projeto Inventory</title>
        </Head>
        <div className={styles['container-auth']}>
          <div className={styles['auth-descricao']}>
            <div>
              <h2>Recuperar sua</h2>
              <h2>senha</h2>
            </div>
            <div>
              <p>Digite sua nova senha ao lado</p>
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
            initialValues={initialValues.passwordRecovery}
            validationSchema={validacaoUsuario.passwordRecovery}
            onSubmit={onSubmit}
          >
            {({ errors }) => (
              <Form>
                <label htmlFor="novaSenha">
                  {errors.novaSenha && <ErrorMessage name="novaSenha" component="span" className={styles['message-error']} />}
                  <Field type="password" placeholder="Nova senha" name="novaSenha" />
                </label>
                <label htmlFor="confirmarSenha">
                  {errors.confirmarSenha && <ErrorMessage name="confirmarSenha" component="span" className={styles['message-error']} />}
                  <Field type="password" placeholder="Confirmar Senha" name="confirmarSenha" />
                </label>

                <Botao disabled={loading} type="submit" className="botao-proximo">
                  {loading ? 'Aguarde...' : 'Atualizar Senha'}
                </Botao>

                {Array.isArray(error) && <Message msg={error} type="error" />}
                {Array.isArray(message) && <Message msg={message} type="success" />}

              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  }

  return <p>Invalid token!</p>;
};

export const getServerSideProps = async (context: any) => {
  const { token } = context.query;
  const decodedToken: any = jwt.decode(token);
  const { email } = decodedToken;
  return {
    props: { token, email }
  };
};

export default TokenValidationPage;
