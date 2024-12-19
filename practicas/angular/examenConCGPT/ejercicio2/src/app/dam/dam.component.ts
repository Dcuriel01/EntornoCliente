import { Component } from '@angular/core';

@Component({
  selector: 'app-dam',
  templateUrl: './dam.component.html',
  styleUrls: ['./dam.component.css']
})
export class DamComponent {
  selectedComponent: string = '';

  // Función para seleccionar el componente
  selectComponent(component: string): void {
    this.selectedComponent = component;
  }
}
