import { Component } from '@angular/core';

@Component({
  selector: 'app-pmms',
  templateUrl: './pmms.component.html',
  styleUrls: ['./pmms.component.css']
})
export class PmmsComponent {
  nombre: string = 'Sergio Orgaz';
  fotoUrl: string = 'https://randomuser.me/api/portraits/men/24.jpg';
  titulo: string = 'Profesor de pmms';
}
