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
export class TablaComponent implements OnInit {
  // public dialog: MatDialog,
  constructor(private httpCliente: ServicioEmpService) {}
  ngOnInit(): void {
    // this.httpCliente.leerEmpleados.suscribe((x)=>{this.dataSource.data=x});
  }
  modificarEmpleado(_t98: any) {}
  eliminarEmpleado(arg0: any) {}
  empleado!: Empleado;

  buscador($event: KeyboardEvent) {}
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
  dataSource!: MatTableDataSource<Empleado>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
}
