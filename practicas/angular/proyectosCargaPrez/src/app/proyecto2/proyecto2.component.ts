import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto2',
  templateUrl: './proyecto2.component.html',
  styleUrls: ['./proyecto2.component.css']
})
export class Proyecto2Component {
  title = 'angular2';
  nombreCiclo:string="DAW";
  nombreCompleto:string="Desarrollo de Aplicaciones WEB"
  nombreUsuario:string="";
  country=["Gales","Francia","Italia","Inglaterra","Escocia","Irlanda"]

  cambiarNombre(){
    this.nombreCiclo=this.nombreCompleto;
  }
  retornarNombre(){
    this.nombreCiclo="DAW";
  }
  obtenerNombre(nombre:string){
   this.nombreUsuario=nombre;
  }
}
