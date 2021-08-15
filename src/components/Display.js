import { useState, useEffect } from "react"
import './Display.css'

const Display = ({value}) => {
  const [state, setState] = useState(0)
  useEffect(()=>{
    setState(value)
  },[value])
  return <div className='display'>{state}</div>
}

export default Display