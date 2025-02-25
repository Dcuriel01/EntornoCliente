import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AndaluciaComponent } from './andalucia/andalucia.component';
import { ExtremaduraComponent } from './extremadura/extremadura.component';
import { CastillaLeonComponent } from './castilla-leon/castilla-leon.component';

@NgModule({
  declarations: [
    AppComponent,
    AndaluciaComponent,
    ExtremaduraComponent,
    CastillaLeonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
