import { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import useAuth from '@/hooks/useAuth';

import styles from '@/styles/publicLayout.module.scss';

type Props = {
  children: ReactNode
}

const PublicLayout = ({ children }: Props) => {
  const { loading, auth } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  if (loading || isLoading) {
    return <div className={styles['loading-spinner']} />;
  }

  if (auth) {
    setIsLoading(true);
    router.push('/dashboard');
  }

  return (
    <div>
      {children}
    </div>
  ); // renderiza as rotas privadas caso o usuário esteja autenticado
};

export default PublicLayout;
