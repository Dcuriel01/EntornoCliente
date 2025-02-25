import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadizComponent } from './cadiz/cadiz.component';

const routes: Routes = [
  { path: 'cad', component: CadizComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AndaluciaRoutingModule { }
