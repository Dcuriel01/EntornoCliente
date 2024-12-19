import { Component } from '@angular/core';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component {
// Variable para almacenar el texto del input
texto: string = '';

// Lista donde se guardarán los elementos ingresados
listaItems: string[] = [];

// Función para agregar el texto a la lista
agregarItem(): void {
  if (this.texto.trim()) {
    this.listaItems.push(this.texto); // Agregar el texto a la lista
    this.texto = ''; // Limpiar el input después de agregar el item
  }
}
}
