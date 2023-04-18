import express from 'express';

export const router = express.Router()

// Controller
import { registrar, usuarioAtivo, login, atualizacao } from "../controllers/UsuarioController";

// Middlewares
import { validate } from "../middlewares/handleValidations";
import { validacaoDeUsuario, validacaoDeLogin, atualizacaoDeUsuario } from "../middlewares/validacaoDeUsuario";
import { authGuard } from "../middlewares/authGuard";
 
// Routes
router.post("/cadastro", validacaoDeUsuario(), validate, registrar);
router.post("/login", validacaoDeLogin(), validate, login);
router.get("/perfil", authGuard, usuarioAtivo);
router.put("/", authGuard, atualizacaoDeUsuario(), validate, atualizacao);