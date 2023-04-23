// Styles
import '@/styles/_styles.scss'
import '@/styles/_animacoes.scss'

// Redux
import { Provider } from 'react-redux';
import { store } from '../store';

// Next
import Head from 'next/head'
import type { AppProps } from 'next/app'

// Components
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer';


export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="viewport" content="width=1200"></meta>
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )

}
