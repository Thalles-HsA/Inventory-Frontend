import { UpdatePassword, UpdateUser, Usuario } from '@/types/Interface';

const initialValuesCPF: Usuario = {
  email: '',
  senha: '',
  confirmarSenha: '',
  tipo: 'cpf',
  nome: '',
  cpf: '',
  logradouro: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  estado: '',
  cep: ''
};

const initialValuesCNPJ: Usuario = {
  email: '',
  senha: '',
  confirmarSenha: '',
  tipo: 'cnpj',
  logradouro: '',
  cnpj: '',
  razaoSocial: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  estado: '',
  cep: ''
};

const initialStateUpdateUser: UpdateUser = {
  tipo: '',
  nome: 'null',
  razaoSocial: '',
  cpf: '',
  cnpj: '',
  logradouro: '',
  numero: '',
  bairro: '',
  cidade: '',
  estado: '',
  cep: '',
  complemento: '',
  nomeFantasia: '',
  inscricaoEstadual: '',
  isento: false,
  inscricaoMunicipal: '',
  cnae: '',
  atividadePrincipal: '',
  regimeTributario: '',
  tamanhoEmpresa: '',
  segmento: [''],
  faturamentoAnual: '',
  quantidadeFuncionario: ''
};

const initialValuePasswordRecovery: UpdatePassword = {
  senha: '',
  novaSenha: '',
  confirmarSenha: ''
};

const initialValues = {
  cpf: initialValuesCPF,
  cnpj: initialValuesCNPJ,
  login: {
    email: '',
    senha: ''
  },
  update: initialStateUpdateUser,
  requestPasswordRecovery: {
    email: ''
  },
  passwordRecovery: initialValuePasswordRecovery
};

export default initialValues;
