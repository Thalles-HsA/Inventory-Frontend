import React from 'react'
import Head from 'next/head'

import { SiNextdotjs, SiTypescript, SiExpress, SiMongodb } from 'react-icons/si'
import { DiSass, DiNodejsSmall } from "react-icons/di"

import styles from '../../../styles/sobre.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Botao from '@/components/Botao/Botao'

const Blog = () => {
  return (
    <>
      <Head>
        <title>Projeto Inventory | Blog</title>
      </Head>

      <div className={styles["container-2"]}>
        <div className={styles["descricao"]}>
          <div>
            <h2>O que é o Inventory</h2>
          </div>
          <div>
            <p>
              O Inventory é um projeto de ERP online com foco na qualidade de estoque e facilidade de implementação, diferenciando-se de outros sistemas tradicionais do mercado. Como desenvolvedor com experiência na área, estou empenhado em utilizar todo meu conhecimento para construir um produto de excelência.
            </p>
            <p>
              Este projeto tem como objetivo fornecer uma solução completa para os vendedores gerenciarem suas operações de vendas.
            </p>
            <Botao className="botao-cadastro-login" type="button" >
              <Link href="/contato">Contato</Link>
            </Botao>
            <p>
              Veja abaixo as tecnologias aplicadas e um pouco processo de desenvolvimento.
            </p>
          </div>
        </div>

        <div className={styles["dependencias-utilizadas"]}>
          <Image
            src="/img/carrinhocomcaixas.jpg"
            alt='Carrinho com caixas'
            width={500}
            height={500}
          />

        </div>
      </div>

      <div className={styles["container"]}>
        <div>
          <h2>Tecnologia utilizadas</h2>
        </div>
        <div className={styles["container-cards"]}>
          <div>
            <div className={styles["tecnologias-cards"]}>
              <div>
                <h3>Next.js</h3>
                <SiNextdotjs size="32px" color="#314e52" />
              </div>
              <div>
                <p>
                  Next.js é uma estrutura de desenvolvimento web para construir aplicativos React de servidor e cliente, que combina o React com a funcionalidade de renderização do lado do servidor, roteamento avançado, suporte a API externa e outras ferramentas úteis.
                </p>
              </div>
            </div>

            <div className={styles["tecnologias-cards"]}>
              <div>
                <h3>Sass</h3>
                <DiSass size="32px" color="#314e52" />
              </div>
              <div>
                <p>
                  Sass (Syntactically Awesome Style Sheets) é uma linguagem de folhas de estilo CSS pré-processada que permite escrever estilos de forma mais eficiente e organizada, além de fornecer recursos adicionais que não estão disponíveis no CSS tradicional.
                </p>
              </div>
            </div>

            <div className={styles["tecnologias-cards"]}>
              <div>
                <h3>TypeScript</h3>
                <SiTypescript size="32px" color="#314e52" />
              </div>
              <div>
                <p>
                  TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que é uma extensão da linguagem JavaScript. Ela adiciona recursos como tipagem estática, classes, interfaces, herança, módulos e outros recursos orientados a objetos que não estão presentes no JavaScript padrão.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className={styles["tecnologias-cards"]}>
              <div>
                <h3>NodeJs</h3>
                <DiNodejsSmall size="32px" color="#314e52" />
              </div>
              <div>
                <p>
                  <p>Node.js é uma plataforma de desenvolvimento de software de código aberto baseada no motor JavaScript V8 do Google Chrome. Ela permite a construção de aplicativos de rede escaláveis e de alta performance, usando JavaScript tanto no lado do servidor quanto no cliente.</p>
                </p>
              </div>
            </div>

            <div className={styles["tecnologias-cards"]}>
              <div>
                <h3>Express</h3>
                <SiExpress size="32px" color="#314e52" />
              </div>
              <div>
                <p>Express é um framework de desenvolvimento web para Node.js que simplifica a criação de aplicativos web e APIs RESTful. Ele é minimalista e oferece uma ampla variedade de recursos que ajudam a criar aplicativos de forma rápida e eficiente.</p>
              </div>
            </div>

            <div className={styles["tecnologias-cards"]}>
              <div>
                <h3>MongoDB</h3>
                <SiMongodb size="32px" color="#314e52" />
              </div>
              <div>
                <p>
                  Next.js é uma estrutura de desenvolvimento web para construir aplicativos React de servidor e cliente, que combina o React com a funcionalidade de renderização do lado do servidor, roteamento avançado, suporte a API externa e outras ferramentas úteis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["container-2"]}>
        <div className={styles["descricao"]}>
          <div>
            <h2>Descrição do Frontend</h2>
          </div>
          <div>
            <p>
              O Frontend foi construído usando a tecnologia NextJS, que é uma biblioteca baseada em React para desenvolvimento de aplicações web. O uso do NextJS permite a construção de aplicações de página única (SPA) e servidor-side rendering (SSR) de forma fácil e eficiente.
            </p>
            <p>
              O gerenciamento de estados no frontend foi feito com o Redux, que é uma biblioteca para gerenciamento de estados global na aplicação. Isso permite que os dados da aplicação possam ser compartilhados entre componentes de forma eficiente e organizada.
            </p>
            <p>
              Para a criação e validação de formulários, foram utilizadas as bibliotecas Formik e Yup. O Formik é uma biblioteca que ajuda a gerenciar o estado do formulário e simplifica o processo de manipulação dos dados de entrada. O Yup é uma biblioteca de validação de schema que permite definir as regras de validação de formulário de forma simples e clara.
            </p>
            <p>
              Para a comunicação com a API, foi utilizado o Fetch, que é uma API nativa do JavaScript para fazer requisições HTTP. O Fetch permite enviar e receber dados de forma assíncrona e é compatível com a maioria dos navegadores modernos.
            </p>
            <p>
              A estilização do aplicativo foi feita usando o SASS, que é uma extensão do CSS que permite escrever código mais organizado e eficiente. O SASS é compatível com o CSS e permite a criação de estilos reutilizáveis e modulares.
            </p>
            <p>
              O código do frontend foi escrito em TypeScript, que é um superset do JavaScript que adiciona recursos como tipagem estática, interfaces e outros recursos avançados de programação orientada a objetos. O TypeScript ajuda a garantir a integridade do código, evita erros de digitação e melhora a manutenibilidade e escalabilidade do projeto.
            </p>
          </div>
        </div>

        <div className={styles["dependencias-utilizadas"]}>
          <h3>Dependências utilizada</h3>
          <ul>
            <li>react-redux - (versão 8.0.5)</li>
            <li>@reduxjs/toolkit - (versão 1.9.3)</li>
            <li>react-icons - (versão 4.8.0)</li>
            <li>formik - (versão 2.2.9)</li>
            <li>yup - (versão 1.0.2)</li>
            <li>cpf-cnpj-validator - (versão 1.0.3)</li>
            <li>@types/node - (versão 18.15.11)</li>
            <li>@types/react - (versão 18.0.35)</li>
            <li>@types/react-dom - (versão 18.0.11)</li>
            <li>eslint - (versão 8.38.0)</li>
            <li>eslint-config-next - (versão 13.3.0)</li>
            <li>next - (versão 13.3.0)</li>
            <li>react - (versão 18.2.0)</li>
            <li>react-dom - (versão 18.2.0)</li>
            <li>sass - (versão 1.61.0)</li>
            <li>typescript - (versão 5.0.4)</li>
          </ul>

          <Botao className="botao-cadastro-login" type="button" >
            <Link href="https://github.com/Thalles-HsA/Inventory-Frontend" target="_blank">GitHub - Frontend</Link>
          </Botao>
        </div>
      </div>

      <div className={styles["container-2"]}>

        <div className={styles["dependencias-utilizadas"]}>
          <h3>Dependências utilizada</h3>
          <ul>
            <li>bcrypt - (versão 5.1.0)</li>
            <li>bcryptjs - (versão 2.4.3)</li>
            <li>cors - (versão 2.8.5)</li>
            <li>cpf-cnpj-validator - (versão 1.0.3)</li>
            <li>dotenv - (versão 16.0.3)</li>
            <li>express - (versão 4.18.2)</li>
            <li>express-validator - (versão 6.15.0)</li>
            <li>jsonwebtoken - (versão 9.0.0)</li>
            <li>mongoose - (versão 7.0.3)</li>
            <li>multer - (versão 1.4.5-lts.1)</li>
            <li>typescript - (versão 4.4.4)</li>
            <li>nodemon - (versão 2.0.22)</li>
          </ul>

          <Botao className="botao-cadastro-login" type="button" >
            <Link href="https://github.com/Thalles-HsA/Inventory-Backend" target="_blank">GitHub - Backend</Link>
          </Botao>
        </div>

        <div className={styles["descricao"]}>
          <div>
            <h2>Descrição do Backend</h2>
          </div>
          <div>
            <p>
              O backend do Inventory foi construído utilizando o Node.js, que é uma plataforma de desenvolvimento de aplicações web baseada em JavaScript. Para a criação das rotas e middleware da aplicação, foi utilizado o framework Express, que é uma das escolhas mais populares para a construção de aplicações web em Node.js.
            </p>
            <p>
              Para garantir a qualidade e segurança da aplicação, o código do backend foi escrito em TypeScript. O TypeScript é uma linguagem que adiciona recursos como tipagem estática e interfaces ao JavaScript, ajudando a prevenir erros comuns de digitação e a aumentar a escalabilidade do projeto.
            </p>
            <p>
              A validação de formulário no backend foi realizada utilizando o express-validator, que é uma biblioteca de validação para o Express. Com ela, é possível definir regras de validação para os campos do formulário e garantir que as requisições recebidas pelo servidor estejam dentro dos padrões esperados. Isso adiciona uma camada extra de segurança para a aplicação, ajudando a prevenir ataques de injeção de SQL, por exemplo.
            </p>
            <p>
              O banco de dados escolhido para a aplicação foi o MongoDB, que é um banco de dados NoSQL orientado a documentos. O MongoDB é uma escolha popular para aplicações web, pois é fácil de usar, escalável e oferece grande flexibilidade no armazenamento e recuperação de dados.
            </p>
            <p>
              Em resumo, o backend do Inventory foi construído com uma abordagem moderna e segura, utilizando as tecnologias Node.js, Express, TypeScript, express-validator e MongoDB. Essas tecnologias ajudaram a garantir a qualidade e escalabilidade da aplicação, além de oferecerem uma experiência de desenvolvimento mais produtiva e agradável.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog