import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto4',
  templateUrl: './proyecto4.component.html',
  styleUrls: ['./proyecto4.component.css']
})
export class Proyecto4Component {
  title = 'angular4';
  num1:number=0;
  num2:number=0;
  resultado:number=0;
  sumar(){
   this.resultado=this.num1+this.num2;
  }
  restar(){
this.resultado=this.num1-this.num2;
  }
  multiplicar(){
this.resultado=this.num1*this.num2;
  }
  dividir(){
    if (this.num2!==0){
      this.resultado=this.num1/this.num2;

    }else{
      alert("divisor no válido")
    }


  }
}
