/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function Lista2() {
 const [usuarios, setUsuarios] = useState([]);
   useEffect(() => {
     fetch(
       "http://localhost/servicioServidor/servicioProvincias/listadoUsuarios.php"
     ).then((respuesta) => respuesta.json().then((x) => setUsuarios(x)));
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
                   <th>Email</th>
                   <th>Pwd</th>
                 </tr>
               </thead>
               <tbody id="tabla">
                 {usuarios.map((us,i) => (
                   <tr key={i}>
                     <td>{us.nombre}</td>
                     <td>{us.email}</td>
                     <td>{us.pwd}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
     </>
   );
}

export default Lista2