import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import usuarioReducer from './slices/userSlice';
import updateReducer from './slices/updateUser';
import passwordReducer from './slices/updatePassword';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: usuarioReducer,
    update: updateReducer,
    password: passwordReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
