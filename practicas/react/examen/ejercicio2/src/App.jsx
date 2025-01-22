
import { useState } from "react";
import "./App.css";
import Ejercicio2 from "./componentes/Ejercicio2";

function App() {
  const [vector1Random, setVector1Random] = useState([])
  const [vector2Random, setVector2Random] = useState([])

  const generarNumeroRandom1 = () => {
    const vectorAux = [];
    while (vectorAux.length < 6) {
      let numero = Math.floor(Math.random() * 50);
      if (!vectorAux.includes(numero)) {
        vectorAux.push(numero);
      }
    }
    setVector1Random(vectorAux);
  }
  const generarNumeroRandom2 = () => {
    const vectorAux = [];
    while (vectorAux.length < 6) {
      let numero = Number(Math.floor(Math.random() * 50));
      if (!vectorAux.includes(numero)) {
        vectorAux.push(numero);
      }
    }
    setVector2Random(vectorAux);
  }
  return (
    <>
      <h1>Comparador de vectores</h1>
      <button onClick={generarNumeroRandom1}>Generar vector 1</button>
      <button onClick={generarNumeroRandom2}>Generar vector 2</button>
      <Ejercicio2 vector1={vector1Random} vector2={vector2Random}/>
    </>
  )
}

export default App;
