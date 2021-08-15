import "./ButtonPanel.css"
import Button from "./Button"
import buttons from "../utils/setButtons"

const ButtonPanel = ({status}) => { 
  return (
    <div className="panel">
      {buttons.map(({ name, value }) => {
        return <Button cName={name} value={value} status={status}/>
      })}
    </div>
  )
}

export default ButtonPanel
