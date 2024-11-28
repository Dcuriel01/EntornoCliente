import { Injectable } from '@angular/core';
import { ChatModule } from './chat/chat.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  constructor(private httpClient:HttpClient) {}
  leerMensaje():Observable<ChatModule[]>{
    return this.httpClient.get<ChatModule[]>('http://camacho.atwebpages.com/chat/ObtenerMensajes.php')
  }
  crearMensaje(mensaje:ChatModule):Observable<ChatModule>{
    return this.httpClient.post<ChatModule>('http://camacho.atwebpages.com/chat/AltaMensaje.php',mensaje)
  }
}
