import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '@/slices/userSlice';
import { RootState } from '@/store';
import formatCnpjCpf from '@/utils/formatCpfAndCnpj';
import { mudaTipoDeCliente } from '@/slices/typeSlice';

const FormularioCNPJ = () => {
  const [razaoSocial, setRazaoSocial] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [inscricaoEstadual, setInscricaoEstadual] = useState('');
  const [isento, setIsento] = useState(false);
  const [inscricaoMunicipal, setInscricaoMunicipal] = useState('');
  const [cnae, setCnae] = useState('');
  const [atividadePrincipal, setAtividadePrincipal] = useState('');
  const [regimeTributario, setRegimeTributario] = useState('');
  const [tamanhoEmpresa, setTamanhoEmpresa] = useState('');
  const [segmento, setSegmento] = useState('');
  const [faturamentoAnual, setFaturamentoAnual] = useState('');
  const [quantidadeFuncionario, setQuantidadeFuncionario] = useState('');

  const { tipoDeClienteSelecionado } = useSelector((state: RootState) => state.tipo);
  const { usuario } = useSelector((state: RootState) => state.usuario);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  useEffect(() => {
    setRazaoSocial(usuario.razaoSocial ? usuario.razaoSocial : '');
    setCnpj(usuario.cnpj ? usuario.cnpj : '');
    setNomeFantasia(usuario.nomeFantasia ? usuario.nomeFantasia : '');
    setInscricaoEstadual(usuario.inscricaoEstadual ? usuario.inscricaoEstadual : '');
    setIsento(usuario.isento ? usuario.isento : false);
    setInscricaoMunicipal(usuario.inscricaoMunicipal ? usuario.inscricaoMunicipal : '');
    setCnae(usuario.cnae ? usuario.cnae : '');
    setAtividadePrincipal(usuario.atividadePrincipal ? usuario.atividadePrincipal : '');
    setRegimeTributario(usuario.regimeTributario ? usuario.regimeTributario : '');
    setTamanhoEmpresa(usuario.tamanhoEmpresa ? usuario.tamanhoEmpresa : '');
    setSegmento(usuario.segmento ? usuario.segmento : '');
    setFaturamentoAnual(usuario.faturamentoAnual ? usuario.faturamentoAnual : '');
    setQuantidadeFuncionario(usuario.quantidadeFuncionario ? usuario.quantidadeFuncionario : '');
  }, [usuario, tipoDeClienteSelecionado]);

  function handleSelectTypeUser (event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(mudaTipoDeCliente(event.target.value));
  }

  return (
    <>
      <label htmlFor="razaoSocial">
        <span>Razão Social</span>
        <input type="text" value={razaoSocial} id="razaoSocial" />
      </label>
      <label htmlFor="nomeFantasia">
        <span>Nome Fantasia</span>
        <input type="text" value={nomeFantasia} id="nomeFantasia" />
      </label>
      <label htmlFor="tipo">
        <span>Tipo</span>
        <select id="tipo" value={tipoDeClienteSelecionado} onChange={handleSelectTypeUser}>
          <option value="cnpj">CNPJ</option>
          <option value="cpf">CPF</option>
        </select>
      </label>
      <label htmlFor="cnpj">
        <span>CNPJ</span>
        <input type="text" value={formatCnpjCpf(cnpj ?? usuario.cpf ?? '', tipoDeClienteSelecionado)} id="cnpj" />
      </label>
      <label htmlFor="inscricaoEstadual">
        <span>Inscrição estadual</span>
        <input type="text" id="inscricaoEstadual" value={inscricaoEstadual} />
      </label>
      <label htmlFor="isento">
        <span>Isento</span>
        <input type="checkbox" id="isento" />
      </label>
      <label htmlFor="inscricaoMunicipal">
        <span>Inscrição Municipal</span>
        <input type="text" id="inscricaoMunicipal" value={inscricaoMunicipal} />
      </label>
      <label htmlFor="cnae">
        <span>CNAE</span>
        <input type="text" id="cnae" value={cnae} />
      </label>
      <label htmlFor="atividadePrincipal">
        <span>Atividade Principal</span>
        <select id="atividadePrincipal" value={atividadePrincipal}>
          <option value="alimentosBebidas">Alimentos e Bebidas</option>
          <option value="modaAcessorios">Moda e acessórios</option>
          <option value="artesanato">Artesanato</option>
          <option value="artigosbebe">Artigospara Bebê</option>
          <option value="artigosEsportivos">Artigos Esportivos</option>
          <option value="outros">Outros</option>
        </select>
      </label>
      <label htmlFor="regimeTributario">
        <span>Regime Tributário</span>
        <select id="regimeTributario" value={regimeTributario}>
          <option value="simplesNacional">Simples Nacional</option>
          <option value="simplesNacionalExcesso">Simples Nacional - excesso de sublimite de receita bruta</option>
          <option value="regimeNormal">Regime Normal</option>
        </select>
      </label>
      <label htmlFor="tamanhoEmpresa">
        <span>Tamanho da Empresa</span>
        <select id="tamanhoEmpresa" value={tamanhoEmpresa}>
          <option value="mei">MEI</option>
          <option value="micro">Micro</option>
          <option value="pequena">Pequena</option>
          <option value="media">Média</option>
          <option value="grande">Grande</option>
        </select>
      </label>
      <label htmlFor="segmento">
        <span>Segmento</span>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex' }}>
            <input type="checkbox" />
            <span>Comércio</span>
          </div>
          <div style={{ display: 'flex' }}>
            <input type="checkbox" />
            <span>E-commerce</span>
          </div>
          <div style={{ display: 'flex' }}>
            <input type="checkbox" />
            <span>Indústria</span>
          </div>
          <div style={{ display: 'flex' }}>
            <input type="checkbox" />
            <span>Serviços</span>
          </div>
        </div>
      </label>
      <label htmlFor="faturamentoAnual">
        <span>Faturamento do último ano</span>
        <select id="faturamentoAnual" value={faturamentoAnual}>
          <option value="60000">Até R$ 60.000,00</option>
          <option value="360000">De R$ 60.000,00 até R$ 360.000,00</option>
          <option value="360000">Maior que R$ 360.000,00</option>
        </select>
      </label>
      <label htmlFor="quantidadeFuncionario">
        <span>Quantidade de funcionários</span>
        <select id="quantidadeFuncionario" value={quantidadeFuncionario}>
          <option value="ate5">Até 5 funcionários</option>
          <option value="ate10">De 5 a 10 funcionários</option>
          <option value="mais10">Mais de 10 funcionários</option>
        </select>
      </label>
    </>
  );
};

export default FormularioCNPJ;
