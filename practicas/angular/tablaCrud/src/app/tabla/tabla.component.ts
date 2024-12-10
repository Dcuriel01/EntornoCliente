import { Empleado } from '../empleado';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ServicioEmpService } from '../servicio-emp.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit,AfterViewInit {
  // public dialog: MatDialog,
  constructor(private httpCliente: ServicioEmpService) {
    this.httpCliente.leerEmpleados().subscribe((x)=>{this.dataSource.data=x});
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.httpCliente.leerEmpleados().subscribe((x)=>{this.dataSource.data=x});
  }
  modificarEmpleado(_t98: any) {}
  eliminarEmpleado(arg0: any) {}
  empleado!: Empleado;

  buscador(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
  displayedColumns: string[] = [
    'id',
    'nombre',
    'direccion',
    'cargo',
    'edad',
    'imagen',
    'borrar',
    'modificar',
  ];
  datos: Empleado[] = [];
  dataSource= new MatTableDataSource<Empleado>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
}
