import { Component } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent {
  color:string=''
  size:string=''
  bgColor:string=''
  claseColor:string=''
  claseSize:string=''
  claseBgColor:string=''
cambiarColor() {
  this.claseColor=this.color
}
cambiarSize() {
  this.claseSize=this.size
}
cambiarBgColor() {
  this.claseBgColor=this.bgColor
}
}
