import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CilantroComponent } from './cilantro/cilantro.component';
import { HierbaBuenaComponent } from './hierba-buena/hierba-buena.component';
import { TomilloComponent } from './tomillo/tomillo.component';

const routes: Routes = [
  {
    path: 'cilantro',
    component: CilantroComponent,
  },
  {
    path: 'hierbaBuena',
    component: HierbaBuenaComponent,
  },
  {
    path: 'tomillo',
    component: TomilloComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AromaticaRoutingModule { }
