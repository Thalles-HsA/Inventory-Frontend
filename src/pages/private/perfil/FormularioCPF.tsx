import { ChangeEvent } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import formatCnpjCpf from '@/utils/formatCpfAndCnpj';
import { updateUserFields } from '@/slices/updateUser';

const FormularioCPF = () => {
  const {
    tipo,
    nome,
    cpf,
    nomeFantasia,
    atividadePrincipal
  } = useSelector((state: RootState) => state.update);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const handleInputChange = (
    event:
      ChangeEvent<HTMLInputElement> |
      ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    dispatch(updateUserFields({ [name]: value }));
  };

  return (
    <>
      <label htmlFor="nome">
        <span>Nome</span>
        <input
          type="text"
          name="nome"
          value={nome}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="nomeFantasia">
        <span>Nome Fantasia</span>
        <input
          type="text"
          name="nomeFantasia"
          value={nomeFantasia}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="tipo">
        <span>Tipo</span>
        <select
          name="tipo"
          value={tipo}
          onChange={handleInputChange}
        >
          <option value="cpf">CPF</option>
          <option value="cnpj">CNPJ</option>
        </select>
      </label>
      <label htmlFor="cpf">
        <span>CPF</span>
        <input
          type="text"
          name="cpf"
          value={formatCnpjCpf(cpf ?? '', tipo)}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="atividadePrincipal">
        <span>Atividade Principal</span>
        <select
          name="atividadePrincipal"
          value={atividadePrincipal}
          onChange={handleInputChange}
        >
          <option value={undefined}>Selecione uma opção</option>
          <option value="alimentosBebidas">Alimentos e Bebidas</option>
          <option value="modaAcessorios">Moda e acessórios</option>
          <option value="artesanato">Artesanato</option>
          <option value="artigosbebe">Artigospara Bebê</option>
          <option value="artigosEsportivos">Artigos Esportivos</option>
          <option value="outros">Outros</option>
        </select>
      </label>
    </>
  );
};

export default FormularioCPF;
