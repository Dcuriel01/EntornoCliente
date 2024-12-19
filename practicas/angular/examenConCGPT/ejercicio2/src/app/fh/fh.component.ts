import { Component } from '@angular/core';

@Component({
  selector: 'app-fh',
  templateUrl: './fh.component.html',
  styleUrls: ['./fh.component.css']
})
export class FhComponent {
  nombre: string = 'Jesus Galan';
  fotoUrl: string = 'https://randomuser.me/api/portraits/men/14.jpg';
  titulo: string = 'Profesor de Fh';
}
