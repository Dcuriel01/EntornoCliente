/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function Lista1() {
  const [datos, setDatos] = useState([]); // Estado para guardar los datos
  const [carga, setCarga] = useState(true); // Estado para manejar el loading
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchData = async () => {
      //función que ejecuta el fetch
      try {
        setCarga(true); // Inicia el loading
        const response = await fetch(
          "http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php"
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
      <h2>Tabla de Información</h2>

      <table>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Cargo</th>
          <th>Edad</th>
        </tr>

        {datos.map((emp) => {
          return (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.nombre}</td>
              <td>{emp.direccion}</td>
              <td>{emp.cargo}</td>
              <td>{emp.edad}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Lista1;
