import styles from '@/styles/Botao.module.scss';

import { BotaoProps } from '@/types/Interface';

const Botao: React.FC<BotaoProps> = ({ children, disabled = false, onClick, type = 'button', className = '' }) => (

  <button
    disabled={disabled}
    // eslint-disable-next-line react/button-has-type
    type={type}
    onClick={onClick}
    className={`${styles.botao} ${styles[className]}`}
  >
    {children}
  </button>
);

export default Botao;
