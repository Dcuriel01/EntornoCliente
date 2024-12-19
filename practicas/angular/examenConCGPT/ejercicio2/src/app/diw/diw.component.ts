import { Component } from '@angular/core';

@Component({
  selector: 'app-diw',
  templateUrl: './diw.component.html',
  styleUrls: ['./diw.component.css']
})
export class DiwComponent {
  nombre: string = 'Messi Rolando';
  fotoUrl: string = 'https://randomuser.me/api/portraits/men/30.jpg';
  titulo: string = 'Profesor de Diw';
}
