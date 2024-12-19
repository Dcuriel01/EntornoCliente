import { Component } from '@angular/core';

@Component({
  selector: 'app-dews',
  templateUrl: './dews.component.html',
  styleUrls: ['./dews.component.css']
})
export class DewsComponent {
  nombre: string = 'Victor Gyokeres';
  fotoUrl: string = 'https://randomuser.me/api/portraits/men/28.jpg';
  titulo: string = 'Profesor de Dews';
}
