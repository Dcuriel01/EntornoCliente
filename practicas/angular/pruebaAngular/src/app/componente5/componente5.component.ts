import { Component } from '@angular/core';
import { Numero } from '../numero';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.component.html',
  styleUrls: ['./componente5.component.css']
})
export class Componente5Component {
contador: number = 0;
numeros : Numero[] = [];
random !: number
eliminarN(n: Numero) {
  this.numeros.splice(this.numeros.indexOf(n),1)
}
modificarN(n:Numero) {
  n.numero=Number(prompt('Nuevo valor:'))
}

GenerarNRandom() {
  let numero = new Numero()
  this.random = Math.floor(Math.random()*100)
  numero.id = this.contador
  numero.numero = this.random
  this.numeros.push(numero)
  this.contador++
}

}
