import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '@/services/userService';
import { InitialStateUserSlice, UpdateUser } from '@/types/Interface';

const initialState: InitialStateUserSlice = {
  usuario: {} as UpdateUser,
  error: false,
  success: false,
  loading: false,
  message: null
};

export const userProfile = createAsyncThunk(
  'usuario/perfil',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (usuario: void, thunkAPI: any) => {
    const { token } = thunkAPI.getState().auth.usuario;
    const data = await userService.userProfile(usuario, token);
    return data;
  }
);

export const updateUserProfile = createAsyncThunk(
  'usuario/update',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (formData: FormData, thunkAPI: any) => {
    const { token } = thunkAPI.getState().auth.usuario;

    const usuario: UpdateUser = {
      tipo: formData.get('tipo') as string,
      nome: formData.get('nome') as string,
      razaoSocial: formData.get('razaoSocial') as string,
      cpf: formData.get('cpf') as string,
      cnpj: formData.get('cnpj') as string,
      cep: formData.get('cep') as string,
      logradouro: formData.get('logradouro') as string,
      numero: formData.get('numero') as string,
      complemento: formData.get('complemento') as string,
      bairro: formData.get('bairro') as string,
      cidade: formData.get('cidade') as string,
      estado: formData.get('estado') as string,
      nomeFantasia: formData.get('noomeFantasia') as string,
      inscricaoEstadual: formData.get('incricaoEstadual') as string,
      isento: formData.get('isento') !== null ? formData.get('isento') === 'true' : false,
      inscricaoMunicipal: formData.get('inscricaoMuncipal') as string,
      cnae: formData.get('cnae') as string,
      atividadePrincipal: formData.get('atividadePrincipal') as string,
      regimeTributario: formData.get('regimeTributario') as string,
      tamanhoEmpresa: formData.get('tamnhoEmpresa') as string,
      segmento: formData.get('segmento') !== null ? formData.getAll('segmento').map((value) => value as string) : [],
      faturamentoAnual: formData.get('faturamentoAnual') as string,
      quantidadeFuncionario: formData.get('quantidadeFuncionario') as string
    };

    const data = await userService.updateUserProfile(usuario, token);
    console.log(usuario);
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
  }
);

export const userSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    resetMessage: (state) => ({
      ...state,
      message: null
    })
  },
  extraReducers: (builder) => {
    builder
      .addCase(userProfile.pending, (state) => ({
        ...state,
        error: null,
        loading: true
      }))
      .addCase(userProfile.fulfilled, (state, action) => ({
        ...state,
        usuario: action.payload,
        error: null,
        success: true,
        loading: false
      }))
      .addCase(updateUserProfile.pending, (state) => ({
        ...state,
        loading: true,
        error: null
      }))
      .addCase(updateUserProfile.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        success: true,
        error: null,
        usuario: action.payload,
        message: 'Usuário atualizado com sucesso!'
      }))
      .addCase(updateUserProfile.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload as boolean | null,
        usuario: null
      }));
  }
});

export const { resetMessage } = userSlice.actions;
export default userSlice.reducer;
