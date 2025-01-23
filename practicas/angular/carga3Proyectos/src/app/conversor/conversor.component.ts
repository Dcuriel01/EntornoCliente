import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  moneda:number=0
  euros:number = 0
  dolares:number = 0
  yenes:number = 0
  cambiar(monedaCambio:string){
    if (monedaCambio=='euros') {
      this.dolares=this.euros*0.96
      this.yenes=this.euros*164
    }else if (monedaCambio=='dolar') {
      this.euros=this.dolares*1.06
      this.yenes=this.dolares*155
    }else if (monedaCambio=='yenes') {
      this.euros=this.yenes*0.0061
      this.dolares=this.yenes*0.0064
    }
  }
}
