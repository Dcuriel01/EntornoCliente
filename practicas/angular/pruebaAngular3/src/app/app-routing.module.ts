import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndaluciaComponent } from './andalucia/andalucia.component';
import { ExtremaduraComponent } from './extremadura/extremadura.component';
import { CastillaLeonComponent } from './castilla-leon/castilla-leon.component';

const routes: Routes = [
  {
    path: 'and',
    component: AndaluciaComponent,
    loadChildren: () => import('./andalucia/andalucia.module').then(m => m.AndaluciaModule)
  },
  {
    path: 'ext',
    component: ExtremaduraComponent,
    loadChildren: () => import('./extremadura/extremadura.module').then(m => m.ExtremaduraModule)
  },
  {
    path: 'cas',
    component: CastillaLeonComponent,
    loadChildren: () => import('./castilla-leon/castilla-leon.module').then(m => m.CastillaLeonModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
