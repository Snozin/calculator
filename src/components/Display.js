import "./Display.css"
import { useState, useEffect } from "react"
import Log from "./Log"

const Display = ({ value, log }) => {
  const [state, setState] = useState(0)

  // TODO Recibir los valores de los botones  y operar con ellos

  // useEffect(() => {
  //   setState(value)
  // }, [value])

  return (
    <div className="display-container">
      <Log data={log} />
      <div className="display">{value}</div>
    </div>
  )
}

export default Display
