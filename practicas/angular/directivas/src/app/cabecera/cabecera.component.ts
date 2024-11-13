import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
colores: string[] = ['white', 'black', 'red', 'green', 'blue', 'yellow', 'cyan', 'magenta', 'gray', 'silver', 'maroon', 'navy', 'beige', 'olive', 'orange', 'pink', 'lavender', 'violet', 'skyblue', 'coral', 'fuchsia', 'aqua', 'indigo', 'pearl', 'brown', 'tan', 'seaGreen', 'periwinkle', 'aquamarine', 'purple', 'emerald', 'lightBlue', 'darkBlue', 'mustard', 'mint', 'lavender', 'lime', 'gold', 'chocolate', 'sienna', 'brickRed', 'terracotta', 'darkOliveGreen', 'teal', 'slateBlue', 'turquoise', 'darkGreen', 'rosyBrown', 'eggplant', 'copper', 'cream'];
color:string= this.colores[0]
x:number =0
cambiarColor() {
  this.x = Math.floor(Math.random()*(this.colores.length-1))
  this.color=this.colores[this.x]
}

}
