import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Empleado } from '../empleado';
import {MatPaginator} from '@angular/material/paginator';
@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.css']
})
export class ListadoEmpleadosComponent implements OnInit {
applyFilter(event: KeyboardEvent) {
}
borrarFila(_t79: any) {
}
abrirDialogo() {
}
modificarFila(_t92: any) {
}
  columnas: string[] = ['id', 'nombre', 'direccion', 'cargo' , 'edad' , 'imagen','borrar', 'modificar'];

    datos: Empleado[] =[];
    urlString:string="http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php"

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  //ds = new MatTableDataSource<Empleado>(this.datos);
ds=new MatTableDataSource<Empleado>();
  constructor(public dialog: MatDialog, private httpCliente: HttpClient){

  }
  ngOnInit(): void {

this.httpCliente.get<Empleado[]>(this.urlString).subscribe((res)=>{ console.log(res); this.ds.data = res;this.datos=res});
//this.ds=new MatTableDataSource(this.datos);

  }
}
