const express = require("express")
const router = express();

router.use("/api/usuarios", require("./UsuariosRotas.js"));

module.exports = router;