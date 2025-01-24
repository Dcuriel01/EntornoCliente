import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto1',
  templateUrl: './proyecto1.component.html',
  styleUrls: ['./proyecto1.component.css']
})
export class Proyecto1Component {
  title = 'angular3';
  numero:number=0;
   incrementar(){
     this.numero++;
   }
   decrementar(){
     this.numero--;
   }
}
