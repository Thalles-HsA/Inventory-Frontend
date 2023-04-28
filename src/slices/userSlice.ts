import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '@/services/userService';
import { Usuario, InitialStateUserSlice } from '@/types/Interface';

const initialState: InitialStateUserSlice = {
  usuario: {} as Usuario,
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
      }));
  }
});

export const { resetMessage } = userSlice.actions;
export default userSlice.reducer;
