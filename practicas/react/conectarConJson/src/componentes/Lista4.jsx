/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function Lista4() {
    const [datos, setDatos] = useState([]); // Estado para guardar los datos
    const [carga, setCarga] = useState(true); // Estado para manejar el loading
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        const fetchData = async () => {
          //función que ejecuta el fetch
          try {
            setCarga(true); // Inicia el loading
            const response = await fetch(
              "http://moralo.atwebpages.com/menuAjax/ciudades/getCiudades.php"
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
      <h2>Pueblos</h2>

      <table>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Poblacion</th>
          <th>Densidad</th>
          <th>Extension</th>
        </tr>

        {datos.map((pueblo) => {
          return (
            <tr key={pueblo.id}>
              <td>{pueblo.id}</td>
              <td>{pueblo.nombre}</td>
              <td>{pueblo.poblacion}</td>
              <td>{pueblo.densidad}</td>
              <td>{pueblo.extension}</td>
            </tr>
          );
        })}
      </table>
    </>
  )
}

export default Lista4