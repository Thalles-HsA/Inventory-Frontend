const Usuario = require("../models/Usuario");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

const jwtSecret = process.env.JWT_SECRET;

// Gerando o token de usuário
const generateToken = (id) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d",
    });
};

// Registrando e Logando o Usuário

const register = async (req, res) => {
    const { tipo, email, senha, nome, cpf, razaoSocial, cnpj, inscricaoEstadual, inscricaoMunicipal, cnae, atividadePrincipal, regimeTributario, tamanhoDaEmpresa, segmento, faturamentoDoUltimoAno, logradouro, numero, bairro, cidade, estado, cep, pessoaDeContato, telefone, celular, site } = req.body;

    // check if usuario exists
    const usuario = await Usuario.findOne({ email });

    if (usuario) {
        res.status(422).json({ errors: ["Por favor, utilize outro e-mail."] });
        return;
    }

    // Generate senha has
    const salt = await bcrypt.genSalt();
    const senhaHash = await bcrypt.hash(senha, salt);

    // Criando usuario com codições

    const novoUsuario = await Usuario.create({
        email,
        senha: senhaHash,
        tipo,
        ...(tipo === "cpf"
            ? { nome, cpf }
            : { razaoSocial, cnpj,}),
         logradouro, 
         numero, 
         bairro, 
         cidade, 
         estado, 
         cep
    });

    if (!novoUsuario) {
        throw new Error("Houve um erro ao criar o usuário");
    }

    res.status(201).json({
        _id: novoUsuario._id,
        token: generateToken(novoUsuario._id),
    });


};

const getCurrentUser = async (req, res) => {
    const user = req.user;

    res.status(200).json(user);
};

module.exports = {
    register,
    getCurrentUser,
};