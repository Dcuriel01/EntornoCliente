/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
export default function Listado1({ coches }) {
  return (
    <>
      
      <div className="container-lg d-flex">
        <div className="row">
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1>Verdes mayores a 10 000€</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Color</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Consumo</th>
                  <th>Precio</th>
                  <th>Km</th>
                  <th>Tipo Motor</th>
                </tr>
              </thead>
              <tbody id="tabla">
              {coches.filter(c => c.color=='Green' && c.precio > 10000)
              .sort((a,b) => a.precio - b.precio)
              .map((c,i) => (
              <tr key={i}>
                <td>{c.color}</td>
                <td>{c.marca}</td>
                <td>{c.modelo}</td>
                <td>{c.consumo}</td>
                <td>{c.precio}</td>
                <td>{c.kms}</td>
                <td>{c.tipoMotor}</td>
              </tr>
            ))}
              </tbody>
            </table>
          </div>
        </div>
    </>
  );
}
