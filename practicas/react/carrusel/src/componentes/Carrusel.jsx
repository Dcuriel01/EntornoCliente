/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function Carrusel() {
  const [imagenes, setImagenes] = useState([]);
  useEffect(() => {
    fetch(
      "http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php"
    ).then((respuesta) => respuesta.json().then((x) => setImagenes(x)));
  }, []);
  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Galería de Imágenes</h2>
        <div className="row">
          {imagenes.map((img, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <div className="card shadow-sm">
                  <img src={img.imagen} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{img.texto}</h5>
                    <a href="" className="btn btn-primary">{img.subtexto}</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Carrusel;
