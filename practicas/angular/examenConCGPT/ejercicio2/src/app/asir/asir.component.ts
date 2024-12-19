import { Component } from '@angular/core';

@Component({
  selector: 'app-asir',
  templateUrl: './asir.component.html',
  styleUrls: ['./asir.component.css']
})
export class AsirComponent {
  selectedComponent: string = '';

  // Función para seleccionar el componente
  selectComponent(component: string): void {
    this.selectedComponent = component;
  }
}
