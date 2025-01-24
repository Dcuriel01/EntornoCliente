import { NgModule } from '@angular/core';
import { CuadroDialogoEmpleadoComponent } from './cuadro-dialogo-empleado/cuadro-dialogo-empleado.component';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';
import {FormsModule} from '@angular/forms'
import {MatTableModule} from '@angular/material/table'
import {MatDialogModule} from '@angular/material/dialog'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { Proyecto5Component } from './proyecto5.component';
@NgModule({
  declarations: [
    CuadroDialogoEmpleadoComponent,
    ListadoEmpleadosComponent,
    Proyecto5Component
  ],
  imports: [
    CommonModule,
    FormsModule,MatTableModule,MatDialogModule,MatInputModule,MatButtonModule,HttpClientModule
  ]
})
export class Proyecto5Module { }
