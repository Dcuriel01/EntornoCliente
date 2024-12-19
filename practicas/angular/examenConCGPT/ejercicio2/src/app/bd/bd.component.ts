import { Component } from '@angular/core';

@Component({
  selector: 'app-bd',
  templateUrl: './bd.component.html',
  styleUrls: ['./bd.component.css']
})
export class BdComponent {
  nombre: string = 'Juan Pérez';
  fotoUrl: string = 'https://randomuser.me/api/portraits/men/34.jpg';
  titulo: string = 'Profesor de Bd';
}
