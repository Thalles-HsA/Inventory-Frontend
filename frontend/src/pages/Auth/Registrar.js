import "./Auth.css"
import React, { useState, useEffect } from 'react'

// Imagem e pré-carregamento
import imgRegistro from "./paginaregistro.svg"
import imgPreLoad from './paginaregistro.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

import Message from "../../components/Message/Message";
import Botao from '../../components/Botao/Botao'

import { useSelector, useDispatch } from "react-redux";

// Redux
import { register, reset, } from "../../slices/authSlice";
import { Link } from "react-router-dom";

const Registrar = () => {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confirmarSenha, setConfirmarSenha] = useState();
  const [tipo, setTipo] = useState("cpf");
  const [cpf, setCpf] = useState();
  const [cnpj, setCnpj] = useState();
  const [nome, setNome] = useState();
  const [razaoSocial, setRazaoSocial] = useState();
  const [logradouro, setLogradouro] = useState();
  const [numero, setNumero] = useState();
  const [complemento, setComplemento] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [cep, setCep] = useState();

  const [etapa, setEtapa] = useState(1)
  const [voltando, setVoltando] = useState(false)

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleProximo = () => {
    const element = document.querySelector(`#etapa${etapa}`);

    if (element.classList.value === "animacao-entrar") {
      element.classList.remove("animacao-entrar")
      element.classList.add("animacao-sair");
    } else {
      element.classList.remove("animacao-voltar-entrar")
      element.classList.add("animacao-sair");
    }

    setTimeout(() => {
      setEtapa(etapa + 1);
      setVoltando(false)
    }, 600);


  }

  const handleAnterior = () => {

    const element = document.querySelector(`#etapa${etapa}`);

    if (element.classList.value === "animacao-entrar") {
      element.classList.remove("animacao-entrar")
      element.classList.add("animacao-voltar-sair");
    } else {
      element.classList.remove("animacao-voltar-entrar")
      element.classList.add("animacao-voltar-sair");
    }


    setTimeout(() => {
      setEtapa(etapa - 1);
      setVoltando(true)
    }, 600)

  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const usuario = {
      email,
      senha,
      confirmarSenha,
      tipo,
      ...(tipo === "cpf"
        ? { nome, cpf }
        : { razaoSocial, cnpj }),
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      cep
    };

    console.log(usuario);
    console.log(error);

    dispatch(register(usuario))
  }

  // Limpando todos os estados
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (

    <>
      <div className="auth-descricao animacao-voltar-entrar">
        <div >
          <h2>Cadastre-se agora no</h2>
          <h2 className="inventory">Inventory</h2>
        </div>
        <div>
          <p>Já tem uma conta?</p>
          <p>Faça seu <Link to="/login">Login aqui</Link></p>
        </div>
      </div>

      <LazyLoadImage
        src={imgRegistro}
        alt="Caixas, carrinhos e prancheta"
        PlaceholderSrc={imgPreLoad}
        className="imagem-auth"
      />

      <form onSubmit={handleSubmit} className="form-cadastro">

        <div
          id="etapa1"
          className={etapa === 1 && !voltando ? "animacao-entrar" : etapa === 1 && voltando ? "animacao-voltar-entrar" : "animacao-sair"}

          style={{ display: etapa === 1 ? "block" : "none" }}
        >
          <p>Primeiro coloque seu e-mail e senha</p>
          <input
            type="email"
            placeholder='E-mail'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder='Senha'
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />
          <input
            type="password"
            placeholder='Confirme sua senha'
            onChange={(e) => setConfirmarSenha(e.target.value)}
            value={confirmarSenha}
          />

          <div className="botao" onClick={handleProximo}>
            Proximo
          </div>

        </div>

        <div
          id="etapa2"
          // className={etapa === 2 ? 'animacao-entrar' : 'animacao-sair'}
          className={etapa === 2 && !voltando ? "animacao-entrar" : etapa === 2 && voltando ? "animacao-voltar-entrar" : "animacao-sair"}

          style={{ display: etapa === 2 ? "block" : "none" }}
        >
          <p>Agora que tipo de cliente você é</p>
          <label>
            <input
              type="radio"
              name="tipo"
              value="cpf"
              onChange={(event) => setTipo(event.target.value)}
            />
            <span>CPF</span>
          </label>
          <label>
            <input
              type="radio"
              name="tipo"
              value="cnpj"
              onChange={(event) => setTipo(event.target.value)}
            />
            <span>CNPJ</span>
          </label>

          {
            tipo === "cnpj"
              ? (
                <>
                  <input
                    type="text"
                    placeholder='**.***.***/****-**'
                    onChange={(e) => setCnpj(e.target.value)}
                    value={cnpj}
                  />
                  <input
                    type="text"
                    placeholder='Razão Social'
                    onChange={(e) => setRazaoSocial(e.target.value)}
                    value={razaoSocial}
                  />
                </>
              )
              :
              (
                <>
                  <input
                    type="text"
                    placeholder='***.***.***-**'
                    onChange={(e) => setCpf(e.target.value)}
                    value={cpf}
                  />
                  <input
                    type="text"
                    placeholder='Nome'
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                  />
                </>
              )

          }
          <div className="botao" onClick={handleProximo}>
            Proximo
          </div>
          <div className="botao-voltar" onClick={handleAnterior}>
            Voltar
          </div>
        </div>

        <div
          id="etapa3"
          // className={etapa === 3 ? 'animacao-entrar' : 'animacao-sair'}
          className={etapa === 3 && !voltando ? "animacao-entrar" : etapa === 3 && voltando ? "animacao-voltar-sair" : "animacao-sair"}

          style={{ display: etapa === 3 ? "block" : "none" }}
        >
          <p>Por último seu endereço.</p>
          <input
            type="text"
            placeholder='Logradouro'
            onChange={(e) => setLogradouro(e.target.value)}
            value={logradouro}
          />
          <input
            className="input-menor"
            type="text"
            placeholder='Número'
            onChange={(e) => setNumero(e.target.value)}
            value={numero}
          />
          <input
            className="input-medio"
            type="text"
            placeholder='Complemento'
            onChange={(e) => setComplemento(e.target.value)}
            value={complemento}
          />
          <input
            type="text"
            placeholder='Bairro'
            onChange={(e) => setBairro(e.target.value)}
            value={bairro}
          />
          <input
            type="text"
            placeholder='Cidade'
            onChange={(e) => setCidade(e.target.value)}
            value={cidade}
          />
          <input
            className="input-menor"
            type="text"
            placeholder='UF'
            onChange={(e) => setEstado(e.target.value)}
            value={estado}
          />
          <input
            className="input-medio"
            type="text"
            placeholder='CEP'
            onChange={(e) => setCep(e.target.value)}
            value={cep}
          />
          {!loading && (
            <>
              <Botao>Cadastrar</Botao>
              <div className="botao-voltar" onClick={handleAnterior}>
                Voltar
              </div>
            </>
          )}
          {loading && <Botao>...Aguarde</Botao>}
          {error && <Message msg={[error]} type="error" />}

        </div>

      </form>

    </>
  )
}

export default Registrar