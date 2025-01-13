/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Pie() {
    const [num1, setNum1] = useState(0);
    const generarRandom = () => {
        setNum1(Number(Math.floor(Math.random()*100)))
      };
  return (
    <>
    <div className="app">
    <h2>Pie pagina</h2>
    <h3>Numero aleatorio</h3>
    <h1 className="estilo_contador">{num1}</h1>
    <button className="estilo_decremento" onClick={generarRandom}>Generar</button>
    </div>
    </>
  )
}

export default Pie