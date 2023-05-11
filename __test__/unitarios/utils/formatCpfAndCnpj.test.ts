import formatCnpjCpf from '../../../src/utils/formatCpfAndCnpj';

describe('Function formatCnpjCpf', () => {
  it('format CPF', () => {
    const cpf = '11122233344';
    const tipo = 'cpf';

    const cpfFormatado = formatCnpjCpf(cpf, tipo);

    expect(cpfFormatado).toEqual('111.222.333-44');
  });

  it('format CNPJ', () => {
    const cpf = '11222333444455';
    const tipo = 'cnpj';

    const cpfFormatado = formatCnpjCpf(cpf, tipo);

    expect(cpfFormatado).toEqual('11.222.333/4444-55');
  });

  it('Deve retornar uma string vazia para uma string vazia', () => {
    const cnpjCpf = '';
    const tipo = 'cpf';
    const formattedCnpjCpf = formatCnpjCpf(cnpjCpf, tipo);
    expect(formattedCnpjCpf).toBe('');
  });

  it('Deve retornar uma string vazia para um tipo inválido', () => {
    const cnpjCpf = '11122233344';
    const tipo = 'invalido';
    const formattedCnpjCpf = formatCnpjCpf(cnpjCpf, tipo);
    expect(formattedCnpjCpf).toBe('Tipo de cliente inválido');
  });
});
