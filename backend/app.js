// Configurações das variaveis vindo do arquivo .env
require("dotenv").config(); 
const port = process.env.PORT;

// importando e criando o objeto do express
const express = require("express");
const app = express();

app.use(express.json());

//Conexão com o banco de dados
require("./config/db.js")

// rota simples de teste
app.get("/", (req, res) => {
  res.send("A API está funcionando!");
});

// Rotas
const router = require("./routes/Router.js")
app.use(router)

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});

