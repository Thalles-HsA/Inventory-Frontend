import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// Type
import { AuthState, UseAuthReturnType } from '@/types/Interface';

const useAuth = (): UseAuthReturnType => {
  const usuarioAuth = useSelector<RootState, AuthState>((state: RootState) => state.auth);
  const { usuario } = usuarioAuth || {};

  const [auth, setAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (usuario !== undefined) {
      setAuth(!!usuario);
    }
    setLoading(false);
  }, [usuario]);

  return { auth, loading };
};

export default useAuth;
