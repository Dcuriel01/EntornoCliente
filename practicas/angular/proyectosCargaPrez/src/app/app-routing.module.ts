import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Proyecto3Component } from './proyecto3/proyecto3.component';
import { Proyecto2Component } from './proyecto2/proyecto2.component';
import { Proyecto1Component } from './proyecto1/proyecto1.component';
import { Proyecto4Component } from './proyecto4/proyecto4.component';
import { Proyecto5Component } from './proyecto5/proyecto5.component';

const routes: Routes = [
  {
    path: 'pro1',
    component: Proyecto1Component,
    loadChildren: () => import('./proyecto1/proyecto1.module').then(m => m.Proyecto1Module)
  },
  {
    path: 'pro2',
    component: Proyecto2Component,
    loadChildren: () => import('./proyecto2/proyecto2.module').then(m => m.Proyecto2Module)
  },
  {
    path: 'pro3',
    component: Proyecto3Component,
    loadChildren: () => import('./proyecto3/proyecto3.module').then(m => m.Proyecto3Module)
  },
  {
    path: 'pro4',
    component: Proyecto4Component,
    loadChildren: () => import('./proyecto4/proyecto4.module').then(m => m.Proyecto4Module)
  },{
    path: 'pro5',
    component: Proyecto5Component,
    loadChildren: () => import('./proyecto5/proyecto5.module').then(m => m.Proyecto5Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
