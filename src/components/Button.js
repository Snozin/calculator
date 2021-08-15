import "./Button.css"

const Button = ({ cName, value, status }) => {
  const className = `button ${cName}`
  const handleClick = () => {
    status(value)
  }

  
  return (
    <div className={className} onClick={handleClick}>
      {value}
    </div>
  )
}

export default Button
