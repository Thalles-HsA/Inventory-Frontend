import { createSlice } from '@reduxjs/toolkit';

interface TypeState {
    tipoDeClienteSelecionado: string
}

const initialState: TypeState = {
  tipoDeClienteSelecionado: 'cnpj'
};

export const TipoDeCliente = createSlice({
  name: 'tipo',
  initialState,
  reducers: {
    mudaTipoDeCliente: (state, action) => ({
      ...state,
      tipoDeClienteSelecionado: action.payload
    })
  }
});

export const { mudaTipoDeCliente } = TipoDeCliente.actions;
export default TipoDeCliente.reducer;
