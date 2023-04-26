import { animation } from '@/types/Interface';
import styles from '@/styles/auth.module.scss';

const getNextClassName = (
  {
    etapa,
    setAnimationStep1,
    setAnimationStep2,
    setAnimationStep3
  } : animation
) => {
  if (etapa === 1) {
    setAnimationStep1(styles['animacao-sair']);
    setAnimationStep2(styles['animacao-entrar']);
    setTimeout(() => {
      setAnimationStep1(styles['']);
    }, 600);
  } else if (etapa === 2) {
    setAnimationStep2(styles['animacao-sair']);
    setAnimationStep3(styles['animacao-entrar']);
    setTimeout(() => {
      setAnimationStep2(styles['']);
    }, 600);
  }
};

const getPreviousClassName = (
  {
    etapa,
    setAnimationStep1,
    setAnimationStep2,
    setAnimationStep3
  } : animation
) => {
  if (etapa === 2) {
    setAnimationStep1(styles['animacao-voltar-entrar']);
    setAnimationStep2(styles['animacao-voltar-sair']);
    setTimeout(() => {
      setAnimationStep2(styles['']);
    }, 600);
  } else if (etapa === 3) {
    setAnimationStep2(styles['animacao-voltar-entrar']);
    setAnimationStep3(styles['animacao-voltar-sair']);
    setTimeout(() => {
      setAnimationStep3(styles['']);
    }, 600);
  }
};

export { getNextClassName, getPreviousClassName };
