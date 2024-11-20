import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css'],
})
export class CuerpoComponent {
  activada: boolean = false;
  activado: boolean = false;
  imgChicaT: string = '';
  wT1: number = 0;
  hT1: number = 0;
  imgChicoT: string = '';
  wT2: number = 0;
  hT2: number = 0;
  imgChica: string = '';
  w1: number = 0;
  h1: number = 0;
  imgChico: string = '';
  w2: number = 0;
  h2: number = 0;
  randomImg: number = 0;
  randomW: number = 0;
  randomH: number = 0;
  temporizadorChico: any;
  temporizadorChica: any;

  activarChica() {
    this.randomImg = Math.floor(Math.random() * 100);
    this.randomW = Math.floor(Math.random() * 300);
    this.randomH = Math.floor(Math.random() * 300);
    this.imgChica =
      'https://randomuser.me/api/portraits/women/' + this.randomImg + '.jpg';
    this.w1 = this.randomW;
    this.h1 = this.randomH;
  }
  activarChico() {
    this.randomImg = Math.floor(Math.random() * 100);
    this.randomW = Math.floor(Math.random() * 300);
    this.randomH = Math.floor(Math.random() * 300);
    this.imgChico =
      'https://randomuser.me/api/portraits/men/' + this.randomImg + '.jpg';
    this.w2 = this.randomW;
    this.h2 = this.randomH;
  }

  activarChicoTemp() {
    this.activado = true;
    this.temporizadorChico = setInterval(() => {
      this.randomImg = Math.floor(Math.random() * 100);
      this.randomW = Math.floor(Math.random() * 300);
      this.randomH = Math.floor(Math.random() * 300);
      this.imgChicoT =
        'https://randomuser.me/api/portraits/men/' + this.randomImg + '.jpg';
      this.wT2 = this.randomW;
      this.hT2 = this.randomH;
    }, 1000);
    if (this.activada) {
      clearInterval(this.temporizadorChica)
      this.activada=false
    }
  }
  activarChicaTemp() {
    this.activada = true;
    this.temporizadorChica = setInterval(() => {
      this.randomImg = Math.floor(Math.random() * 100);
      this.randomW = Math.floor(Math.random() * 300);
      this.randomH = Math.floor(Math.random() * 300);
      this.imgChicaT =
        'https://randomuser.me/api/portraits/women/' + this.randomImg + '.jpg';
      this.wT1 = this.randomW;
      this.hT1 = this.randomH;
    }, 1000);
    if (this.activado) {
      clearInterval(this.temporizadorChico)
      this.activado=false
    }
  }
}
