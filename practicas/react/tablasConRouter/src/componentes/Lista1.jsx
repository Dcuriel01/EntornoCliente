/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
function Lista1() {
  const [mensajes, setMensajes] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost/servicioServidor/servicioProvincias/listadoMensajes.php"
    ).then((respuesta) => respuesta.json().then((x) => setMensajes(x)));
  }, []);
  return (
    <>
      <div className="container-lg d-flex">
        <div className="row">
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Usuario</th>
                  <th>Fecha</th>
                  <th>Mensaje</th>
                </tr>
              </thead>
              <tbody id="tabla">
                {mensajes.map((msj) => (
                  <tr key={msj.id}>
                    <td>{msj.id}</td>
                    <td>{msj.usuario}</td>
                    <td>{msj.fecha}</td>
                    <td>{msj.mensaje}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </>
  );
}

export default Lista1;
