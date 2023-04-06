import * as Yup from "yup";

const registrarcnpj = Yup.object({
    email: Yup.string()
        .email("E-mail inválido")
        .required("O e-mail é obrigatório"),
    senha: Yup.string()
        .min(5, "A senha precisa ter pelo menos 5 caractéres")
        .required("A senha é obrigatória"),
    confirmarSenha: Yup.string()
        .oneOf([Yup.ref('senha'), null], 'As senhas precisam ser iguais')
        .required("A confirmação de senha é obrigatória"),
    tipo: Yup.string()
        .required("O tipo de cliente é obrigatório"),
    razaoSocial: Yup.string()
        .required("A razão social é obrigatória"),
    cnpj: Yup.string()
        .required("O CNPJ é obrigatório"),
    logradouro: Yup.string()
        .required("O logradouro é obrigatório"),
    numero: Yup.string()
        .required("O numero é obrigatório"),
    complemento: Yup.string()
        .optional(),
    bairro: Yup.string()
        .required("O bairro é obrigatório"),
    cidade: Yup.string()
        .required("A cidade é obrigatória"),
    estado: Yup.string()
        .required("O estado é obrigatório"),
    cep: Yup.string()
        .required("O CEP é obrigatório"),
})

const registrarcpf = Yup.object({
    email: Yup.string()
        .email("E-mail inválido")
        .required("O e-mail é obrigatório"),
    senha: Yup.string()
        .min(6, "A senha precisa ter pelo menos 6 caractéres")
        .required("A senha é obrigatória"),
    confirmarSenha: Yup.string()
        .oneOf([Yup.ref('senha'), null], 'As senhas precisam ser iguais')
        .required("A confirmação de senha é obrigatória"),
    tipo: Yup.string()
        .required("O tipo de cliente é obrigatório"),
    nome: Yup.string()
        .required("O nome é obrigatório"),
    cpf: Yup.string()
        .required("O CPF é obrigatório"),
    logradouro: Yup.string()
        .required("O logradouro é obrigatório"),
    numero: Yup.string()
        .required("O numero é obrigatório"),
    complemento: Yup.string()
        .optional(),
    bairro: Yup.string()
        .required("O bairro é obrigatório"),
    cidade: Yup.string()
        .required("A cidade é obrigatória"),
    estado: Yup.string()
        .required("O estado é obrigatório"),
    cep: Yup.string()
        .required("O CEP é obrigatório"),
})

const login = Yup.object({
    email: Yup.string()
        .email("E-mail inválido")
        .required("O e-mail é obrigatório"),
    senha: Yup.string()
        .required("A senha é obrigatória")
});




const validacaoUsuario = {
    registrarcnpj,
    registrarcpf,
    login,
};

export default validacaoUsuario;