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
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </Provider>
);

export default App;
