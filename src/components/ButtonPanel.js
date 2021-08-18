import "./ButtonPanel.css"
import Button from "./Button"
import buttons from "../utils/setButtons"
import { useState, useEffect } from "react"
// import logic from "../utils/logic"

const ButtonPanel = (props) => {
  const { digitHandler } = props
  return (
    <div className="panel">
      {buttons.map(({ name, value }) => {
        return (
          <Button
            cName={name}
            key={value}
            digitHandler={digitHandler}
            value={value}
          />
        )
      })}
    </div>
  )
}

export default ButtonPanel
