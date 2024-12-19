import { Component } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
  // Nombres de los botones
  nombresBotones: string[] = ['Botón 1', 'Botón 2', 'Botón 3', 'Botón 4', 'Botón 5'];

  // Colores iniciales de los botones
  colores: string[] = ['primary', 'secondary', 'success', 'danger', 'warning'];

  // Inicializamos con el color 'primary' por defecto
  colorSeleccionado: string = 'primary';

  // Función para cambiar el color de todos los botones
  cambiarColor(indice: number): void {
    // Obtener el color del botón presionado
    this.colorSeleccionado = this.colores[indice];
  }

  // Función para obtener el color de cada botón. Si no se ha seleccionado color, todos los botones se mantienen en 'primary'
  obtenerColor(i: number): string {
    return this.colorSeleccionado;
  }
}
