import { RecoveryPassword, UpdatePassword, UpdateUser } from '@/types/Interface';
import { api, requestConfig } from '@/utils/config';

const userProfile = async (data: void, token: string) => {
  const config = requestConfig('GET', data, token);

  try {
    const response = await fetch(`${api}/usuarios/perfil`, config)
      .catch(() => { throw new Error('Não foi possivel pegar o usuario ativo'); });

    const res = await response.json();

    return res;
  } catch {
    throw new Error('Não foi possivel pegar o usuario ativo');
  }
};

const updateUserProfile = async (data: UpdateUser, token: string) => {
  const config = requestConfig('PUT', data, token);
  try {
    const response = await fetch(`${api}/usuarios/`, config)
      .catch(() => { throw new Error('Não foi possivel atualizar o usário'); });
    const res = await response.json();

    return res;
  } catch {
    throw new Error('Não foi possível atualizar o usuário');
  }
};

const updateUserPassword = async (data: UpdatePassword, token: string) => {
  const config = requestConfig('PUT', data, token);
  try {
    const response = await fetch(`${api}/usuarios/atualizaSenha`, config)
      .catch(() => { throw new Error('Não foi possivel atualizar a senha do usuário'); });
    const res = await response.json();

    return res;
  } catch {
    throw new Error('Não foi possivel atualizar a senha do usuário');
  }
};

const requestPasswordRecovery = async (email: string) => {
  const config = requestConfig('POST', email);

  try {
    const response = await fetch(`${api}/usuarios/solicitaRecuperacaoSenha`, config)
      .catch(() => { throw new Error('Não foi possivel enviar o email de recuperação'); });
    const res = await response.json();

    return res;
  } catch {
    throw new Error('Não foi possivel atualizar a senha do usuário');
  }
};

const validateToken = async (data: string) => {
  const config = requestConfig('POST', { token: data });

  try {
    const response = await fetch(`${api}/usuarios/validacaoToken`, config);
    const res = await response.json();
    return res;
  } catch (error) {
    throw new Error('Token inválido');
  }
};

const passwordRecovery = async (data: RecoveryPassword) => {
  const config = requestConfig('PUT', data);
  try {
    const response = await fetch(`${api}/usuarios/recuperaSenha`, config)
      .catch(() => { throw new Error('Não foi possivel atualizar a senha do usuário'); });
    const res = await response.json();

    return res;
  } catch {
    throw new Error('Não foi possivel atualizar a senha do usuário');
  }
};

const userService = {
  userProfile,
  updateUserProfile,
  updateUserPassword,
  requestPasswordRecovery,
  validateToken,
  passwordRecovery
};

export default userService;
