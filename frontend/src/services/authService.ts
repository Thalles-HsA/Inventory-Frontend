import { api, requestConfig } from "../utils/config";

interface Usuario {
  name: string;
  email: string;
  password: string;
}

// Registrando usuário
const register = async (data: any): Promise<Usuario | undefined> => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/usuarios/cadastro", config)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    if (res && res.token) {
      localStorage.setItem("usuario", JSON.stringify(res));
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Logout de usuario
const logout = () => {
  localStorage.removeItem("usuario");
};

//login de usuario
const login = async (data: any): Promise<Usuario | undefined> => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/usuarios/login", config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res && res.token) {
      localStorage.setItem("usuario", JSON.stringify(res));
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
