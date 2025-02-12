/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Listado2 = () => {
  const [datos, setDatos] = useState([]);
  const [url, setUrl] = useState("");
  const [posicion, setPosicion] = useState(0);
  const listadoDatos = (url, posicion) => {
    setUrl(url);
    setPosicion(posicion);
  };

  useEffect(() => {
    fetch(url).then(respuesta => respuesta.json().then(x => setDatos(x)))
  ,[]})

  return (
    <>
      <div className="container-lg d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-info m-2"
          onClick={() =>
            listadoDatos(
              "http://localhost/servicioServidor/servicioProvincias/listadoUsuarios.php",
              1
            )
          }
        >
          Listado usuarios
        </button>
        <button
          type="button"
          className="btn btn-warning m-2"
          onClick={() =>
            listadoDatos(
              "http://localhost/servicioServidor/servicioProvincias/listadoMensajes.php",
              2
            )
          }
        >
          Listado mensajes
        </button>
        <button
          type="button"
          className="btn btn-danger m-2"
          onClick={() =>
            listadoDatos(
              "http://localhost/servicioServidor/servicioProvincias/listadoProvincias.php",
              3
            )
          }
        >
          Listado provincias
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={() =>
            listadoDatos(
              "http://localhost/servicioServidor/servicioProvincias/listadoAlturas.php",
              4
            )
          }
        >
          Listado alturas
        </button>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <table className="table">
            <thead>
              {posicion == 1 && (
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Pwd</th>
                </tr>
              )}
              {posicion == 2 && (
                <tr>
                  <th>Id</th>
                  <th>Usuario</th>
                  <th>Fecha</th>
                  <th>Mensaje</th>
                </tr>
              )}
              {posicion == 3 && (
                <tr>
                  <th>Nombre</th>
                  <th>PA</th>
                  <th>PB</th>
                  <th>PC</th>
                  <th>PD</th>
                </tr>
              )}
              {posicion == 4 && (
                <tr>
                  <th>Nombre</th>
                  <th>Sit Alt Max</th>
                  <th>Alt Max</th>
                  <th>Sit Alt Min</th>
                  <th>Alt Min</th>
                </tr>
              )}
            </thead>
            <tbody>
              {posicion == 1 &&
                datos.map((dat, i) => (
                  <tr key={i}>
                    <td>{dat.nombre}</td>
                    <td>{dat.email}</td>
                    <td>{dat.pwd}</td>
                  </tr>
                ))}
              {posicion == 2 &&
                datos.map((dat, i) => (
                  <tr key={i}>
                    <td>{dat.id}</td>
                    <td>{dat.usuario}</td>
                    <td>{dat.fecha}</td>
                    <td>{dat.mensaje}</td>
                  </tr>
                ))}
              {posicion == 3 &&
                datos.map((dat, i) => (
                  <tr key={i}>
                    <td>{dat.nombreProvincia}</td>
                    <td>{dat.votosPA}</td>
                    <td>{dat.votosPB}</td>
                    <td>{dat.votosPC}</td>
                    <td>{dat.votosPD}</td>
                  </tr>
                ))}
              {posicion == 4 &&
                datos.map((dat, i) => (
                  <tr key={i}>
                    <td>{dat.Provincia}</td>
                    <td>{dat.SituacionAltMax}</td>
                    <td>{dat.AlturaMaxima}</td>
                    <td>{dat.SituacionAltMin}</td>
                    <td>{dat.AlturaMinima}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Listado2;
