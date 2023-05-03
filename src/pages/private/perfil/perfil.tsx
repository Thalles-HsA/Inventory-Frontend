/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { updateUserProfile, userProfile } from '@/slices/userSlice';
import styles from '@/styles/perfil.module.scss';
import FormularioCPF from '@/components/FormularioPerfil/FormularioCPF';
import FormularioCNPJ from '@/components/FormularioPerfil/FormularioCNPJ';
import Botao from '@/components/Botao';
import FormularioEndereco from '@/components/FormularioPerfil/FormularioDeEndereco';
import { UpdateUser } from '@/types/Interface';

const Perfil = () => {
  const {
    tipo,
    nome,
    cpf,
    logradouro,
    numero,
    bairro,
    cidade,
    estado,
    cep,
    complemento,
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

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData: any = {
      tipo,
      nome,
      cpf,
      logradouro,
      numero,
      bairro,
      cidade,
      estado,
      cep,
      complemento,
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
    };

    const formData = new FormData();

    const userFormData: any = Object
      .keys(userData)
      .forEach((key) => formData.append(key, userData[key]));

    formData.append('usuario', userFormData);

    await dispatch(updateUserProfile(formData));
  };

  return (
    <div className={styles.container}>
      <div className={styles.descricao}>
        <h3>Minha conta</h3>
        <ul>
          <li>
            Dados da empresa
          </li>
          <li>
            Alterar senha
          </li>
        </ul>
      </div>
      <div className={styles.formulario}>
        <h3>Dados da empresa</h3>
        <form onSubmit={handleSubmit}>
          {
            tipo === 'cnpj'
              ? (<FormularioCNPJ />)
              : (<FormularioCPF />)
          }
          <FormularioEndereco />
          <Botao type="submit">
            Salvar
          </Botao>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
