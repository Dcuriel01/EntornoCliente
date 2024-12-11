import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lombarda',
  templateUrl: './lombarda.component.html',
  styleUrls: ['./lombarda.component.css']
})
export class LombardaComponent implements OnInit {
  colorText=''
  color=''
  puntos = 0
  colores=['Red','Blue','Green','Yellow']
  temporizador :any
  ngOnInit(): void {
    this.comenzarTemp()
  }
  comenzarTemp(){
    this.temporizador = setInterval(() => {
      this.color=''
      this.cambiarColores()
    }, 1000);
  }
  cambiarColores() {
    this.colorText=this.colores[this.generarRandom(this.colores.length)]
    this.color=this.colores[this.generarRandom(this.colores.length)]
  }
  generarRandom(max:number) {
    let numRandom = Math.floor(Math.random() * max);
    return numRandom;
  }
  pulsado() {
    if (this.colorText==this.color) {
      this.puntos++
    }else{
      this.puntos--
    }
  }
}
