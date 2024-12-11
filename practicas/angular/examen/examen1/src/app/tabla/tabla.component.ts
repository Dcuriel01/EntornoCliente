import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ClaseNumero } from '../clase-numero';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ServicioService } from '../servicio.service';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { DialogoSinIndiceComponent } from '../dialogo-sin-indice/dialogo-sin-indice.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit,AfterViewInit{
  servicio = new ServicioService
  datos = this.servicio.retornarLista()
  datasource=new MatTableDataSource<ClaseNumero>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatTable)
  tabla1!: MatTable<ClaseNumero>;
  columnas: string[] = ['indice', 'n1', 'n2', 'n3','n4','n5','n6','eliminar', 'modificar'];
  constructor( public dialog: MatDialog){}
  ngAfterViewInit(): void {
    this.datasource.paginator=this.paginator
    this.datasource.sort=this.sort
  }
  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.datasource.filter = filtro.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.datasource.data=this.datos
    this.datasource.paginator=this.paginator;
    this.datasource.sort=this.sort;
  }
borrarFila(id: number) {
  this.servicio.eliminarElemento(id)
  this.datos = this.servicio.retornarLista()
  this.datasource.data=this.datos

}
modificar(numero: ClaseNumero) {
  const dialogo1 = this.dialog.open(DialogoSinIndiceComponent, {
    data: new ClaseNumero(numero.indice,numero.n1,numero.n2,numero.n3,numero.n4,numero.n5,numero.n6)
  });

  dialogo1.afterClosed().subscribe((numero: ClaseNumero) => {
    this.servicio.actualizarLista(numero)
    this.datos = this.servicio.retornarLista()
    this.datasource.data=this.datos
  });

}
crear() {
  const dialogo1 = this.dialog.open(DialogoComponent, {
    data: new ClaseNumero(0,0,0,0,0,0,0)
  });
  dialogo1.afterClosed().subscribe((num: ClaseNumero) => {
    if (num != undefined)
      this.servicio.insertarElemento(num)
      this.datos = this.servicio.retornarLista()
      this.datasource.data=this.datos
   });
}


}
