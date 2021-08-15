import "./ButtonPanel.css"
import Button from "./Button"
import buttons from "../utils/setButtons"

const ButtonPanel = () => {
  return (
    <div className="panel">
      {buttons.map(({ name, value }) => {
        return <Button cName={name} value={value} />
      })}
    </div>
  )
}

export default ButtonPanel
