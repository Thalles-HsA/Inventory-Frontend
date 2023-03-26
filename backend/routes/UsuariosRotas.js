const express = require("express")
router = express.Router()

// Controller
const { rotaDeTeste } = require("../controllers/UsuarioController")

// Middlewares
 
// Routes
router.get("/", rotaDeTeste);

module.exports = router;
  