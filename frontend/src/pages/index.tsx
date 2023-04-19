import Botao from '@/components/Botao/Botao'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import homem3d from 'public/img/homemcomcaixa.svg'
import carrinho from 'public/img/carrinhoscomcaixas.svg'
import prancheta from 'public/img/prancheta.svg'




import styles from '../styles/index.module.scss'
import PublicLayout from './public/PublicLayout'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { MdAlternateEmail } from "react-icons/md"

export default function Home() {
  return (
    <>
      <Head>
        <title>Projeto Inventory</title>
      </Head>
      <PublicLayout>

        <div className={styles["container"]}>
          <div >
            <div>
              <h2>Bem-vindo(a) ao Inventory</h2>
            </div>
            <div>
              <p>Conheça um pouco mais esse incrível ERP e seu processo de desenvolvimento</p>
              <Botao className="botao-cadastro-login" type="button" disabled>
                <Link href="/">Em breve ...</Link>
              </Botao>
            </div>
          </div>
          <div>
            <Image
              src={homem3d}
              alt="homem com caixa 3d"
            />
          </div>


          <div className={styles["saiba-sobre"]}>
            <p>Saiba mais sobre Thalles Henrique, o criador e desenvolvedor deste projeto</p>

            <a href="https://www.linkedin.com/in/thalleshsa/" target="_blank"><p>Acessar Linkedin</p><AiFillLinkedin size="32px" color="#314e52" /></a>

            <a href="https://github.com/Thalles-HsA" target="_blank"><AiFillGithub size="32px" color="#314e52" /><p>Acessar GitHub</p></a>

            <a href="mailto:thsa.henrique@gmail.com" target="_blank"><p>Mandar e-mail</p><MdAlternateEmail size="32px" color="#314e52" /></a>
          </div>
        </div>

        <div className={styles["container-2"]}>
          <div>
            <h2>Tecnologia utilizadas</h2>
          </div>
          <div className={styles["saiba-sobre"]}>
            <p>Saiba mais sobre Thalles Henrique, o criador e desenvolvedor deste projeto</p>

            <a href="https://www.linkedin.com/in/thalleshsa/" target="_blank"><p>Acessar Linkedin</p><AiFillLinkedin size="32px" color="#314e52" /></a>

            <a href="https://github.com/Thalles-HsA" target="_blank"><AiFillGithub size="32px" color="#314e52" /><p>Acessar GitHub</p></a>

            <a href="mailto:thsa.henrique@gmail.com" target="_blank"><p>Mandar e-mail</p><MdAlternateEmail size="32px" color="#314e52" /></a>
          </div>
          <div>
            <Image
              src={prancheta}
              alt="homem com caixa 3d"
            />
          </div>
          <div >

            <div>
              <p>Saiba mais sobre Thalles Henrique, o criador e desenvolvedor deste projeto</p>

              <a href="https://www.linkedin.com/in/thalleshsa/" target="_blank"><p>Acessar Linkedin</p><AiFillLinkedin size="32px" color="#314e52" /></a>

              <a href="https://github.com/Thalles-HsA" target="_blank"><AiFillGithub size="32px" color="#314e52" /><p>Acessar GitHub</p></a>

              <a href="mailto:thsa.henrique@gmail.com" target="_blank"><p>Mandar e-mail</p><MdAlternateEmail size="32px" color="#314e52" /></a>
            </div>
            <Botao className="botao-cadastro-login" type="button">
              <Link href="/">Veja mais</Link>
            </Botao>
          </div>
        </div>

        <div className={styles["container-3"]}>
          <div >
            <div>
              <h2>Descrição do Frontend</h2>
            </div>
            <div>
              <p>
                O Inventory é um projeto de ERP online com foco na qualidade de estoque e facilidade de implementação, diferenciando-se de outros sistemas tradicionais do mercado. Como desenvolvedor com experiência na área, estou empenhado em utilizar todo meu conhecimento para construir um produto de excelência.
              </p>
              <p>
                Este projeto tem como objetivo fornecer uma solução completa para os vendedores do Mercado Livre gerenciarem suas operações de vendas. Além do controle de estoque, o ERP também abrange funções como emissão de notas fiscais, gestão de pedidos, análises de desempenho e gerenciamento de clientes.
              </p>
              <Botao className="botao-cadastro-login" type="button">
                <Link href="/">Veja mais</Link>
              </Botao>
            </div>
          </div>
          <div>
            <Image
              src={carrinho}
              alt="homem com caixa 3d"
            />
          </div>
        </div>

        <div className={styles["container-3"]}>
          <div>
            <Image
              src={carrinho}
              alt="homem com caixa 3d"
            />
          </div>
          <div >
            <div>
              <h2>Descrição do Backend</h2>
            </div>
            <div>
              <p>
                O Inventory é um projeto de ERP online com foco na qualidade de estoque e facilidade de implementação, diferenciando-se de outros sistemas tradicionais do mercado. Como desenvolvedor com experiência na área, estou empenhado em utilizar todo meu conhecimento para construir um produto de excelência.
              </p>
              <p>
                Este projeto tem como objetivo fornecer uma solução completa para os vendedores do Mercado Livre gerenciarem suas operações de vendas. Além do controle de estoque, o ERP também abrange funções como emissão de notas fiscais, gestão de pedidos, análises de desempenho e gerenciamento de clientes.
              </p>
              <Botao className="botao-cadastro-login" type="button">
                <Link href="/">Veja mais</Link>
              </Botao>
            </div>
          </div>

        </div>

      </PublicLayout>
    </>
  )
}
