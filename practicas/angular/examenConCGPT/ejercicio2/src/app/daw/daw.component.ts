import { Component } from '@angular/core';

@Component({
  selector: 'app-daw',
  templateUrl: './daw.component.html',
  styleUrls: ['./daw.component.css']
})
export class DawComponent {
  selectedComponent: string = '';

  // Función para seleccionar el componente
  selectComponent(component: string): void {
    this.selectedComponent = component;
  }
}
