/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function Lista2() {
  const [datos, setDatos] = useState([]); // Estado para guardar los datos
  const [carga, setCarga] = useState(true); // Estado para manejar el loading
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchData = async () => {
      //función que ejecuta el fetch
      try {
        setCarga(true); // Inicia el loading
        const response = await fetch(
          "http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php"
        ); //carga del json
        if (!response.ok) {
          setError("no devuelve datos");
        }
        const result = await response.json(); //cargar los datos ok en una variable
        setDatos(result); // Guarda los datos en el estado
      } catch (err) {
        setError(err.message); // Guarda el mensaje de error
      } finally {
        setCarga(false); // Finaliza el loading
      }
    };
    fetchData(); // Llama a la función para obtener los datos
  }, []);
  return (
    <>
      <h2>Tabla de Provincias</h2>

      <table>
        <tr>
          <th>Nombre</th>
          <th>Votos PA</th>
          <th>Votos PB</th>
          <th>Votos PC</th>
          <th>Votos PD</th>
          <th>Representantes</th>
        </tr>

        {datos.map((prov,index) => {
          return (
            <tr key={index}>
              <td>{prov.nombreProvincia}</td>
              <td>{prov.votosPA}</td>
              <td>{prov.votosPB}</td>
              <td>{prov.votosPC}</td>
              <td>{prov.votosPD}</td>
              <td>{prov.Representantes}</td>
            </tr>
          );
        })}
      </table>
    </>
  )
}

export default Lista2