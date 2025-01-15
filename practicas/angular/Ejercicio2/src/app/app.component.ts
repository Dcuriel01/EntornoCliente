import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  EnviarDatos() {
    alert("OK")
  }
  FRegistro!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.FRegistro = this.fb.group({
      select: ['', [Validators.required]],
      fechaEntrada: ['', [Validators.required, this.fechaValida]],
      fechaSalida: ['', [Validators.required, this.fechaValida, this.fechaPosterior('fechaEntrada')]],
    })
  }

  fechaValida(control: any) {
    const fecha = control.value;
    if (fecha) {
      const fechaActual = new Date();
      const fechaIngresada = new Date(fecha);
      if (fechaIngresada < fechaActual) {
        return { fechaFutura: true };
      }
    }
    return null;
  }

  fechaPosterior(fechaInicioControlName: string) {
    return (control: any) => {
      const fechaInicio = this.FRegistro?.get(fechaInicioControlName)?.value;
      const fechaFin = control.value;

      // Si no hay fechaInicio o fechaFin, no se realiza la validación
      if (!fechaInicio || !fechaFin) {
        return null;
      }

      // Convertir las fechas a objetos Date
      const fechaInicioDate = new Date(fechaInicio);
      const fechaFinDate = new Date(fechaFin);

      // Verificar que fechaFin sea posterior a fechaInicio
      if (fechaFinDate <= fechaInicioDate) {
        return { fechaNoPosterior: true }; // error personalizado
      }
      return null;
    };
  }

}
