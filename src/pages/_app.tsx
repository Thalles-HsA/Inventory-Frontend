/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/_styles.scss';
import '@/styles/_animacoes.scss';

import { Provider } from 'react-redux';

import Head from 'next/head';
import type { AppProps } from 'next/app';

import { store } from '../store';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=1200" />
      <meta name="description" content="O Projeto Inventory é uma aplicação web completa para gerenciamento de estoque e controle de inventário. Com tecnologias como NodeJS, React, Next.js, MongoDB e TypeScript, a plataforma oferece uma interface amigável para cadastro, consulta e atualização de produtos e seus respectivos status de disponibilidade. Aproveite ainda a segurança oferecida pelos pacotes Bcrypt e JWT no backend e mantenha o código padronizado com a ajuda do ESLint. Conheça o Projeto Inventory e organize seu estoque de maneira eficiente e prática" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </Provider>
);

export default App;
