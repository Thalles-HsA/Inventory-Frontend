import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../services/userService';
import { InitialStateUserSlice, RecoveryPassword, UpdatePassword, UpdateUser } from '@/types/Interface';

const initialState: InitialStateUserSlice = {
  usuario: {} as UpdateUser,
  error: null,
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
      nomeFantasia: formData.get('nomeFantasia') as string,
      inscricaoEstadual: formData.get('inscricaoEstadual') as string,
      isento: formData.get('isento') !== null ? formData.get('isento') === 'true' : false,
      inscricaoMunicipal: formData.get('inscricaoMunicipal') as string,
      cnae: formData.get('cnae') as string,
      atividadePrincipal: formData.get('atividadePrincipal') as string,
      regimeTributario: formData.get('regimeTributario') as string,
      tamanhoEmpresa: formData.get('tamanhoEmpresa') as string,
      segmento: formData.get('segmento') !== null ? formData.getAll('segmento').map((value) => value as string) : [],
      faturamentoAnual: formData.get('faturamentoAnual') as string,
      quantidadeFuncionario: formData.get('quantidadeFuncionario') as string
    };

    const data = await userService.updateUserProfile(usuario, token);
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors);
    }
    return data;
  }
);

export const updateUserPassword = createAsyncThunk(
  'usuario/updatePassword',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (formData: FormData, thunkAPI: any) => {
    const { token } = thunkAPI.getState().auth.usuario;

    const usuario: UpdatePassword = {
      senha: formData.get('senha') as string,
      novaSenha: formData.get('novaSenha') as string,
      confirmarSenha: formData.get('confirmarSenha') as string
    };

    const data = await userService.updateUserPassword(usuario, token);
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors);
    }

    return data;
  }
);

export const requestPasswordRecovery = createAsyncThunk(
  'usuario/recoveryPassword',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (email: string, thunkAPI: any) => {
    const data = await userService.requestPasswordRecovery(email);
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors);
    }
    return data;
  }
);

export const validateToken = createAsyncThunk(
  'usuario/validateToken',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (token: string, thunkAPI: any) => {
    const data = await userService.validateToken(token);
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors);
    }
    return data;
  }
);

export const passwordRecovery = createAsyncThunk(
  'usuario/passwordRecovery',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (usuario: RecoveryPassword, thunkAPI: any) => {
    const data = await userService.passwordRecovery(usuario);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors);
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
        message: ['Usuário atualizado com sucesso!']
      }))
      .addCase(updateUserProfile.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload as null,
        usuario: null
      }))
      .addCase(updateUserPassword.pending, (state) => ({
        ...state,
        loading: true,
        error: null
      }))
      .addCase(updateUserPassword.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        success: true,
        error: null,
        usuario: action.payload,
        message: ['Senha atualizada com sucesso!']
      }))
      .addCase(updateUserPassword.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload as null,
        usuario: null
      }))
      .addCase(requestPasswordRecovery.pending, (state) => ({
        ...state,
        loading: true,
        error: null
      }))
      .addCase(requestPasswordRecovery.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        success: true,
        error: null,
        usuario: action.payload,
        message: ['Email enviado com sucesso!']
      }))
      .addCase(requestPasswordRecovery.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload as null,
        usuario: null
      }))
      .addCase(validateToken.pending, (state) => ({
        ...state,
        loading: true,
        error: null
      }))
      .addCase(validateToken.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        success: true,
        error: null,
        usuario: action.payload
      }))
      .addCase(validateToken.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload as null,
        usuario: null
      }))
      .addCase(passwordRecovery.pending, (state) => ({
        ...state,
        loading: true,
        error: null
      }))
      .addCase(passwordRecovery.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        success: true,
        error: null,
        usuario: action.payload,
        message: ['Senha atualizada com sucesso']
      }))
      .addCase(passwordRecovery.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload as null,
        usuario: null
      }));
  }
});

export const { resetMessage } = userSlice.actions;
export default userSlice.reducer;
