import validacaoUsuario from '../../../src/utils/validacaoCadastro';

describe('validacaoUsuario tipo CNPJ', () => {
  const dadosComuns = {
    email: 'emailvalido@teste.com',
    senha: 'senha123',
    confirmarSenha: 'senha123',
    tipo: 'cnpj',
    razaoSocial: 'Empresa X',
    cnpj: '123456789',
    logradouro: 'Rua A',
    numero: '123',
    complemento: '',
    bairro: 'Bairro Y',
    cidade: 'Cidade Z',
    estado: 'SP',
    cep: '12345678'
  };
  it('não deve retornar erro', async () => {
    const data = { ...dadosComuns };
    await expect(validacaoUsuario.registrarcnpj.validate(data)).resolves.not.toThrow();
  });

  it('deve retornar um erro para um e-mail inválido', async () => {
    const data = { ...dadosComuns, email: 'emailinvalido.com' };
    await expect(validacaoUsuario.registrarcnpj.validate(data)).rejects.toThrowError('E-mail inválido');
  });

  it('Deve retornar erro para um e-mail obrigatório', async () => {
    const data = { ...dadosComuns, email: '' };
    await expect(validacaoUsuario.registrarcnpj.validate(data)).rejects.toThrowError('O e-mail é obrigatório');
  });

  it('Deve retornar erro para senha com caractéres minímos', async () => {
    const data = { ...dadosComuns, senha: 'senh', confirmarSenha: 'senh' };
    await expect(validacaoUsuario.registrarcnpj.validate(data)).rejects.toThrowError('A senha precisa ter pelo menos 6 caractéres');
  });

  it('Deve retornar erro para senhas não iguais', async () => {
    const data = { ...dadosComuns, senha: 'senha123', confirmarSenha: 'senha145' };
    await expect(validacaoUsuario.registrarcnpj.validate(data)).rejects.toThrowError('As senhas precisam ser iguais');
  });

  it('Deve retornar erro para confirmaçao de senha faltando', async () => {
    const data = {
      email: 'emailvalido@teste.com',
      senha: 'senha123',
      tipo: 'cnpj',
      razaoSocial: 'Empresa X',
      cnpj: '123456789',
      logradouro: 'Rua A',
      numero: '123',
      complemento: '',
      bairro: 'Bairro Y',
      cidade: 'Cidade Z',
      estado: 'SP',
      cep: '12345678'
    };

    await expect(validacaoUsuario.registrarcnpj.validate(data)).rejects.toThrowError('A confirmação de senha é obrigatória');
  });

  it('Deve retornar erro para tipo obrigatório', async () => {
    const data = { ...dadosComuns, tipo: '' };
    await expect(validacaoUsuario.registrarcnpj.validate(data)).rejects.toThrowError('O tipo de cliente é obrigatório');
  });

  it('Deve retornar erro para Razao Social obrigatório', async () => {
    const data = { ...dadosComuns, razaoSocial: '' };
    await expect(validacaoUsuario.registrarcnpj.validate(data)).rejects.toThrowError('A razão social é obrigatória');
  });

  it('Deve retornar erro para Cnpj obrigatório', async () => {
    const data = { ...dadosComuns, cnpj: '' };
    await expect(validacaoUsuario.registrarcnpj.validate(data)).rejects.toThrowError('O CNPJ é obrigatório');
  });

  it('Deve retornar erro para logradouro obrigatório', async () => {
    const data = { ...dadosComuns, logradouro: '' };
    await expect(validacaoUsuario.registrarcnpj.validate(data)).rejects.toThrowError('O logradouro é obrigatório');
  });

  it('Deve retornar erro para número obrigatório', async () => {
    const data = { ...dadosComuns, numero: '' };
    await expect(validacaoUsuario.registrarcnpj.validate(data)).rejects.toThrowError('O numero é obrigatório');
  });

  it('Deve retornar erro para bairro obrigatório', async () => {
    const data = { ...dadosComuns, bairro: '' };
    await expect(validacaoUsuario.registrarcnpj.validate(data)).rejects.toThrowError('O bairro é obrigatório');
  });

  it('Deve retornar erro para cidade obrigatório', async () => {
    const data = { ...dadosComuns, cidade: '' };
    await expect(validacaoUsuario.registrarcnpj.validate(data)).rejects.toThrowError('A cidade é obrigatória');
  });

  it('Deve retornar erro para estado obrigatório', async () => {
    const data = { ...dadosComuns, estado: '' };
    await expect(validacaoUsuario.registrarcnpj.validate(data)).rejects.toThrowError('O estado é obrigatório');
  });

  it('Deve retornar erro para CEP obrigatório', async () => {
    const data = { ...dadosComuns, cep: '' };
    await expect(validacaoUsuario.registrarcnpj.validate(data)).rejects.toThrowError('O CEP é obrigatório');
  });
});

describe('validacaoUsuario tipo CPF', () => {
  const dadosComuns = {
    email: 'emailvalido@teste.com',
    senha: 'senha123',
    confirmarSenha: 'senha123',
    tipo: 'cpf',
    nome: 'Fulano X',
    cpf: '123456789',
    logradouro: 'Rua A',
    numero: '123',
    complemento: '',
    bairro: 'Bairro Y',
    cidade: 'Cidade Z',
    estado: 'SP',
    cep: '12345678'
  };
  it('não deve retornar erro', async () => {
    const data = { ...dadosComuns };
    await expect(validacaoUsuario.registrarcpf.validate(data)).resolves.not.toThrow();
  });

  it('deve retornar um erro para um e-mail inválido', async () => {
    const data = { ...dadosComuns, email: 'emailinvalido.com' };
    await expect(validacaoUsuario.registrarcpf.validate(data)).rejects.toThrowError('E-mail inválido');
  });

  it('Deve retornar erro para um e-mail obrigatório', async () => {
    const data = { ...dadosComuns, email: '' };
    await expect(validacaoUsuario.registrarcpf.validate(data)).rejects.toThrowError('O e-mail é obrigatório');
  });

  it('Deve retornar erro para senha com caractéres minímos', async () => {
    const data = { ...dadosComuns, senha: 'senh', confirmarSenha: 'senh' };
    await expect(validacaoUsuario.registrarcpf.validate(data)).rejects.toThrowError('A senha precisa ter pelo menos 6 caractéres');
  });

  it('Deve retornar erro para senhas não iguais', async () => {
    const data = { ...dadosComuns, senha: 'senha123', confirmarSenha: 'senha145' };
    await expect(validacaoUsuario.registrarcpf.validate(data)).rejects.toThrowError('As senhas precisam ser iguais');
  });

  it('Deve retornar erro para confirmaçao de senha faltando', async () => {
    const data = {
      email: 'emailvalido@teste.com',
      senha: 'senha123',
      tipo: 'cnpj',
      nome: 'Fulano X',
      cpf: '123456789',
      logradouro: 'Rua A',
      numero: '123',
      complemento: '',
      bairro: 'Bairro Y',
      cidade: 'Cidade Z',
      estado: 'SP',
      cep: '12345678'
    };

    await expect(validacaoUsuario.registrarcpf.validate(data)).rejects.toThrowError('A confirmação de senha é obrigatória');
  });

  it('Deve retornar erro para tipo obrigatório', async () => {
    const data = { ...dadosComuns, tipo: '' };
    await expect(validacaoUsuario.registrarcpf.validate(data)).rejects.toThrowError('O tipo de cliente é obrigatório');
  });

  it('Deve retornar erro para Razao Social obrigatório', async () => {
    const data = { ...dadosComuns, nome: '' };
    await expect(validacaoUsuario.registrarcpf.validate(data)).rejects.toThrowError('O nome é obrigatório');
  });

  it('Deve retornar erro para Cnpj obrigatório', async () => {
    const data = { ...dadosComuns, cpf: '' };
    await expect(validacaoUsuario.registrarcpf.validate(data)).rejects.toThrowError('O CPF é obrigatório');
  });

  it('Deve retornar erro para logradouro obrigatório', async () => {
    const data = { ...dadosComuns, logradouro: '' };
    await expect(validacaoUsuario.registrarcpf.validate(data)).rejects.toThrowError('O logradouro é obrigatório');
  });

  it('Deve retornar erro para número obrigatório', async () => {
    const data = { ...dadosComuns, numero: '' };
    await expect(validacaoUsuario.registrarcpf.validate(data)).rejects.toThrowError('O numero é obrigatório');
  });

  it('Deve retornar erro para bairro obrigatório', async () => {
    const data = { ...dadosComuns, bairro: '' };
    await expect(validacaoUsuario.registrarcpf.validate(data)).rejects.toThrowError('O bairro é obrigatório');
  });

  it('Deve retornar erro para cidade obrigatório', async () => {
    const data = { ...dadosComuns, cidade: '' };
    await expect(validacaoUsuario.registrarcpf.validate(data)).rejects.toThrowError('A cidade é obrigatória');
  });

  it('Deve retornar erro para estado obrigatório', async () => {
    const data = { ...dadosComuns, estado: '' };
    await expect(validacaoUsuario.registrarcpf.validate(data)).rejects.toThrowError('O estado é obrigatório');
  });

  it('Deve retornar erro para CEP obrigatório', async () => {
    const data = { ...dadosComuns, cep: '' };
    await expect(validacaoUsuario.registrarcpf.validate(data)).rejects.toThrowError('O CEP é obrigatório');
  });
});

describe('validacaoUsuario para Login', () => {
  const dadosComuns = {
    email: 'emailvalido@teste.com',
    senha: 'senha123'
  };
  it('não deve retornar erro', async () => {
    const data = { ...dadosComuns };
    await expect(validacaoUsuario.login.validate(data)).resolves.not.toThrow();
  });

  it('deve retornar um erro para um e-mail inválido', async () => {
    const data = { ...dadosComuns, email: 'emailinvalido.com' };
    await expect(validacaoUsuario.login.validate(data)).rejects.toThrowError('E-mail inválido');
  });

  it('Deve retornar erro para um e-mail obrigatório', async () => {
    const data = { ...dadosComuns, email: '' };
    await expect(validacaoUsuario.login.validate(data)).rejects.toThrowError('O e-mail é obrigatório');
  });

  it('Deve retornar erro para um senha obrigatório', async () => {
    const data = { ...dadosComuns, senha: '' };
    await expect(validacaoUsuario.login.validate(data)).rejects.toThrowError('A senha é obrigatória');
  });
});

describe('validacaoUsuario para requestPasswordRecovery', () => {
  const dadosComuns = {
    email: 'emailvalido@teste.com'
  };
  it('não deve retornar erro', async () => {
    const data = { ...dadosComuns };
    await expect(validacaoUsuario.requestPasswordRecovery.validate(data)).resolves.not.toThrow();
  });

  it('deve retornar um erro para um e-mail inválido', async () => {
    const data = { ...dadosComuns, email: 'emailinvalido.com' };
    await expect(validacaoUsuario.requestPasswordRecovery.validate(data)).rejects.toThrowError('E-mail inválido');
  });

  it('Deve retornar erro para um e-mail obrigatório', async () => {
    const data = { ...dadosComuns, email: '' };
    await expect(validacaoUsuario.requestPasswordRecovery.validate(data)).rejects.toThrowError('O e-mail é obrigatório');
  });
});

describe('validacaoUsuario passwordRecovery', () => {
  const dadosComuns = {
    email: 'emailvalido@teste.com',
    novaSenha: 'senha123',
    confirmarSenha: 'senha123'
  };
  it('não deve retornar erro', async () => {
    const data = { ...dadosComuns };
    await expect(validacaoUsuario.passwordRecovery.validate(data)).resolves.not.toThrow();
  });

  it('deve retornar um erro para um e-mail inválido', async () => {
    const data = { ...dadosComuns, email: 'emailinvalido.com' };
    await expect(validacaoUsuario.passwordRecovery.validate(data)).rejects.toThrowError('E-mail inválido');
  });

  it('Deve retornar erro para senha com caractéres minímos', async () => {
    const data = { ...dadosComuns, novaSenha: 'senh', confirmarSenha: 'senh' };
    await expect(validacaoUsuario.passwordRecovery.validate(data)).rejects.toThrowError('A senha precisa ter pelo menos 6 caractéres');
  });

  it('Deve retornar erro para senhas não iguais', async () => {
    const data = { ...dadosComuns, novaSenha: 'senha123', confirmarSenha: 'senha145' };
    await expect(validacaoUsuario.passwordRecovery.validate(data)).rejects.toThrowError('As senhas precisam ser iguais');
  });

  it('Deve retornar erro para confirmaçao de senha faltando', async () => {
    const data = {
      email: 'emailvalido@teste.com',
      senha: 'senha123'
    };

    await expect(validacaoUsuario.passwordRecovery.validate(data)).rejects.toThrowError('A confirmação de senha é obrigatória');
  });
});
