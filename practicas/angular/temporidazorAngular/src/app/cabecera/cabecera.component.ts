import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  contador:number = 0
  intervalo:any=null
resetear() {
  this.contador=0
}
parar() {
  clearInterval(this.intervalo)
}
iniciar() {
  this.intervalo = setInterval(() => {
    this.contador++
  }, 1000);
}


}
