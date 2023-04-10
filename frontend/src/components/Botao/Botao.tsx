import "./Botao.css";

//Types
import { BotaoProps } from "../../types/Interface"

const Botao: React.FC<BotaoProps> = ({ children, disabled = false, onClick, type = "button", className }) => {

  return (
    <button disabled={disabled} type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Botao;
