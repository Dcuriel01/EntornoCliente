/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Listado2({ coches }) {
  let masCaro = coches[0];
  coches.forEach((c) => {
    if (c.precio > masCaro.precio) {
      masCaro = c;
    }
  });
  return (
    <div className="container-lg d-flex">
      <div className="row">
        <h1>Mas caro</h1>
        <h3>
          {masCaro.color}-{masCaro.marca}-{masCaro.modelo}-{masCaro.consumo}-
          {masCaro.precio}-{masCaro.kms}-{masCaro.tipoMotor}
        </h3>
      </div>
    </div>
  );
}
