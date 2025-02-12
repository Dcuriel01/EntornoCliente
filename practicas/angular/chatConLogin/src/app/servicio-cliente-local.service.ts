import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioClienteLocalService {

  constructor(private http: HttpClient) { }

insertarUsuario(usuario:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>('http://localhost/servicioServidor/serviciosCliente/insertarUsuario.php',usuario);
}

leerMensajes(){
  return this.http.get<Mensaje[]>('http://localhost/servicioServidor/serviciosCliente/listadoMensajes.php')
}

escribirMensaje(mensaje:Mensaje):Observable<Mensaje>{
  return this.http.post<Mensaje>('http://localhost/servicioServidor/serviciosCliente/insertarmensaje.php',mensaje)
}

logeo (usuario:Usuario):Observable<Object>{
  return this.http.post<Object>('http://localhost/servicioServidor/serviciosCliente/login.php',usuario)
}

escribirMensajeP(mensaje:Mensaje):Observable<Mensaje>{
  return this.http.post<Mensaje>('http://localhost/servicioServidor/serviciosCliente/insertarmensajep.php',mensaje)
}

leerMensajesP(){
  return this.http.get<Mensaje[]>('http://localhost/servicioServidor/serviciosCliente/listadoMensajesP.php?usuario='+sessionStorage.getItem('Email'))
}

cambiarPWD(usuario:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>('http://localhost/servicioServidor/serviciosCliente/editarPwd.php',usuario);
}

obtenerUsuarios(){
  return this.http.get<Usuario[]>('http://localhost/servicioServidor/serviciosCliente/listadoUsuarios.php');
}

}
