import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brecol',
  templateUrl: './brecol.component.html',
  styleUrls: ['./brecol.component.css']
})
export class BrecolComponent implements OnInit{
  color = ''
  letras=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
  parado = false
  temporizador :any
  ngOnInit(): void {
    this.comenzarTemp()
  }
  generarColor(){
    let random = ''
    for (let i = 0; i < 6; i++) {
      random=this.letras[this.generarRandom(this.letras.length)]
      if (i==0) {
        this.color='#'+random
      }else{
        this.color=this.color+random
      }
    }
  }
  generarRandom(max:number) {
    let numRandom = Math.floor(Math.random() * max);
    return numRandom;
  }
  pararIntervalo() {
    clearInterval(this.temporizador)
    this.parado=true
  }
  comenzarTemp(){
    this.temporizador = setInterval(() => {
      this.color=''
      this.generarColor()
    }, 1000);
  }
  reanudarIntervalo() {
    if (this.parado) {
      this.comenzarTemp()
      this.parado=false
    }
  }
}
