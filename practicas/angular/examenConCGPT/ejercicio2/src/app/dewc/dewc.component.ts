import { Component } from '@angular/core';

@Component({
  selector: 'app-dewc',
  templateUrl: './dewc.component.html',
  styleUrls: ['./dewc.component.css']
})
export class DewcComponent {
  nombre: string = 'Mesi Pérez';
  fotoUrl: string = 'https://randomuser.me/api/portraits/men/15.jpg';
  titulo: string = 'Profesor de Dewc';
}
