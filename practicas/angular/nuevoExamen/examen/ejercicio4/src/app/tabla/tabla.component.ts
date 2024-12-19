import { Component, ViewChild } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Fruta } from '../fruta';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  constructor(private httpCliente: ServicioService){}
  datasource=new MatTableDataSource<Fruta>();
  frutasString = ''
  datos : Fruta[] = []
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatTable)
  tabla1!: MatTable<Fruta>;
  columnas: string[] = ['nombre', 'precio'];

  ngAfterViewInit(): void {
    this.datasource.paginator=this.paginator
    this.datasource.sort=this.sort
  }

  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.datasource.filter = filtro.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.httpCliente.obtenerFrutas().subscribe((data)=>{
    this.datasource.data = this.httpCliente.procesarFrutas(data);})
    this.datasource.paginator=this.paginator;
    this.datasource.sort=this.sort;
  }
}

