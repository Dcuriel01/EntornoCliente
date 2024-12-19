import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsirComponent } from './asir/asir.component';
import { BdComponent } from './bd/bd.component';
import { DamComponent } from './dam/dam.component';
import { DawComponent } from './daw/daw.component';
import { DespligueComponent } from './despligue/despligue.component';
import { DewcComponent } from './dewc/dewc.component';
import { DewsComponent } from './dews/dews.component';
import { DiComponent } from './di/di.component';
import { DiwComponent } from './diw/diw.component';
import { FhComponent } from './fh/fh.component';
import { LmComponent } from './lm/lm.component';
import { PmmsComponent } from './pmms/pmms.component';
import { ShorComponent } from './shor/shor.component';

const routes: Routes = [
  {
    path: 'asir',
    component: AsirComponent
  },
  {
    path: 'bd',
    component: BdComponent
  },
  {
    path: 'dam',
    component: DamComponent
  },
  {
    path: 'daw',
    component: DawComponent
  },
  {
    path: 'despligue',
    component: DespligueComponent
  },
  {
    path: 'dewc',
    component: DewcComponent
  },
  {
    path: 'dews',
    component: DewsComponent
  },
  {
    path: 'di',
    component: DiComponent
  },
  {
    path: 'diw',
    component: DiwComponent
  },
  {
    path: 'fh',
    component: FhComponent
  },
  {
    path: 'lm',
    component: LmComponent
  },
  {
    path: 'pmms',
    component: PmmsComponent
  },
  {
    path: 'shor',
    component: ShorComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
