import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorComponent } from './conversor/conversor.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ColoresComponent } from './colores/colores.component';

const routes: Routes = [
  {
    path: 'monedas',
    component: ConversorComponent,
    loadChildren: () => import('./conversor/conversor.module').then(m => m.ConversorModule)
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent,
    loadChildren: () => import('./calculadora/calculadora.module').then(m => m.CalculadoraModule)
  },
  {
    path: 'colores',
    component: ColoresComponent,
    loadChildren: () => import('./colores/colores.module').then(m => m.ColoresModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
