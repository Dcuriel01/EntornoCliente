import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //   useEffect(() => {
  //     let intervalo
  //     intervalo=setInterval(() => {
  //       console.log('hola')
  //     }, 100)
  // }, []);
  const provincias = [
    "Almeria.png",
    "Andalucia.png",
    "Avila.png",
    "Badajoz.png",
    "Caceres.png",
    "Cadiz.png",
    "CastillaLeon.png",
    "Cordoba.png",
    "Extremadura.png",
    "Huelva.png",
    "Jaen.png",
    "Leon.png",
    "Palencia.png",
  ];
  const nombre = [
    "Almeria",
    "Andalucia",
    "Avila",
    "Badajoz",
    "Caceres",
    "Cadiz",
    "CastillaLeon",
    "Cordoba",
    "Extremadura",
    "Huelva",
    "Jaen",
    "Leon",
    "Palencia",
  ];
  let nR1 = 0;
  let nR2 = 0;
  let nR3 = 0;
  let nR4 = 0;
  let nR5 = 0;

  generarRandoms()
  function generarRandoms() {
    nR1 = generarRandom();
    nR2 = generarRandom();
    nR3 = generarRandom();
    nR4 = generarRandom();
    nR5 = generarRandom();
  }
  function generarRandom() {
    return Math.floor(Math.random() * 13);
  }
  function Comprobar(foto){
    if (foto == nR5) {
      alert('Has acertado')
    }else{
      alert('Has fallado')
    }

  }
  return (
    <>
      <div>
        <h3>Provincia Buscada:{nombre[nR5]}</h3>
        <img src={"http://localhost/imagenes/" + provincias[nR1]} alt="" onClick={() => Comprobar(nR1)} />
        <img src={"http://localhost/imagenes/" + provincias[nR2]} alt="" onClick={() => Comprobar(nR2)}/>
        <img src={"http://localhost/imagenes/" + provincias[nR3]} alt="" onClick={() => Comprobar(nR3)}/>
        <img src={"http://localhost/imagenes/" + provincias[nR4]} alt="" onClick={() => Comprobar(nR4)}/>
      </div>
    </>
  );
}

export default App;
