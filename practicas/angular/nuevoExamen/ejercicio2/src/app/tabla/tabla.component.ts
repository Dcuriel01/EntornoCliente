import { Component, ViewChild } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Producto } from '../producto';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  constructor(private httpCliente: ServicioService){}
  datasource=new MatTableDataSource<Producto>();
  datos : Producto[] = []
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatTable)
  tabla1!: MatTable<Producto>;
  columnas: string[] = ['id', 'name', 'price', 'photo', 'stockActual', 'stockMinimo'];

  ngAfterViewInit(): void {
    this.datasource.paginator=this.paginator
    this.datasource.sort=this.sort
  }

  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.datasource.filter = filtro.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.httpCliente.cargarFicheroJson('assets/getProductos.json').subscribe((result:Producto[])=>{this.datasource.data=result.filter(producto=>producto.stockActual>0)})
    this.datasource.paginator=this.paginator;
    this.datasource.sort=this.sort;
  }
}
