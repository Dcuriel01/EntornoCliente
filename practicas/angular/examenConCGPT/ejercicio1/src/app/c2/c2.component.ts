import { Component } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {
  contador: number = 0;       // Contador inicializado en 0
  intervalId: any;            // Identificador del intervalo para poder limpiarlo
  contadorActivo: boolean = false; // Estado que indica si el contador está funcionando

  ngOnInit(): void {
    // Al iniciar el componente no se ejecuta el contador aún
  }

  ngOnDestroy(): void {
    // Asegurarse de limpiar el intervalo si el componente se destruye
    this.limpiarIntervalo();
  }

  // Función para iniciar el contador
  iniciarContador(): void {
    // Solo si el contador no está ya activo
    if (!this.contadorActivo) {
      this.contadorActivo = true;
      this.intervalId = setInterval(() => {
        this.contador++;
      }, 1000);
    }
  }

  // Función para parar el contador
  pararContador(): void {
    // Limpiar el intervalo y poner el contador en estado detenido
    if (this.contadorActivo) {
      this.limpiarIntervalo();
      this.contadorActivo = false;
    }
  }

  // Función para limpiar el intervalo
  limpiarIntervalo(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
