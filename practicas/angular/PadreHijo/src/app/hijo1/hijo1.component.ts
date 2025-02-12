import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component {
  @Input()
  mensajeRecibidoPadre !: string;
  @Output()
  mensajeH1Padre = new EventEmitter()
  @Output()
  mandarRandom = new EventEmitter()

  mensajeP:string=''
  numRandom :number = 0
  enviarMensaje(){
    this.mensajeH1Padre.emit({mensaje:this.mensajeP})
  }

  enviarRandom(){
    this.numRandom = Math.floor(Math.random()*100)
    this.mandarRandom.emit({num:this.numRandom})
  }

}
