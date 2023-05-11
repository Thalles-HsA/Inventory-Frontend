const formatCnpjCpf = (cnpjCpf: string, tipo: string) => {
  if (tipo === 'cpf') {
    return cnpjCpf.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );
  }
  if (tipo === 'cnpj') {
    return cnpjCpf.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5'
    );
  }

  return 'Tipo de cliente inválido';
};

export default formatCnpjCpf;
