import { useState } from "react"
import './Display.css'

const Display = (props) => {
  const [state, setState] = useState(0)

  return <div className='display'>{state}</div>
}

export default Display