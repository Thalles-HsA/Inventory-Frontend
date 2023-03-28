const express = require("express")
router = express.Router()

// Controller
const { 
    registrar, 
    usuarioAtivo,
    login,
    atualizacao,
} = require("../controllers/UsuarioController")

// Middlewares
const validate = require("../middlewares/handleValidations");
const {
    validacaoDeUsuario,
    validacaoDeLogin,
    atualizacaoDeUsuario,
} = require("../middlewares/validacaoDeUsuario.js")
const authGuard = require("../middlewares/authGuard.js")
 
// Routes
router.post("/cadastro", validacaoDeUsuario(), validate, registrar);
router.get("/perfil", authGuard, usuarioAtivo);
router.post("/login", validacaoDeLogin(), validate, login)
router.put("/", authGuard, atualizacaoDeUsuario(), validate, atualizacao)

module.exports = router;
  