import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
fruta:string = ''
frutas:string[]=[]
aniadirFruta() {
  this.frutas.push(this.fruta)
}
}
