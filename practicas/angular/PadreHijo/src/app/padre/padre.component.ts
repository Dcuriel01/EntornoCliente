import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  mensajeParaHijo1 : string = ''
  mensajeParaHijo2 : string = ''
  mensajeH1Padre : string = ''
  mensajeH2Padre : string = ''
  nRandomH1:number=0
  nRandomMandar:number=0

  actualizarMensajeh1(e : any){
    this.mensajeH1Padre = e.mensaje
  }

  actualizarMensajeh2(e : any){
    this.mensajeH2Padre = e.mensaje
  }

  actualizarNumeroH1(e:any){
    this.nRandomH1 = e.num
  }

  generarRandom(){
    this.nRandomMandar = Math.floor(Math.random()*1000)
  }
}
