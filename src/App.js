import "./App.css"
import Display from "./components/Display"
import ButtonPanel from "./components/ButtonPanel"
import { useState, useEffect } from "react"

function App() {
  const [value, setValue] = useState(0)
  const getButtonValue = (val) => {
    setValue(val)
  }

  useEffect(()=>{
    console.log(value)
  },[value])
  
  return (
    <>
      <header className="App-header">
        <h1>Seré una calculadora</h1>
      </header>
      <main>
        <Display value={value}/>
        <ButtonPanel status={getButtonValue}/>
      </main>
    </>
  )
}

export default App
