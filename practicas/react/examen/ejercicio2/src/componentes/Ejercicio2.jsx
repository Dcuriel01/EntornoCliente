/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Ejercicio2 ({ vector1, vector2 }){
  let contadorRepedidos = 0;
  vector1.forEach(element => {
    if (vector2.includes(element)){
      contadorRepedidos++;
    }
  });
  return (
    <>
    <div>
      <p>{vector1.join('-')}</p>
    </div>
    <div>
      <p>{vector2.join('-')}</p>
    </div>
    <div>
      <h4>Contador repetidos</h4>
      <p>{contadorRepedidos}</p>
    </div>
  </>
  )
}

export default Ejercicio2