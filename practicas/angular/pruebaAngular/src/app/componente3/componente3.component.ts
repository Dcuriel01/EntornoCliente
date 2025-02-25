import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {
urlFoto: string = '';
nombreFoto: string = '';
random : number = 0
fotos : string[] = ['Almeria','Andalucia',"Avila","Badajoz","Caceres","Cadiz","CastillaLeon"]
generarFoto() {
  this.random = Math.floor(Math.random()*this.fotos.length)
  this.urlFoto = 'https://localhost/imagenes/'+this.fotos[this.random]+'.png'
  this.nombreFoto=this.fotos[this.random]
}

}
