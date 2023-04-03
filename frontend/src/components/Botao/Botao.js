import "./Botao.css"

const Botao = ({children, disabled}) => {
  return (
    <button disabled={disabled}>
        {children}
    </button>
  )
}

export default Botao