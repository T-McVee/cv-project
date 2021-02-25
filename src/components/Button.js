import '../styles/button.css'

const Button = (props) => {
  const { btnText, onClick } = props
  
  return (
    <button className="btn" type="submit" onClick={(e) => onClick(e)}>{btnText}</button>
  )
}

export default Button