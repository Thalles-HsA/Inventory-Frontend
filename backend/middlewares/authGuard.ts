import Usuario from "../models/Usuario"

import jwt, { JwtPayload } from "jsonwebtoken"

const jwtSecret: string | undefined = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error("JWT_SECRET não está definido");
}

export const authGuard = async (req: any, res: any, next: any) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // Verificar se o cabeçalho (header) contém um token
  if (!token) return res.status(401).json({ errors: ["Acesso negado!"] });

  // Checando se o token é valido
  try {
    const verified = jwt.verify(token, jwtSecret) as JwtPayload;

    req.usuario = await Usuario.findById(verified?.id).select("-senha");

    next();
  } catch (err) {
    res.status(400).json({ errors: ["O Token é inválido!"] });
  }
};

