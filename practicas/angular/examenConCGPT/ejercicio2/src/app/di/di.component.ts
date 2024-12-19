import { Component } from '@angular/core';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DiComponent {
  nombre: string = 'Pedro Jimenez';
  fotoUrl: string = 'https://randomuser.me/api/portraits/men/22.jpg';
  titulo: string = 'Profesor de Di';
}
