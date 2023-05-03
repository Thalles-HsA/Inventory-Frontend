import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserFields, addSegment, removeSegment } from '@/slices/updateUser';
import { RootState } from '@/store';
import formatCnpjCpf from '@/utils/formatCpfAndCnpj';

const FormularioCNPJ = () => {
  const {
    tipo,
    razaoSocial,
    cnpj,
    nomeFantasia,
    inscricaoEstadual,
    isento,
    inscricaoMunicipal,
    cnae,
    atividadePrincipal,
    regimeTributario,
    tamanhoEmpresa,
    segmento,
    faturamentoAnual,
    quantidadeFuncionario
  } = useSelector((state: RootState) => state.update);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const handleInputChange = (
    event:
      React.ChangeEvent<HTMLInputElement> |
      React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value, checked } = event.target as HTMLInputElement;
    dispatch(updateUserFields({ [name]: value, isento: checked }));
  };

  const handleCheckedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    if (checked) {
      dispatch(addSegment(value));
    } else {
      dispatch(removeSegment(value));
    }
  };

  return (
    <>
      <p>
        {razaoSocial}
      </p>
      <label htmlFor="razaoSocial">
        <span>Razão Social</span>
        <input
          type="text"
          value={razaoSocial}
          onChange={handleInputChange}
          name="razaoSocial"
        />
      </label>
      <label htmlFor="nomeFantasia">
        <span>Nome Fantasia</span>
        <input
          type="text"
          value={nomeFantasia}
          onChange={handleInputChange}
          name="nomeFantasia"
        />
      </label>
      <label htmlFor="tipo">
        <span>Tipo</span>
        <select name="tipo" value={tipo} onChange={handleInputChange}>
          <option value="cnpj">CNPJ</option>
          <option value="cpf">CPF</option>
        </select>
      </label>
      <label htmlFor="cnpj">
        <span>CNPJ</span>
        <input
          type="text"
          value={formatCnpjCpf(cnpj ?? '', tipo)}
          name="cnpj"
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="inscricaoEstadual">
        <span>Inscrição estadual</span>
        {isento
          ? <input type="text" name="inscricaoEstadual" value="ISENTO" disabled />
          : <input type="text" name="inscricaoEstadual" value={inscricaoEstadual} onChange={handleInputChange} />}
      </label>
      <label htmlFor="isento">
        <span>Isento</span>
        <input type="checkbox" name="isento" onChange={handleInputChange} checked={isento} />
      </label>
      <label htmlFor="inscricaoMunicipal">
        <span>Inscrição Municipal</span>
        <input type="text" name="inscricaoMunicipal" value={inscricaoMunicipal} onChange={handleInputChange} />
      </label>
      <label htmlFor="cnae">
        <span>CNAE</span>
        <input type="text" name="cnae" value={cnae} />
      </label>
      <label htmlFor="atividadePrincipal">
        <span>Atividade Principal</span>
        <select name="atividadePrincipal" value={atividadePrincipal} onChange={handleInputChange}>
          <option value="">Selecione uma opção</option>
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
        <select name="regimeTributario" value={regimeTributario} onChange={handleInputChange}>
          <option value="">Selecione uma opção</option>
          <option value="simplesNacional">Simples Nacional</option>
          <option value="simplesNacionalExcesso">Simples Nacional - excesso de sublimite de receita bruta</option>
          <option value="regimeNormal">Regime Normal</option>
        </select>
      </label>
      <label htmlFor="tamanhoEmpresa">
        <span>Tamanho da Empresa</span>
        <select name="tamanhoEmpresa" value={tamanhoEmpresa} onChange={handleInputChange}>
          <option value="">Selecione uma opção</option>
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
            <input type="checkbox" value="comercio" onChange={handleCheckedChange} />
            <span>Comércio</span>
          </div>
          <div style={{ display: 'flex' }}>
            <input type="checkbox" value="ecommerce" onChange={handleCheckedChange} />
            <span>E-commerce</span>
          </div>
          <div style={{ display: 'flex' }}>
            <input type="checkbox" value="industria" onChange={handleCheckedChange} />
            <span>Indústria</span>
          </div>
          <div style={{ display: 'flex' }}>
            <input type="checkbox" value="servicos" onChange={handleCheckedChange} />
            <span>Serviços</span>
          </div>
        </div>
      </label>
      <label htmlFor="faturamentoAnual">
        <span>Faturamento do último ano</span>
        <select name="faturamentoAnual" value={faturamentoAnual} onChange={handleInputChange}>
          <option value="">Selecione uma opção</option>
          <option value="60000">Até R$ 60.000,00</option>
          <option value="360000">De R$ 60.000,00 até R$ 360.000,00</option>
          <option value="360000">Maior que R$ 360.000,00</option>
        </select>
      </label>
      <label htmlFor="quantidadeFuncionario">
        <span>Quantidade de funcionários</span>
        <select name="quantidadeFuncionario" value={quantidadeFuncionario} onChange={handleInputChange}>
          <option value="">Selecione uma opção</option>
          <option value="ate5">Até 5 funcionários</option>
          <option value="ate10">De 5 a 10 funcionários</option>
          <option value="mais10">Mais de 10 funcionários</option>
        </select>
      </label>
    </>
  );
};

export default FormularioCNPJ;
