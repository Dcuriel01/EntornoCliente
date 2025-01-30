import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioClienteService {

  constructor(private http: HttpClient) { }




insertarUsuario(usuario:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php',usuario);
}

leerMensajes(){
  return this.http.get<Mensaje[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php')
}

escribirMensaje(mensaje:Mensaje):Observable<Mensaje>{
  return this.http.post<Mensaje>('http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php',mensaje)
}

// http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php

logeo (usuario:Usuario):Observable<Usuario[]>{
  return this.http.get<Usuario[]>
  ('http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email='+usuario.email+'&pwd='+usuario.pwd)
}

escribirMensajeP(mensaje:Mensaje):Observable<Mensaje>{
  return this.http.post<Mensaje>('http://moralo.atwebpages.com/menuAjax/chat/AltaMensajeP.php',mensaje)
}

leerMensajesP(){
  return this.http.get<Mensaje[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesP.php?usuario='+sessionStorage.getItem('Email'))
}

}
