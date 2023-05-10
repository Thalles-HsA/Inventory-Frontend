/* eslint-disable react/button-has-type */
import styles from '@/styles/botao.module.scss';

import { BotaoProps } from '@/types/Interface';

const Botao: React.FC<BotaoProps> = ({ children, disabled = false, onClick, type = 'button', className = 'botao-proximo' }) => (

  <button
    disabled={disabled}
    type={type}
    onClick={onClick}
    className={`${styles.botao} ${styles[className]}`}
    data-testid="button"
  >
    {children}
  </button>
);

export default Botao;
