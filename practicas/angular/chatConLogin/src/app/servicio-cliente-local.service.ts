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
  return this.http.post<Usuario>('http://localhost/servicioServidor/serviciosChat/insertarUsuario.php',usuario);
}

leerMensajes(){
  return this.http.get<Mensaje[]>('http://localhost/servicioServidor/serviciosChat/listadoMensajes.php')
}

escribirMensaje(mensaje:Mensaje):Observable<Mensaje>{
  return this.http.post<Mensaje>('http://localhost/servicioServidor/serviciosChat/insertarMensaje.php',mensaje)
}

logeo (usuario:Usuario):Observable<Usuario[]>{
  return this.http.get<Usuario[]>('http://localhost/servicioServidor/serviciosChat/logeo.php?email='+usuario.email+'&pwd='+usuario.pwd)
}

escribirMensajeP(mensaje:Mensaje):Observable<Mensaje>{
  return this.http.post<Mensaje>('http://moralo.atwebpages.com/menuAjax/chat/AltaMensajeP.php',mensaje)
}

leerMensajesP(){
  return this.http.get<Mensaje[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesP.php?usuario='+sessionStorage.getItem('Email'))
}

cambiarPWD(usuario:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/EditarUsuario.php',usuario);
}

obtenerUsuarios(){
  return this.http.get<Usuario[]>('http://localhost/servicioServidor/serviciosChat/listadoUsuarios.php');
}

}
