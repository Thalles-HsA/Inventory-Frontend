import { api, requestConfig } from '@/utils/config';
import { Usuario, UsuarioLogin } from '@/types/Interface';

const cadastroDeUsusario = async (data: Usuario) => {
  const config = requestConfig('POST', data);
  try {
    const res = await fetch(`${api}/usuarios/cadastro`, config)
      .then((response) => response.json())
      .catch(() => { throw new Error('Não foi possivel realizar o cadastro'); });
    if (res && res.token) {
      localStorage.setItem('usuario', JSON.stringify(res));
    }
    return res;
  } catch {
    throw new Error();
  }
};

const logoutDeUsuario = () => localStorage.removeItem('usuario');

const loginDeUsuario = async (data: UsuarioLogin) => {
  const config = requestConfig('POST', data);
  try {
    const res = await fetch(`${api}/usuarios/login`, config)
      .then((response) => response.json())
      .catch(() => { throw new Error('Não foi possivel realizar o login'); });
    if (res && res.token) {
      localStorage.setItem('usuario', JSON.stringify(res));
    }
    return res;
  } catch {
    throw new Error();
  }
};

const authService = {
  cadastroDeUsusario,
  logoutDeUsuario,
  loginDeUsuario
};

export default authService;
