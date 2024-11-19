import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color:string=''
  size:string=''
  bgColor:string=''
  claseColor:string=''
  claseSize:string=''
  claseBgColor:string=''
cambiarColor() {
  this.claseColor=this.color
}
cambiarSize() {
  this.claseSize=this.size
}
cambiarBgColor() {
  this.claseBgColor=this.bgColor
}

}
