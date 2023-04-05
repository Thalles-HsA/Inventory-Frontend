import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

const usuario = JSON.parse(localStorage.getItem("usuario"));

const initialState = {
  usuario: usuario ? usuario : null,
  error: false,
  success: false,
  loading: false,
};

// Registradno e Logando Usuário
export const register = createAsyncThunk(
  "auth/register",
  async (usuario, thunkAPI) => {
    const data = await authService.register(usuario);

    // Checando erros
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors);
    }

    console.log(data.errors)

    return data;
  }
);

// Logout de usuario
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

// Login de usuario
export const login = createAsyncThunk(
  "auth/login",
  async (usuario, thunkAPI) => {
    const data = await authService.login(usuario)

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
        state.error = action.payload;
        state.usuario = null;
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
        state.error = action.payload;
        state.usuario = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;