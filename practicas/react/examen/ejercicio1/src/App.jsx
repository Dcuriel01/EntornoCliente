import React from 'react'
import './App.css'
import Cuerpo from './componentes/Cuerpo'

function App() {
  const [vectorNumRandom, setVectorNumRandom] = React.useState([])
  const generarNumerosRandom = () => {
      const vector = Array.from({length: 50}, () => Math.floor(Math.random() * 1000))
      setVectorNumRandom(vector)
  }
  return (
    <>
     <h1>Generador de numeros aleatorios</h1>
     <button onClick={generarNumerosRandom}>Generar vector</button>
     <Cuerpo vectorNumRandom={vectorNumRandom}/>
    </>
  )
}

export default App
