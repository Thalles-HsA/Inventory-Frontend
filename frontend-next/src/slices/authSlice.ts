// Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

// Types
import { Usuario, AuthState, UsuarioLogin } from "../types/Interface"

// const usuarioString = localStorage.getItem("usuario");
const usuarioString = typeof window !== "undefined" ? localStorage.getItem("usuario") : null;
const usuario = usuarioString ? JSON.parse(usuarioString) : null;

const initialState: AuthState = {
  usuario: usuario ? usuario : null,
  error: false,
  success: false,
  loading: false,
};

// Registradno e Logando Usuário
export const register = createAsyncThunk(
  "auth/register",
  async (usuario: Usuario, thunkAPI) => {
    const data: any = await authService.register(usuario);

    // Checando erros
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors);
    }

    console.log(data.errors)

    return data;
  }
);

// Logout de usuario
export const logout = createAsyncThunk<void, void>("auth/logout", async () => {
  await authService.logout();
});

// Login de usuario
export const login = createAsyncThunk(
  "auth/login",
  async (usuario: UsuarioLogin, thunkAPI) => {
    const data: any = await authService.login(usuario)

    //Checando Erros
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors)
    };

    return data;
  })

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.usuario = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as boolean | null;
        state.usuario = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.usuario = null;
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.usuario = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as boolean | null;
        state.usuario = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;