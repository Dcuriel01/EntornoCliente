import { Injectable } from '@angular/core';
import { ClaseNumero } from './clase-numero';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  listaN: ClaseNumero[] = [];
  numRandom!: number;
  indice!: number;
  n1!: number;
  n2!: number;
  n3!: number;
  n4!: number;
  n5!: number;
  n6!: number;
  tupla: any;
  error = '';
  constructor() {
    this.generarLista();
  }
  generarLista() {
    for (let i = 0; i < 200; i++) {
      this.n1 = this.generarRandom();
      this.n2 = this.generarRandom();
      this.n3 = this.generarRandom();
      this.n4 = this.generarRandom();
      this.n5 = this.generarRandom();
      this.n6 = this.generarRandom();
      this.indice = 1 + this.listaN.length;
      if (
        !this.comprobarRepeticones(
          this.n1,
          this.n2,
          this.n3,
          this.n4,
          this.n5,
          this.n6
        )
      ) {
        i--;
      } else {
        this.tupla = new ClaseNumero(
          this.indice,
          this.n1,
          this.n2,
          this.n3,
          this.n4,
          this.n5,
          this.n6
        );
        this.listaN.push(this.tupla);
      }
    }
  }
  retornarLista() {
    return this.listaN;
  }
  actualizarLista(numero: ClaseNumero) {
    if (numero != undefined) {
      let tuplaBuscada = this.listaN.find(
        (tupla) => tupla.indice === numero.indice
      );
      if (tuplaBuscada) {
        if (!this.comprobarRepeticones(numero.n1,numero.n2,numero.n3,numero.n4,numero.n5,numero.n6)) {
          this.error = 'Numeros Repetidos tupla no modificada';
        }else{
          tuplaBuscada.n1 = numero.n1;
          tuplaBuscada.n2 = numero.n2;
          tuplaBuscada.n3 = numero.n3;
          tuplaBuscada.n4 = numero.n4;
          tuplaBuscada.n5 = numero.n5;
          tuplaBuscada.n6 = numero.n6;
        }
      }
    }
  }
  eliminarElemento(id: number) {
    if (confirm('Realmente quiere borrarlo?')) {
      const i = this.listaN.findIndex((num) => num.indice === id);
      this.listaN.splice(i, 1);
    }
  }
  insertarElemento(numeros: ClaseNumero) {
    if (
      !this.comprobarRepeticones(
        numeros.n1,
        numeros.n2,
        numeros.n3,
        numeros.n4,
        numeros.n5,
        numeros.n6
      )
    ) {
      this.error = 'Numeros Repetidos tupla no creada';
    } else {
      this.listaN.push(numeros);
      this.error = '';
    }
  }

  generarRandom() {
    this.numRandom = Math.floor(Math.random() * 100);
    return this.numRandom;
  }
  comprobarRepeticones(
    n1: number,
    n2: number,
    n3: number,
    n4: number,
    n5: number,
    n6: number
  ) {
    let numeros = [n1, n2, n3, n4, n5, n6];
    for (let i = 0; i < numeros.length; i++) {
      for (let r = 0; r < numeros.length; r++) {
        if (r != i && numeros[i] == numeros[r]) {
          return false;
        }
      }
    }
    return true;
  }
}
