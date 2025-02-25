import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {
segundos:number = 0;
intervalo:any=null
iniciado : boolean = false
parar() {
clearInterval(this.intervalo)
this.iniciado=false
}
iniciar() {
  if (!this.iniciado) {
    this.iniciado = true
    this.intervalo = setInterval(() => {
      this.segundos++
    }, 1000);
  }
}
}
