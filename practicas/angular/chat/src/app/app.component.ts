import { Component } from '@angular/core';
import { ServicioService } from './servicio.service';
import { ChatModule } from './chat/chat.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mensaje: ChatModule = {
    id: 0,
    fecha: '',
    usuario: '',
    mensaje: '',
  };
  listaMensajes!:ChatModule[]
  constructor(private httpCliente: ServicioService) {
  }
  leerMensajes() {
    this.httpCliente.leerMensaje().subscribe(x => this.listaMensajes = x)
  }
  aniadirMensaje(form:{value:ChatModule}) {
    this.httpCliente.crearMensaje(form.value).subscribe((c:ChatModule)=>(this.mensaje=c))
  }
  eliminarTodos() {
    this.httpCliente.borrarMensajes().subscribe()
  }
  eliminarMensaje(id:number) {
    this.httpCliente.eliminarMensaje(id).subscribe()
  }
}
