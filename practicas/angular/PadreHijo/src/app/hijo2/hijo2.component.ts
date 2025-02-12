import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {
  @Input()
  mensajeRecibidoPadre !: string
  @Input()
  nRandom !:number
  @Output()
  mensajeH2Padre = new EventEmitter()

  mensajeP: string = ''


  enviarMensaje() {
    this.mensajeH2Padre.emit({ mensaje: this.mensajeP })
  }
}
