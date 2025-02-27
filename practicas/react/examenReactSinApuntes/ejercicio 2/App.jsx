import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [alumnos, setAlumnos] = useState([]);
  
  useEffect(() => {
    fetch("daw.json")
      .then((response) => response.json())
      .then((data) => setAlumnos(data));
  }, []);
  let mejorAlumno = "";
  let mejorAlumnoN = "";
  let alumnosAprobados = [];
  let alumnosUnaSuspensa = [];
  let alumnosUnaDosSuspensa = [];
  function buscarMejorAlumno() {
    alumnos.forEach((a) => {
      mejorAlumno = alumnos[0];
      let mejorAlumnoM = ((Number(mejorAlumno.nota1) +Number(mejorAlumno.nota2) +Number(mejorAlumno.nota3) +Number(mejorAlumno.nota4) +Number(mejorAlumno.nota5) +Number(mejorAlumno.nota6)) / 6);
      let aM =((Number(a.nota1)+Number(a.nota2) + Number(a.nota3) + Number(a.nota4) + Number(a.nota5) + Number(a.nota6)) / 6);
      if (aM > mejorAlumnoM) {
        mejorAlumno = a;
      }
    });
    mejorAlumnoN = mejorAlumno.alumno;
  }
  function aprobados() {
    alumnos.forEach((a) => {
      if (
        Number(a.nota1) >= 5 &&
        Number(a.nota2) >= 5 &&
        Number(a.nota3) >= 5 &&
        Number(a.nota4) >= 5 &&
        Number(a.nota5) >= 5 &&
        Number(a.nota6)
      ) {
        alumnosAprobados.push(a);
      }
    });
  }
  function unaSuspensa(){
    alumnos.forEach((a) => {
      let contador = 0
      if (Number(a.nota1) < 5) {
        contador ++
      }
      if (Number(a.nota2) < 5) {
        contador ++
      }
      if (Number(a.nota3) < 5) {
        contador ++
      }
      if (Number(a.nota4) < 5) {
        contador ++
      }
      if (Number(a.nota5) < 5) {
        contador ++
      }
      if (Number(a.nota6) < 5) {
        contador ++
      }
      if (contador==1) {
        alumnosUnaSuspensa.push(a)
      }
    });
  }
  function media5UnaDosSuspensas(){
    alumnos.forEach((a) => {
      let contador = 0
      if (Number(a.nota1) < 5) {
        contador ++
      }
      if (Number(a.nota2) < 5) {
        contador ++
      }
      if (Number(a.nota3) < 5) {
        contador ++
      }
      if (Number(a.nota4) < 5) {
        contador ++
      }
      if (Number(a.nota5) < 5) {
        contador ++
      }
      if (Number(a.nota6) < 5) {
        contador ++
      }
      if ((contador==1||contador==2)&&Number(a.nota1) +
      Number(a.nota2) +
      Number(a.nota3) +
      Number(a.nota4) +
      Number(a.nota5) +
      Number(a.nota6) / 6 >= 5) {
        alumnosUnaDosSuspensa.push(a)
      }
    });
  }
  buscarMejorAlumno()
  aprobados()
  unaSuspensa()
  media5UnaDosSuspensas()
  return (
    <>
      <h1>Mejor alumno:{mejorAlumnoN}</h1>
      <h1>Alumnos Con todo aprobado</h1>
      <ul>
        {alumnosAprobados.map((a,i)=> {
          return(
          <li key={i}>{a.alumno}</li>
          )
        })}
      </ul>
      <h1>Alumnos con una suspensa</h1>
      <ul>
        {alumnosUnaSuspensa.map((a,i)=> {
          return(
          <li key={i}>{a.alumno}</li>
          )
        })}
      </ul>
      <h1>Alumnos con una o dos suspensas pero media aprobada</h1>
      <ul>
        {alumnosUnaDosSuspensa.map((a,i)=> {
          return(
          <li key={i}>{a.alumno}</li>
          )
        })}
      </ul>

    </>
  );
}

export default App;
