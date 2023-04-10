import { router as UsuariosRotas } from './UsuariosRotas';
import express from 'express';

export const router = express();

router.use("/api/usuarios", UsuariosRotas);