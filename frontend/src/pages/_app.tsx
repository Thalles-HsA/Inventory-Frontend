// Styles
import '@/styles/_styles.scss'
import '@/styles/_animacoes.scss'

// Redux
import { Provider } from 'react-redux';
import { store } from '../store';

// Next
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';

// Components
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer';

// Hooks 
// import { useAuth } from "../hooks/useAuth"
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  // const { auth, loading } = useAuth();

  // useEffect(() => {
  //   const isProtectedRoute = router.pathname === '/private';

  //   // Verifica se a rota é protegida e se o usuário não está autenticado
  //   if (isProtectedRoute && !auth) {
  //     router.push('/login');
  //   }
  // }, [router]);


  // if (loading) {
  //   return <p>Carregando...</p>;
  // }

  return (

    <Provider store={store}>

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )

}
