import { config } from 'dotenv';
config();

import express from 'express';
import path from 'path'
import cors from 'cors'

const port = process.env.PORT;

const app = express();

// Config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Solve CORS
app.use(cors({ credentials: true, origin: ["http://localhost:3000", "http://localhost:3001", "https://projeto-inventory.vercel.app"] }));

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// db connection
import "./config/db.ts";

// test route
app.get("/", (req, res) => {
  res.send("API Working!");
});

// routes
import { router } from "./routes/Router";

app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});

