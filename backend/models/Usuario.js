const mongoose = require("mongoose");
const { Schema } = mongoose;

const usuarioSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },

    tipo: {
        type: String,
        enum: ["cpf", "cnpj"],
        required: true
    },

    nome: {
        type: String,
        required: function () {
            return this.tipo === "cpf";
        },
    },
    cpf: {
        type: String,
        required: function () {
            return this.tipo === "cpf";
        },
    },
    razaoSocial: {
        type: String,
        required: function () {
            return this.tipo === "cnpj";
        }
    },
    cnpj: {
        type: String,
        required: function () {
            return this.tipo === "cnpj";
        }
    },


    logradouro: {
        type: String,
        required: true
    },

    numero: {
        type: String,
        required: true
    },

    complemento: String,

    bairro: {
        type: String,
        required: true
    },

    cidade: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        required: true
    },

    cep: {
        type: String,
        required: true
    }
});


const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;