const Usuario = require("../models/Usuario");

const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // Check if header has a token
  if (!token) return res.status(401).json({ errors: ["Acesso negado!"] });

  // Check if token is valid
  try {
    const verified = jwt.verify(token, jwtSecret);

    req.user = await Usuario.findById(verified.id).select("-password");

    next();
  } catch (err) {
    res.status(400).json({ errors: ["O Token é inválido!"] });
  }
};

module.exports = authGuard;
