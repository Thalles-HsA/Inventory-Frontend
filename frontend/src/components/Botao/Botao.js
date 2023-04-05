import "./Botao.css"

const Botao = ({children, disabled, onClick, type, className}) => {
  return (
    <button disabled={disabled} type={type} onClick={onClick} className={className}>
        {children}
    </button>
  )
}

export default Botao