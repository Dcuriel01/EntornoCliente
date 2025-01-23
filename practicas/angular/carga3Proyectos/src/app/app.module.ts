import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ConversorComponent } from './conversor/conversor.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ColoresComponent } from './colores/colores.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversorComponent,
    CalculadoraComponent,
    ColoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
