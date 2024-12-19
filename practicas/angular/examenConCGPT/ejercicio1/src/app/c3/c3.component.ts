import { Component } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {
  // URL base de la imagen
  baseUrl: string = 'https://randomuser.me/api/portraits/men/';

  // Variable para la URL completa
  imageUrl: string = '';

  // Función para generar un número aleatorio y cambiar la imagen
  generarImagen(): void {
    // Generar un número aleatorio entre 1 y 99 (por ejemplo)
    const randomNumber = Math.floor(Math.random() * 99) + 1;

    // Construir la URL completa de la imagen
    this.imageUrl = `${this.baseUrl}${randomNumber}.jpg`;
  }
}
