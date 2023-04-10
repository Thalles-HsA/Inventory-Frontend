import { Request, Response } from 'express';
import Usuario from "../models/Usuario"
import { CustomRequest } from '../types/interface';

import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const jwtSecret: string | undefined = process.env.JWT_SECRET;

if (!jwtSecret) {
    throw new Error("JWT_SECRET não está definido");
}

// Gerando o token de usuário
const gerarToken = (id: string) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d",
    });
};

// Registrando e Logando o Usuário

export const registrar = async (req: CustomRequest, res: Response) => {
    const { tipo, email, senha, nome, cpf, razaoSocial, cnpj, logradouro, numero, bairro, cidade, estado, cep } = req.body;

    // check if usuario exists
    const usuario = await Usuario.findOne({ email });

    if (usuario) {
        res.status(422).json({ errors: ["E-mail já cadastrado em nossa base de dados, recupere sua senha ou utilize outro e-mail."] });
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
            : { razaoSocial, cnpj, }),
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
        token: gerarToken(novoUsuario._id.toString()),
    });


};

export const usuarioAtivo = async (req: CustomRequest, res: Response) => {
    const usuario = req.usuario;

    res.status(200).json(usuario);
};

// Logando usuário
export const login = async (req: Request, res: Response) => {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({ email });

    // Checando se o usuário existe
    if (!usuario) {
        res.status(404).json({ errors: ["Usuário não cadastrado. Confira seu email ou realize seu cadastro"] });
        return;
    }

    // checando se as senhas são iguais
    if (!(await bcrypt.compare(senha, usuario.senha))) {
        res.status(422).json({ errors: ["Senha inválida!"] });
        return;
    }

    // Retornando o usuário com o token
    res.status(200).json({
        _id: usuario._id,
        token: gerarToken(usuario._id.toString())
    })
}

// Atualizando o usuario
export const atualizacao = async (req: CustomRequest, res: Response) => {
    const { tipo, nome, razaoSocial, senha, logradouro, numero, bairro, cidade, estado, cep } = req.body

    const reqUsuario = req.usuario;

    const usuario = await Usuario.findById(reqUsuario._id).select("-senha");


    if (usuario !== null) {

        if (nome && usuario.tipo === "cpf") {
            usuario.nome = nome;
        } else if (razaoSocial && usuario.tipo === "cnpj") {
            usuario.razaoSocial = razaoSocial;
        } else {
            res.status(422).json({ errors: ["Erro ao atualizar! Verifique o 'tipo' de cliente!"] });
            return;
        }


        if (senha && senha !== null) {
            const salt = await bcrypt.genSalt();
            const senhaHash = await bcrypt.hash(senha, salt);
            usuario.senha = senhaHash;
        }

        if (logradouro) {
            usuario.logradouro = logradouro;
        }

        if (numero) {
            usuario.numero = numero;
        }

        if (bairro) {
            usuario.bairro = bairro;
        }

        if (cidade) {
            usuario.cidade = cidade;
        }

        if (estado) {
            usuario.estado = estado;
        }

        if (cep) {
            usuario.cep = cep;
        }


        await usuario.save()

        res.status(200).json(usuario);
    }


}