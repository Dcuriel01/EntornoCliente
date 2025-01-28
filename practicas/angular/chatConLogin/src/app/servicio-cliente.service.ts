import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicioClienteService {
  constructor(private httpClient:HttpClient) {}

  altaUsuario(usuario:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php',usuario)
  }

  logueo(usuario:Usuario):Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>('http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email='+usuario.email+'&pwd='+usuario.pwd)
  }

  /*
  http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php

  http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php

  */
}
