import "./App.css"
import Display from "./components/Display"
import ButtonPanel from "./components/ButtonPanel"
import { useState } from "react"
import calculate from "./utils/calculate"

function App() {
  const [log, setLog] = useState("0")
  const [newNumber, setNewNumber] = useState("0")
  const [endNumber, setEndNumber] = useState("0")
  const [operation, setOperation] = useState(null)

  const digitHandler = ({ name, value }) => {
    if (value === "C") {
      setLog("0")
      setNewNumber("0")
      setEndNumber("0")
      setOperation(null)
    } else if (value === ".") {
      setNewNumber((prev) => (prev.includes(".") ? prev : prev + value))
    } else if (name.includes("num")) {
      setNewNumber((prev) => (prev === "0" ? value : prev + value))
    } else if (
      value === "+" ||
      value === "-" ||
      value === "X" ||
      value === "/"
    ) {
      setEndNumber(newNumber)
      setOperation(value)
      setLog(newNumber + value)
      setNewNumber("0")
    } else if (value === "=" && endNumber !== "0" && operation) {
      setNewNumber(calculate(endNumber, newNumber, operation))
      setLog((prev) => prev + newNumber)
    }
  }

  return (
    <>
      <header className="App-header">
        <h1>Seré una calculadora</h1>
      </header>
      <main>
        {/* <Log data={log}/> */}
        <Display value={newNumber} log={log}/>
        <ButtonPanel digitHandler={digitHandler} />
      </main>
    </>
  )
}

export default App
