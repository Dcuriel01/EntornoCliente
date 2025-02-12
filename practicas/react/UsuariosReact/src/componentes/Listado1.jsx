/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'

const Listado1 = () => {
  const [mensajes,setMensajes] = useState([])
  const [usuarios,setUsuarios] = useState([])
  useEffect(()=>{
    fetch('http://localhost/servicioServidor/servicioProvincias/listadoMensajes.php')
    .then((respuesta) => respuesta.json()
      .then((x) => setMensajes(x))
    )
  },[])
  useEffect(()=>{
    fetch('http://localhost/servicioServidor/servicioProvincias/listadoUsuarios.php')
    .then((respuesta) => respuesta.json()
      .then((x) => setUsuarios(x))
    )
  },[])
  return (
    <div className='container-lg d-flex'>
      <div className='row'>
      <div className='col-lg-12'>
        <button type="button" className='btn btn-primary'>Boton</button>
      </div>
      </div>
      <div className='row'>
      <div className='col-lg-6'>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Usuario</th>
            <th>Fecha</th>
            <th>Mensaje</th>
          </tr>
        </thead>
        <tbody id='tabla'>
          {
            mensajes.map(msj=>(
              <tr key={msj.id}>
                <td>{msj.id}</td>
                <td>{msj.usuario}</td>
                <td>{msj.fecha}</td>
                <td>{msj.mensaje}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
      <div className='col-lg-6'>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Pwd</th>
          </tr>
        </thead>
        <tbody id='tabla'>
          {
            usuarios.map((user,i)=>(
              <tr key={i}>
                <td>{user.nombre}</td>
                <td>{user.email}</td>
                <td>{user.pwd}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
      </div>
    </div>
  )
}

export default Listado1