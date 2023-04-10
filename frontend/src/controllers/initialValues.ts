// Types
import { Usuario } from "../types/Interface"

const initialValuesCPF: Usuario = {
  email: "",
  senha: "",
  confirmarSenha: "",
  tipo: "cpf",
  nome: "",
  cpf: "",
  logradouro: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  estado: "",
  cep: ""
};

const initialValuesCNPJ: Usuario = {
  email: "",
  senha: "",
  confirmarSenha: "",
  tipo: "cnpj",
  logradouro: "",
  cnpj: "",
  razaoSocial: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  estado: "",
  cep: ""
};

const initialValues = {
  cpf: initialValuesCPF,
  cnpj: initialValuesCNPJ,
  login: {
    email: "",
    senha: ""
  }
};

export default initialValues;
