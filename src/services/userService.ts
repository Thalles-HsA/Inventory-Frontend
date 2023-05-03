import { UpdateUser } from '@/types/Interface';
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

const userService = {
  userProfile,
  updateUserProfile
};

export default userService;
