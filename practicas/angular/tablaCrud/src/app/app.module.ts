import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from "@angular/material/button"
import { MatDialogModule } from "@angular/material/dialog"
import { MatInputModule } from "@angular/material/input"
import { MatTableModule } from "@angular/material/table"
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TablaComponent } from './tabla/tabla.component'
import {HttpClientModule} from '@angular/common/http';
import { CuadroDialogoComponent } from './cuadro-dialogo/cuadro-dialogo.component'
import { MatPaginatorModule } from '@angular/material/paginator'
import {MatIconModule} from '@angular/material/icon';
import { MatSort, MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    CuadroDialogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
