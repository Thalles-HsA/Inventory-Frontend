
const getInitialValues = (values) => {
    if (values.tipo === "cpf") {
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
    } else {
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
    }
  };

export default getInitialValues