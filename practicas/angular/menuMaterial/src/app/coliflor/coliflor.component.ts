import { Component } from '@angular/core';

@Component({
  selector: 'app-coliflor',
  templateUrl: './coliflor.component.html',
  styleUrls: ['./coliflor.component.css'],
})
export class ColiflorComponent {
  numero = 0;
  numIng = '';
  numEspa = '';
  traducir() {
    switch (this.numero) {
      case 0:
        this.numEspa = 'Cero';
        this.numIng = 'Zero';
        break;
      case 1:
        this.numEspa = 'Uno';
        this.numIng = 'One';
        break;
      case 2:
        this.numEspa = 'Dos';
        this.numIng = 'Two';
        break;
      case 3:
        this.numEspa = 'Tres';
        this.numIng = 'Three';
        break;
      case 4:
        this.numEspa = 'Cuatro';
        this.numIng = 'Ford';
        break;
      case 5:
        this.numEspa = 'Cinco';
        this.numIng = 'Five';
        break;
      case 6:
        this.numEspa = 'Seis';
        this.numIng = 'Six';
        break;
      case 7:
        this.numEspa = 'Siete';
        this.numIng = 'Seven';
        break;
      case 8:
        this.numEspa = 'Ocho';
        this.numIng = 'Eigth';
        break;
      case 9:
        this.numEspa = 'Nueve';
        this.numIng = 'Nine';
        break;
      case 10:
        this.numEspa = 'Diez';
        this.numIng = 'Ten';
        break;
    }
  }
}
