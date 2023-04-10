import mongoose, { Document } from "mongoose";
import { Request, Response} from 'express';

export interface UsuarioDocument extends Document {
    email: string;
    senha: string;
    tipo: "cpf" | "cnpj";
    nome?: string;
    cpf?: string;
    razaoSocial?: string;
    cnpj?: string;
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
}

export interface CustomRequest extends Request {
    usuario?: any;
}