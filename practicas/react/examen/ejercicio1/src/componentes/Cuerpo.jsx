/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

function Cuerpo({vectorNumRandom}) {
  
    const valorMaximo = Math.max(...vectorNumRandom)
    const valorMinimo = Math.min(...vectorNumRandom)
    const media = vectorNumRandom.reduce((a, b) => a + b) / vectorNumRandom.length
    let hayRepeticiones = false
    for (let i = 0; i < vectorNumRandom.length; i++) {
        for (let j = i + 1; j < vectorNumRandom.length; j++) {
            if (vectorNumRandom[i] === vectorNumRandom[j]) {
                hayRepeticiones = true
                break
            }
        }
    }

  
    return (
      <>
      <div>
          <h3>Vector</h3>
          <p>{vectorNumRandom.map((valor,index)=>{(<span key={index}>{valor}</span>)})}</p>
          <p>{vectorNumRandom.join('-')}</p>
          <h3>Estadisticas</h3>
          <h4>Valor maximo</h4>
          <p>{valorMaximo}</p>
          <h4>Valor minimo</h4>
          <p>{valorMinimo}</p>
          <h4>Media</h4>
          <p>{media}</p>
          <h4>Hay repeticones</h4>
      </div>
      </>
    )
}

export default Cuerpo