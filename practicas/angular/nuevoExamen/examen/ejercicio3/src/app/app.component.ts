import { Component } from '@angular/core';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colores !:string[]

  constructor(private httpCliente: ServicioService){
    this.httpCliente.listarColores().subscribe((data)=>{this.colores=data.split(',')})
  }
}
