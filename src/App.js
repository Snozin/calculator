import "./App.css"
import Display from "./components/Display"
import ButtonPanel from "./components/ButtonPanel"

function App() {
  return (
    <>
      <header className="App-header">
        <h1>Seré una calculadora</h1>
        {/* 
        Ejemplo de Enlace
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <main>
        <Display />
        <ButtonPanel />
      </main>
    </>
  )
}

export default App
