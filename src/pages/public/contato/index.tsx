import React from 'react'
import Link from 'next/link';
import Head from 'next/head'

import styles from '../../../styles/contato.module.scss'

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { MdAlternateEmail } from "react-icons/md"



const Contato = () => {

  return (
    <>
      <Head>
        <title>Projeto Inventory | Contato</title>
      </Head>
      <div className={styles["saiba-sobre"]}>

        <div>
          <h2>Entre em contato</h2>
          <p>Acesse as redes de Thalles Henrique, criador e desenvolvedor do Projeto Inventory</p>
        </div>

        <div>

          <a href="https://www.linkedin.com/in/thalleshsa/" target="_blank"><AiFillLinkedin size="32px" color="#314e52" /> Acessar o Linkedin</a>

          <a href="https://github.com/Thalles-HsA" target="_blank"><AiFillGithub size="32px" color="#314e52" /> Acessar o GitHub</a>

          <a href="mailto:thsa.henrique@gmail.com" target="_blank"><MdAlternateEmail size="32px" color="#314e52" /> Envie um email</a>
        </div>
      </div>
    </>
  );
}

export default Contato;
