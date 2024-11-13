import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {
  fecha: String = new Date().toLocaleTimeString('es-EU')
  intervalo = setInterval(() => {
    this.fecha = new Date().toLocaleTimeString('es-EU')
  }, 1000);

}
