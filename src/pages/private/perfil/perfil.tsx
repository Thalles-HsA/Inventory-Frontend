/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, FormEvent } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { resetMessage, updateUserProfile, userProfile } from '@/slices/userSlice';
import styles from '@/styles/perfil.module.scss';
import FormularioCPF from '@/components/FormularioPerfil/FormularioCPF';
import FormularioCNPJ from '@/components/FormularioPerfil/FormularioCNPJ';
import Botao from '@/components/Botao';
import FormularioEndereco from '@/components/FormularioPerfil/FormularioDeEndereco';
import Message from '@/components/Message';
import { UserDataCNPJ, UserDataCPF } from '@/types/Interface';

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
  const { loading, error, message } = useSelector((state: RootState) => state.usuario);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userDataCPF: UserDataCPF = {
      tipo: tipo || '',
      nome: nome || '',
      cpf: cpf || '',
      atividadePrincipal: atividadePrincipal || '',
      nomeFantasia: nomeFantasia || '',
      logradouro: logradouro || '',
      numero: numero || '',
      complemento: complemento || '',
      bairro: bairro || '',
      cidade: cidade || '',
      estado: estado || '',
      cep: cep || ''
    };
    const userDataCNPJ: UserDataCNPJ = {
      tipo: tipo || '',
      razaoSocial: razaoSocial || '',
      cnpj: cnpj || '',
      nomeFantasia: nomeFantasia || '',
      inscricaoEstadual: inscricaoEstadual || '',
      isento: isento || false,
      inscricaoMunicipal: inscricaoMunicipal || '',
      cnae: cnae || '',
      atividadePrincipal: atividadePrincipal || '',
      regimeTributario: regimeTributario || '',
      tamanhoEmpresa: tamanhoEmpresa || '',
      segmento: segmento || '',
      faturamentoAnual: faturamentoAnual || '',
      quantidadeFuncionario: quantidadeFuncionario || '',
      logradouro: logradouro || '',
      numero: numero || '',
      complemento: complemento || '',
      bairro: bairro || '',
      cidade: cidade || '',
      estado: estado || '',
      cep: cep || ''
    };

    const formData = new FormData();
    const userData: any = tipo === 'cpf' ? userDataCPF : userDataCNPJ;
    Object.keys(userData).forEach((key) => {
      formData.append(key, userData[key] ?? '');
    });
    await dispatch(updateUserProfile(formData));

    setTimeout(() => {
      dispatch(resetMessage());
    }, 3000);
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
          <div>
            <Botao disabled={loading} type="submit" className="botao-proximo">
              {loading ? 'Aguarde...' : 'Salvar'}
            </Botao>
            {error && <Message msg={error} type="error" />}
            {message && <Message msg={message} type="success" />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
