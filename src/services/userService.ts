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

const userService = {
  userProfile
};

export default userService;
