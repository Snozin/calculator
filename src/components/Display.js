import "./Display.css"
import Log from "./Log"

const Display = ({ value, log }) => {
  return (
    <div className="display-container">
      <Log data={log} />
      <div className="display">{value}</div>
    </div>
  )
}

export default Display
