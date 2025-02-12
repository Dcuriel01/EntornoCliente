import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class ServicioAdminLocalService {

  constructor(private http: HttpClient) { }

obtenerUsuarios(){
  return this.http.get<Usuario[]>('http://localhost/servicioServidor/serviciosAdmin/listadoTodosUsuarios.php')
}
bloquearUsuario(usuario:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>('http://localhost/servicioServidor/serviciosAdmin/bloquearUsuarios.php',usuario);
}
activarUsuario(usuario:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>('http://localhost/servicioServidor/serviciosAdmin/activarUsuarios.php',usuario);
}
leerMensajes(){
  return this.http.get<Mensaje[]>('http://localhost/servicioServidor/serviciosAdmin/listadoTodosMensajes.php')
}
activarMensaje(mensaje:Mensaje):Observable<Mensaje>{
  return this.http.post<Mensaje>('http://localhost/servicioServidor/serviciosAdmin/activarMensaje.php',mensaje);
}
bloquearMensaje(mensaje:Mensaje):Observable<Mensaje>{
  return this.http.post<Mensaje>('http://localhost/servicioServidor/serviciosAdmin/bloquearMensaje.php',mensaje);
}

}
