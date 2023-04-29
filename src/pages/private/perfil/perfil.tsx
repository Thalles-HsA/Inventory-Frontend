import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { userProfile } from '@/slices/userSlice';
import styles from '@/styles/perfil.module.scss';
import FormularioCPF from '@/components/FormularioPerfil/FormularioCPF';
import FormularioCNPJ from '@/components/FormularioPerfil/FormularioCNPJ';

const Perfil = () => {
  const { usuario } = useSelector((state: RootState) => state.usuario);
  const { tipoDeClienteSelecionado } = useSelector((state: RootState) => state.tipo);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

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
        <form>
          {
            tipoDeClienteSelecionado === 'cnpj'
              ? (<FormularioCNPJ />)
              : (<FormularioCPF />)
          }
          <h4>Endereço</h4>
          <label htmlFor="logradouro">
            <span>Logradouro</span>
            <input type="text" id="logradouro" value={usuario.logradouro} />
          </label>
          <label htmlFor="numero">
            <span>Número</span>
            <input type="text" id="numero" value={usuario.numero} />
          </label>
          <label htmlFor="complemento">
            <span>Complemento</span>
            <input type="text" id="complemento" />
          </label>
          <label htmlFor="bairro">
            <span>Bairro</span>
            <input type="text" id="bairro" value={usuario.bairro} />
          </label>
          <label htmlFor="estado">
            <span>UF</span>
            <input type="text" id="estado" value={usuario.estado} />
          </label>
          <label htmlFor="cidade">
            <span>Cidade</span>
            <input type="text" id="cidade" value={usuario.cidade} />
          </label>
          <label htmlFor="cep">
            <span>CEP</span>
            <input type="text" id="cep" value={usuario.cep} />
          </label>
          <label htmlFor="email">
            <span>Email</span>
            <p>
              {usuario.email}
            </p>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
