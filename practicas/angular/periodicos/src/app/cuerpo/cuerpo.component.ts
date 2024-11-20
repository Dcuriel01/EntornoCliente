import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css'],
})
export class CuerpoComponent {
  sobreIndice: number = -1;
  sobreIndiceP: number = -1;
  colores: string[] = [
    'red',
    'yellow',
    'blue',
    'green',
    'pink',
    'orange',
    'white',
    'brown',
    'gray',
    'black',
  ];
  tamanios: string[] = [
    '8px',
    '10px',
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '26px',
    '28px',
  ];
  segundos: number = 10;
  boton: string = 'Boton activado';
  color: string = '';
  tamanio: string = '';
  activado: boolean = false;
  temporizador: any;
  personas = [
    { id: 1, nombre: 'Ana', edad: 25 },
    { id: 2, nombre: 'Luis', edad: 30 },
    { id: 3, nombre: 'Sofia', edad: 28 },
    { id: 4, nombre: 'Miguel', edad: 35 },
  ];
  periodicos = [
    { nombre: 'El País', url: 'https://elpais.com' },
    { nombre: 'El Mundo', url: 'https://elmundo.es' },
    { nombre: 'ABC', url: 'https://abc.es' },
    { nombre: 'La Vanguardia', url: 'https://lavanguardia.com' },
    { nombre: 'El Diario', url: 'https://eldiario.es' },
  ];

  cuentaAtras() {
    this.activado = true;
    this.boton = 'Boton desactivado';
    this.temporizador = setInterval(() => {
      this.segundos--;
      this.color = this.colores[this.segundos];
      this.tamanio = this.tamanios[this.segundos];
      if (this.segundos == 0) {
        clearInterval(this.temporizador);
        this.segundos = 10;
        this.activado = false;
        this.color = '';
        this.tamanio = '';
      }
    }, 1000);
  }
  verNombre() {
    this.sobreIndice = -1;
  }
  verEdad(indice: number) {
    this.sobreIndice = indice;
  }
  verUrl() {
    this.sobreIndiceP = -1;
  }
  verNombreP(indice: number) {
    this.sobreIndiceP = indice;
  }
}
