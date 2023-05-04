import { ChangeEvent } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { updateUserFields } from '@/slices/updateUser';

const FormularioEndereco = () => {
  const {
    logradouro,
    numero,
    bairro,
    cidade,
    estado,
    cep,
    complemento
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
      <h4>Endereço</h4>
      <label htmlFor="logradouro">
        <span>Logradouro</span>
        <input
          type="text"
          name="logradouro"
          value={logradouro}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="numero">
        <span>Número</span>
        <input
          type="text"
          name="numero"
          value={numero}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="complemento">
        <span>Complemento</span>
        <input
          type="text"
          name="complemento"
          value={complemento}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="bairro">
        <span>Bairro</span>
        <input
          type="text"
          name="bairro"
          value={bairro}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="estado">
        <span>UF</span>
        <input
          type="text"
          name="estado"
          value={estado}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="cidade">
        <span>Cidade</span>
        <input
          type="text"
          name="cidade"
          value={cidade}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="cep">
        <span>CEP</span>
        <input
          type="text"
          name="cep"
          value={cep}
          onChange={handleInputChange}
        />
      </label>
    </>
  );
};

export default FormularioEndereco;
