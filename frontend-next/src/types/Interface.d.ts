export interface Usuario {
  email: string;
  senha: string;
  confirmarSenha: string;
  tipo: string;
  cnpj?: string;
  razaoSocial?: string;
  nome?: string;
  cpf?: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

export interface UsuarioLogin {
  email: string;
  senha: string;
}

export interface AuthState {
  usuario: Usuario | null;
  error: boolean | null;
  success: boolean;
  loading: boolean;
}

// Message.tsx

interface MessageProps {
  msg: string[];
  type: string;
}

// Botão.tsx

export interface BotaoProps {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

// useAuth.ts

interface UseAuthReturnType {
  auth: boolean;
  loading: boolean;
}