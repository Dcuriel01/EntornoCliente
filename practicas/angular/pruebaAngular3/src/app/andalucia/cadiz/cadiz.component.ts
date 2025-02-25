import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadiz',
  templateUrl: './cadiz.component.html',
  styleUrls: ['./cadiz.component.css']
})
export class CadizComponent implements OnInit {
ngOnInit(): void {
  this.habitantes = Math.floor(Math.random()*10000)
  this.superficie = Math.floor(Math.random()*1000)
}
habitantes!: number;
superficie!: number;

}
