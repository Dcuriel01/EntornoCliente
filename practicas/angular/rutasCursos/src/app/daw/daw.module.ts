import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DawRoutingModule } from './daw-routing.module';
import { DwesComponent } from './dwes/dwes.component';
import { DwecComponent } from './dwec/dwec.component';


@NgModule({
  declarations: [
    DwesComponent,
    DwecComponent
  ],
  imports: [
    CommonModule,
    DawRoutingModule
  ]
})
export class DawModule { }
