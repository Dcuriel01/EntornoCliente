/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Menu() {
  const [num1, setNum1] = useState(0);
  const [contador, setContador] = useState(0);
  const obtenerNumero = (e) => {
    setNum1(Number(e.target.value));
  };
  const incrementar1 = () => {
    setContador(contador + 1);
  };
  const incrementar2 = () => {
    setContador(contador + num1);
  };
  const decrementar1 = () => {
    setContador(contador - 1);
  };
  const decrementar2 = () => {
    setContador(contador - num1);
  };
  return (
    <>
      <div className="app">
        <h2>Contador</h2>
        <div className="estilo_contador">{contador}</div>
        <button className="estilo_incremento" onClick={incrementar1}>
          +
        </button>
        <button className="estilo_decremento" onClick={decrementar1}>
          -
        </button>
        <br />
        <input
          type="number"
          value={num1}
          onChange={obtenerNumero}
          placeholder="incrementador"
        />
        <br />
        <button className="estilo_incremento" onClick={incrementar2}>
          inc
        </button>
        <button className="estilo_decremento" onClick={decrementar2}>
          dec
        </button>
      </div>
    </>
  );
}

export default Menu;
