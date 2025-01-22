/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function Lista3() {
    const [datos, setDatos] = useState([]); // Estado para guardar los datos
    const [carga, setCarga] = useState(true); // Estado para manejar el loading
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        const fetchData = async () => {
          //función que ejecuta el fetch
          try {
            setCarga(true); // Inicia el loading
            const response = await fetch(
              "http://moralo.atwebpages.com/menuAjax/dam1/getDam1.php"
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
      <h2>Alumnos notas</h2>

      <table>
        <tr>
          <th>Id</th>
          <th>Alumno</th>
          <th>Nota 1</th>
          <th>Nota 2</th>
          <th>Nota 3</th>
          <th>Nota 4</th>
          <th>Nota 5</th>
          <th>Nota 6</th>
        </tr>

        {datos.map((alum) => {
          return (
            <tr key={alum.id}>
              <td>{alum.id}</td>
              <td>{alum.alumno}</td>
              <td>{alum.nota1}</td>
              <td>{alum.nota2}</td>
              <td>{alum.nota3}</td>
              <td>{alum.nota4}</td>
              <td>{alum.nota5}</td>
              <td>{alum.nota6}</td>
            </tr>
          );
        })}
      </table>
    </>
  )
}

export default Lista3