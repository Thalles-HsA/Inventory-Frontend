/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../services/userService';
import initialValues from '../utils/initialValues';

export const userProfile = createAsyncThunk(
  'usuario/perfil',
  async (usuario: void, thunkAPI: any) => {
    const { token } = thunkAPI.getState().auth.usuario;
    const data = await userService.userProfile(usuario, token);
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors);
    }
    return data;
  }
);

export const updateUser = createSlice({
  name: 'password',
  initialState: initialValues.passwordRecovery,
  reducers: {
    updateUserFields: (state, action) => ({
      ...state,
      ...action.payload
    })
  },
  extraReducers: (builder) => {
    builder
      .addCase(userProfile.fulfilled, (state, action) => {
        if (action.payload.tipo === null) {
          return state;
        }
        const {
          senha,
          novaSenha,
          confirmarSenha

        } = action.payload;
        return {
          ...state,
          senha,
          novaSenha,
          confirmarSenha
        };
      });
  }
});

export const { updateUserFields } = updateUser.actions;
export default updateUser.reducer;
