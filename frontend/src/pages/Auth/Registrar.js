import "./Registrar.css"
import React, { useState, useEffect } from 'react'

import Message from "../../components/Message/Message";
import Botao from '../../components/Botao/Botao'

import { useSelector, useDispatch } from "react-redux";

// Redux
import { register, reset, } from "../../slices/authSlice";

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

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleProximo = (event) => {
    event.preventDefault()
    setEtapa(etapa + 1)
  }

  const handleAnterior = (event) => {
    event.preventDefault()
    setEtapa(etapa - 1)
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

  // Clean all auth states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (

    <div className="registrar-container">
      <div>
        <div>
          <h2>Cadastre-se agora no</h2>
          <h2>Inventory</h2>
        </div>
        <div>
          <p>Já tem uma conta?</p>
          <p>Faça seu <span>Login aqui</span></p>
        </div>
      </div>

      <div>
        <img src="/assets/img/carrinhoscomcaixas.svg" alt="" />
        <img src="/assets/img/prancheta.svg" alt="" />
        <img src="/assets/img/caixaslaranjas.svg" alt="" />
      </div>

      <form onSubmit={handleSubmit}>

        <div style={{ display: etapa === 1 ? "block" : "none" }}>
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

        <div style={{ display: etapa === 2 ? "block" : "none" }}>
          <p><span onClick={handleAnterior}>Voltar</span>Agora que tipo de cliente você é</p>
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
        </div>

        <div style={{ display: etapa === 3 ? "block" : "none" }}>
          <p><span onClick={handleAnterior}>Voltar</span>Por último seu endereço.</p>
          <input
            type="text"
            placeholder='Logradouro'
            onChange={(e) => setLogradouro(e.target.value)}
            value={logradouro}
          />
          <input
            type="text"
            placeholder='Número'
            onChange={(e) => setNumero(e.target.value)}
            value={numero}
          />
          <input
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
            type="text"
            placeholder='UF'
            onChange={(e) => setEstado(e.target.value)}
            value={estado}
          />
          <input
            type="text"
            placeholder='CEP'
            onChange={(e) => setCep(e.target.value)}
            value={cep}
          />
          {!loading && <Botao>Cadastrar</Botao>}
          {loading && <Botao>...Aguarde</Botao>}
          {error && <Message msg={[error]} type="error" />}

        </div>

      </form>

    </div>
  )
}

export default Registrar