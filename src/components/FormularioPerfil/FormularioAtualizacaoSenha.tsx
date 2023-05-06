import { ChangeEvent } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { updateUserFields } from '@/slices/updateUser';

const FormularioAtualizacaoSenha = () => {
  const {
    senha,
    novaSenha,
    confirmarSenha
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
    <div>
      <label htmlFor="senha">
        <span>Senha Atual</span>
        <input
          type="password"
          name="senha"
          value={senha}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="novaSenha">
        <span>Nova Senha</span>
        <input
          type="password"
          name="novaSenha"
          value={novaSenha}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="confirmarSenha">
        <span>Confirmar Senha</span>
        <input
          type="password"
          name="confirmarSenha"
          value={confirmarSenha}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default FormularioAtualizacaoSenha;
