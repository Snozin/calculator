import "./Button.css"

const Button = ({ cName, value }) => {
  const className = `button ${cName}`
  const handleClick = () => {
    console.log("Click! ->", value)
  }
  return (
    <div className={className} onClick={handleClick}>
      {value}
    </div>
  )
}

export default Button
