/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function Lista3() {
const [prov, setProv] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost/servicioServidor/servicioProvincias/listadoProvincias.php"
    ).then((respuesta) => respuesta.json().then((x) => setProv(x)));
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
                  <th>Nombre</th>
                  <th>PA</th>
                  <th>PB</th>
                  <th>PC</th>
                  <th>PD</th>
                </tr>
              </thead>
              <tbody id="tabla">
                {prov.map((p,i) => (
                  <tr key={i}>
                    <td>{p.nombreProvincia}</td>
                    <td>{p.votosPA}</td>
                    <td>{p.votosPB}</td>
                    <td>{p.votosPC}</td>
                    <td>{p.votosPD}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </>
  );
}

export default Lista3