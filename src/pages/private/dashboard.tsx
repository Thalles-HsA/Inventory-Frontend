import Botao from '@/components/Botao/Botao';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/index.module.scss';

import PrivateLayout from './PrivateLayout';

export default function Dashboard() {

  return (
    <>

      <Head>
        <title>dashboard | Projeto Inventory</title>
      </Head>
      <PrivateLayout>
        <div className={styles["container"]}>
          <div>
            <div>
              <h2>Muito bem você realizou o seu login</h2>
            </div>
            <div>
              <p>Enquanto finalizamos o desenvolvimento, aproveite para conhecer um pouco mais sobre o nosso incrível ERP. </p>
              <p>E se você ainda não conhece o desenvolvedor por trás do nosso ERP, o Thalles Henrique, veja também sobre ele abaixo. </p>
              <Botao className="botao-cadastro-login" type="button" disabled >
                <Link href="/sobre">Veja mais sobre</Link>
              </Botao>
            </div>
          </div>
          <div>
            <Image
              src="/img/homemcomcaixa2.jpg"
              alt="homem com caixa 3d"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </PrivateLayout>
    </>
  )
}

// export const getServerSideProps = async ({req, res}: any) => {

//   try{
//     const token = getCookies('usuario', {req, res})?.token;

//     console.log(token)

//     if (!token || token.trim().length === 0) {
//       return {
//         redirect: {
//           destination: '/login',
//           permanent: false,
//         },
//       };
//     }

//     return {
//       props: {},
//     };
//   } catch (err) {
//     console.error(err);
//     return {
//       props: {}
//     }
//   }
// }