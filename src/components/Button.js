import './Button.css'

const Button = ({cName, value})=> {
  const className = `button ${cName}`

  return <div className={className}>
    {value} 
  </div>
}

export default Button