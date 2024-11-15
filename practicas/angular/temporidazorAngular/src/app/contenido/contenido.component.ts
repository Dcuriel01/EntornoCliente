import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
  random:number = 0
  intervalo:any=null
parar() {
  clearInterval(this.intervalo)
}
iniciar() {
  this.intervalo = setInterval(() => {
    this.random=Math.floor(Math.random()*1000)
  }, 1000);
}

}
