import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/slices/authSlice';
import usuarioReducer from '@/slices/userSlice';
import tipoReducer from '@/slices/typeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    usuario: usuarioReducer,
    tipo: tipoReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
