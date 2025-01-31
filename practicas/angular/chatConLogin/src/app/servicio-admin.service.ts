import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class ServicioAdminService {

  constructor(private http: HttpClient) { }

obtenerUsuarios(){
  return this.http.get<Usuario[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerUsuarios.php')
}
bloquearUsuario(usuario:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>('http://moralo.atwebpages.com/chat/BloquearUsuario.php',usuario);
}
activarUsuario(usuario:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>('http://moralo.atwebpages.com/chat/ActivarUsuario.php',usuario);
}
leerMensajes(){
  return this.http.get<Mensaje[]>('http://moralo.atwebpages.com/chat/ObtenerMensajes.php')
}
activarMensaje(mensaje:Mensaje):Observable<Mensaje>{
  return this.http.post<Mensaje>('http://moralo.atwebpages.com/chat/ActivarMensaje.php ',mensaje);
}
bloquearMensaje(mensaje:Mensaje):Observable<Mensaje>{
  return this.http.post<Mensaje>('http://moralo.atwebpages.com/chat/BloquearMensaje.php',mensaje);
}
}
