import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DawComponent } from './daw/daw.component';
import { DamComponent } from './dam/dam.component';
import { AsirComponent } from './asir/asir.component';
import { BdComponent } from './bd/bd.component';
import { DiComponent } from './di/di.component';
import { PmmsComponent } from './pmms/pmms.component';
import { DespligueComponent } from './despligue/despligue.component';
import { DiwComponent } from './diw/diw.component';
import { DewcComponent } from './dewc/dewc.component';
import { DewsComponent } from './dews/dews.component';
import { FhComponent } from './fh/fh.component';
import { LmComponent } from './lm/lm.component';
import { ShorComponent } from './shor/shor.component';

@NgModule({
  declarations: [
    AppComponent,
    DawComponent,
    DamComponent,
    AsirComponent,
    BdComponent,
    DiComponent,
    PmmsComponent,
    DespligueComponent,
    DiwComponent,
    DewcComponent,
    DewsComponent,
    FhComponent,
    LmComponent,
    ShorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
