import { Inject, inject, Injectable, LOCALE_ID } from '@angular/core';
import { ChatModule } from './chat/chat.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  constructor(private httpClient:HttpClient,@Inject(LOCALE_ID) private locale: string) {}
  leerMensaje():Observable<ChatModule[]>{
    return this.httpClient.get<ChatModule[]>('http://camacho.atwebpages.com/chat/ObtenerMensajes.php')
  }
  crearMensaje(mensaje:ChatModule):Observable<ChatModule>{
    mensaje.fecha=formatDate(Date.now(),'HH:mm:ss/dd-MM-yy',this.locale)
    return this.httpClient.post<ChatModule>('http://camacho.atwebpages.com/chat/AltaMensaje.php',mensaje)
  }
  borrarMensajes():Observable<ChatModule[]>{
    return this.httpClient.delete<ChatModule[]>('http://camacho.atwebpages.com/chat/truncate.php')
  }
  eliminarMensaje(id:number){
    return this.httpClient.delete<ChatModule>('http://camacho.atwebpages.com/chat/EliminarMensaje.php/?id='+id)
  }
}
