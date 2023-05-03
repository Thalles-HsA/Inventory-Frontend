import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '@/services/userService';
import initialValues from '@/utils/initialValues';

export const userProfile = createAsyncThunk(
  'usuario/perfil',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (usuario: void, thunkAPI: any) => {
    const { token } = thunkAPI.getState().auth.usuario;
    const data = await userService.userProfile(usuario, token);
    return data;
  }
);

export const updateUser = createSlice({
  name: 'update',
  initialState: initialValues.update,
  reducers: {
    updateUserFields: (state, action) => ({
      ...state,
      ...action.payload
    }),
    addSegment: (state, action) => ({
      ...state,
      segmento: [...state.segmento, action.payload]
    }),
    removeSegment: (state, action) => ({
      ...state,
      segmento: state.segmento.filter((segmento) => segmento !== action.payload)
    })
  },
  extraReducers: (builder) => {
    builder.addCase(userProfile.fulfilled, (state, action) => {
      const {
        tipo,
        nome,
        razaoSocial,
        cpf,
        cnpj,
        logradouro,
        numero,
        bairro,
        cidade,
        estado,
        cep,
        complemento,
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
      } = action.payload;
      return {
        ...state,
        tipo,
        nome,
        razaoSocial,
        cpf,
        cnpj,
        logradouro,
        numero,
        bairro,
        cidade,
        estado,
        cep,
        complemento,
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
    });
  }
});

export const { updateUserFields, addSegment, removeSegment } = updateUser.actions;
export default updateUser.reducer;
