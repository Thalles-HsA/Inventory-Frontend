const express = require("express")
router = express.Router()

// Controller
const { 
    register, 
    getCurrentUser 
} = require("../controllers/UsuarioController")

// Middlewares
const validate = require("../middlewares/handleValidations");
const {
    usuarioValidation
} = require("../middlewares/validacaoDeUsuario.js")
const authGuard = require("../middlewares/authGuard.js")
 
// Routes
router.post("/cadastro", usuarioValidation(), validate, register);
router.get("/perfil", authGuard, getCurrentUser);

module.exports = router;
  