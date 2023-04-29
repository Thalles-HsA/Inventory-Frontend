import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '@/slices/userSlice';
import { RootState } from '@/store';
import formatCnpjCpf from '@/utils/formatCpfAndCnpj';
import { mudaTipoDeCliente } from '@/slices/typeSlice';

const FormularioCPF = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  const { tipoDeClienteSelecionado } = useSelector((state: RootState) => state.tipo);
  const { usuario } = useSelector((state: RootState) => state.usuario);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  useEffect(() => {
    setNome(usuario.nome ? usuario.nome : '');
    setCpf(usuario.cpf ? usuario.cpf : '');
  }, [usuario, tipoDeClienteSelecionado]);

  function handleSelectTypeUser (event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(mudaTipoDeCliente(event.target.value));
  }

  return (
    <>
      <label htmlFor="nome">
        <span>Nome</span>
        <input type="text" value={nome || usuario.razaoSocial} id="nome" />
      </label>
      <label htmlFor="nomeFantasia">
        <span>Nome Fantasia</span>
        <input type="text" id="nomeFantasia" name="nomeFantasia" />
      </label>
      <label htmlFor="tipo">
        <span>Tipo</span>
        <select id="tipo" value={tipoDeClienteSelecionado} onChange={handleSelectTypeUser}>
          <option value="cpf">CPF</option>
          <option value="cnpj">CNPJ</option>
        </select>
      </label>
      <label htmlFor="cpf">
        <span>CPF</span>
        <input type="text" value={formatCnpjCpf(cpf ?? usuario.cnpj ?? '', tipoDeClienteSelecionado)} id="cpf" />
      </label>
      <label htmlFor="atividadePrincipal">
        <span>Atividade Principal</span>
        <select id="atividadePrincipal">
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
