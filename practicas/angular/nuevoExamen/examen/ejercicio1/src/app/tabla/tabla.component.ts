import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Imagen } from '../imagen';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit,AfterViewInit{
  constructor(private httpCliente: ServicioService){}
  datasource=new MatTableDataSource<Imagen>();
  datos : Imagen[] = []
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatTable)
  tabla1!: MatTable<Imagen>;
  columnas: string[] = ['id', 'imagen', 'texto', 'subtexto'];

  ngAfterViewInit(): void {
    this.datasource.paginator=this.paginator
    this.datasource.sort=this.sort
  }

  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.datasource.filter = filtro.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.httpCliente.cargarFicheroJson('assets/getImagenes.json').subscribe((result:Imagen[])=>{this.datasource.data=result.filter(imagen=>imagen.activo==1)})
    this.datasource.paginator=this.paginator;
    this.datasource.sort=this.sort;
  }
}

