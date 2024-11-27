import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductoModule {
  id!:number
  nombre!:string
  precio!:number
  unidades!:number
  imagen!:string
}
