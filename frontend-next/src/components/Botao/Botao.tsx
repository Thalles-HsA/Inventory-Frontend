import styles from "./Botao.module.scss";

//Types
import { BotaoProps } from "../../types/Interface"

const Botao: React.FC<BotaoProps> = ({ children, disabled = false, onClick, type = "button", className = ""}) => {

  return (
    <button disabled={disabled} type={type} onClick={onClick} className={`${styles.botao} ${styles[className]}`}>
      {children}
    </button>
  );
};

export default Botao;
