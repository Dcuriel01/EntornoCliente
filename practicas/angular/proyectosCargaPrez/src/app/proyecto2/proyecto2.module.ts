import { CommonModule } from '@angular/common';
import { NgModule,} from '@angular/core';
import { Proyecto2Component } from '../proyecto2/proyecto2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    Proyecto2Component
  ],
  imports: [
    CommonModule
  ]
})
export class Proyecto2Module { }
