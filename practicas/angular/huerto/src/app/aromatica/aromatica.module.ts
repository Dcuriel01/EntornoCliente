import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AromaticaRoutingModule } from './aromatica-routing.module';
import { TomilloComponent } from './tomillo/tomillo.component';
import { HierbaBuenaComponent } from './hierba-buena/hierba-buena.component';
import { CilantroComponent } from './cilantro/cilantro.component';


@NgModule({
  declarations: [
    TomilloComponent,
    HierbaBuenaComponent,
    CilantroComponent
  ],
  imports: [
    CommonModule,
    AromaticaRoutingModule
  ]
})
export class AromaticaModule { }
