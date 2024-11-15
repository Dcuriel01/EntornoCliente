import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1: number = 0;
  num2: number = 0;
  resultado:number=0;
  dividir() {
    this.resultado=this.num1/this.num2
  }
  multiplicar() {
    this.resultado=this.num1*this.num2
  }
  restar() {
    this.resultado=this.num1-this.num2
  }
  sumar() {
    this.resultado=this.num1+this.num2
  }
}
