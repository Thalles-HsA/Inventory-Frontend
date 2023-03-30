import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { usuario } = useSelector((state) => state.auth);

  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (usuario) {
      setAuth(true);
    } else {
      setAuth(false);
    }

    setLoading(false);
  }, [usuario]);

  return { auth, loading };
};