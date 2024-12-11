import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repollo',
  templateUrl: './repollo.component.html',
  styleUrls: ['./repollo.component.css']
})
export class RepolloComponent implements OnInit {
  numero = 0
  apariciones = 0
  array:number[]=[]
  ngOnInit(): void {
    this.generarArray()
  }
  generarArray() {
    for (let i = 0; i < 100; i++) {
      let random = this.generarRandom(20)
      this.array.push(random)
    }
  }
  comprobar() {
    this.apariciones=0
    this.array.forEach(num => {
      if (num==this.numero) {
        this.apariciones++
      }
    });
  }
  generarRandom(max:number) {
    let numRandom = Math.floor(Math.random() * max+1);
    return numRandom;
  }

}
