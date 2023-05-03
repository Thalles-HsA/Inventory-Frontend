import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/slices/authSlice';
import usuarioReducer from '@/slices/userSlice';
import updateReducer from '@/slices/updateUser';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    usuario: usuarioReducer,
    update: updateReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
