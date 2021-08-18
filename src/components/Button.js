import { useState } from "react"
import "./Button.css"

const Button = ({ cName, value, digitHandler }) => {
  const className = `button ${cName}`

  const handleClick = () => {
    digitHandler({
      name:cName,
      value: value.toString()
    })
  }
  
  return (
    <div className={className} onClick={handleClick} >
      {value}
    </div>
  )
}

export default Button
