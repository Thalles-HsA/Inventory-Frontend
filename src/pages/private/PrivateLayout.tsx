import { ReactNode, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../hooks/useAuth'

import styles from "../../styles/publicLayout.module.scss";

type Props = {
  children: ReactNode
}

const PrivateLayout = ({ children }: Props) => {
  const { loading, auth } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  if (loading || isLoading) {
    return <div className={styles['loading-spinner']}></div>
  }

  if (!auth) {
    setIsLoading(true);
    router.push("/login");
  }

  return <div>{children}</div> // renderiza as rotas privadas caso o usuário esteja autenticado
}

export default PrivateLayout
