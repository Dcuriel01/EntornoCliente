import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  claseColor : string[] = ['btn-danger','btn-warning','btn-success','btn-primary']

  cambiarColor(color:string){
    for (let i = 0; i < this.claseColor.length; i++) {
      this.claseColor[i]=color
    }
    console.log('hola');

  }

}
