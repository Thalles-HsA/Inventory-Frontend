import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/slices/authSlice';
import usuarioReducer from '@/slices/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    usuario: usuarioReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
