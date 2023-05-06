import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Usuario, AuthState, UsuarioLogin } from '@/types/Interface';

import authService from '@/services/authService';

const usuarioString = typeof window !== 'undefined' ? localStorage.getItem('usuario') : null;
const usuario = usuarioString ? JSON.parse(usuarioString) : null;

const initialState: AuthState = {
  usuario: usuario || null,
  error: false,
  success: false,
  loading: false,
  message: []
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (usuarioParaCadastro: Usuario, thunkAPI) => {
    const data = await authService.cadastroDeUsusario(usuarioParaCadastro);
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors);
    }
    return data;
  }
);

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  authService.logoutDeUsuario();
});

export const loginUser = createAsyncThunk('auth/login', async (usuarioParaLogin: UsuarioLogin, thunkAPI) => {
  const data = await authService.loginDeUsuario(usuarioParaLogin);
  if (data.errors) {
    return thunkAPI.rejectWithValue(data.errors);
  }
  return data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => ({
      ...state,
      loading: false,
      error: false,
      success: false
    })
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => ({
        ...state,
        loading: true,
        error: null
      }))
      .addCase(registerUser.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        success: true,
        error: null,
        usuario: action.payload
      }))
      .addCase(registerUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload as boolean | null,
        usuario: null
      }))
      .addCase(logoutUser.fulfilled, (state) => ({
        ...state,
        usuario: null,
        loading: false,
        success: true,
        error: null
      }))
      .addCase(loginUser.pending, (state) => ({
        ...state,
        loading: true,
        error: null
      }))
      .addCase(loginUser.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        success: true,
        error: null,
        usuario: action.payload
      }))
      .addCase(loginUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload as boolean | null,
        usuario: null
      }));
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
