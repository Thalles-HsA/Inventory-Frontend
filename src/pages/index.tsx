/* eslint-disable max-len */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Botao from '@/components/Botao';

import styles from '@/styles/index.module.scss';

const Home = () => (
  <>
    <Head>
      <title>Projeto Inventory</title>
    </Head>
    <div className={styles.container}>
      <div>
        <div>
          <h2>Bem-vindo(a) ao Inventory</h2>
        </div>
        <div>
          <p>
            Conheça um pouco mais sobre esse incrível ERP e mergulhe em sua jornada de desenvolvimento, conhecendo os bastidores do processo de criação e os desafios enfrentados pelo desenvolvedor para entregá-lo aos usuários. Descubra como cada funcionalidade foi meticulosamente pensada e implementada. Venha teste e descobrir o que torna esse ERP tão especial e o que o diferencia de outras soluções do mercado.
          </p>
          <Botao className="botao-cadastro-login" type="button">
            <Link href="/sobre">Ver mais</Link>
          </Botao>
        </div>
      </div>
      <div>
        <Image
          src="/img/homemcomcaixa.jpg"
          alt="homem com caixa 3d"
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  </>
);

export default Home;
