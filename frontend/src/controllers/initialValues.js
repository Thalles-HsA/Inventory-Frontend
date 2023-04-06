const cpf = () => {
  return {
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
};

const cnpj = () => {
  return {
    email: "",
    senha: "",
    confirmarSenha: "",
    tipo: "cnpj",
    razaoSocial: "",
    cnpj: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: ""
  };
};

const login = () => {
  return {
    email: "",
    senha: ""
  }

}

const initialValues = {
  cpf,
  cnpj,
  login
};

export default initialValues;
