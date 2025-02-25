import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AndaluciaRoutingModule } from './andalucia-routing.module';
import { CadizComponent } from './cadiz/cadiz.component';


@NgModule({
  declarations: [
    CadizComponent
  ],
  imports: [
    CommonModule,
    AndaluciaRoutingModule
  ]
})
export class AndaluciaModule { }
