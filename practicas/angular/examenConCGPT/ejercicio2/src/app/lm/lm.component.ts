import { Component } from '@angular/core';

@Component({
  selector: 'app-lm',
  templateUrl: './lm.component.html',
  styleUrls: ['./lm.component.css']
})
export class LmComponent {
  nombre: string = 'Pepe Domingo';
  fotoUrl: string = 'https://randomuser.me/api/portraits/men/10.jpg';
  titulo: string = 'Profesor de Lm';
}
