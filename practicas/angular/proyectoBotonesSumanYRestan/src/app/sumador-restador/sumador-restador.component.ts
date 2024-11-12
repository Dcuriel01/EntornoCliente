import { Component } from '@angular/core';

@Component({
  selector: 'app-sumador-restador',
  templateUrl: './sumador-restador.component.html',
  styleUrls: ['./sumador-restador.component.css']
})
export class SumadorRestadorComponent {
  numero:number=0
  restar() {
    this.numero--
  }
  sumar() {
    this.numero++
  }
}
