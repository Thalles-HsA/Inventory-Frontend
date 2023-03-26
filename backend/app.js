require("dotenv").config();

const express = require("express");

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("A API está funcionando!");
});

// Rotas
const router = require("./routes/Router.js")
app.use(router)

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});

