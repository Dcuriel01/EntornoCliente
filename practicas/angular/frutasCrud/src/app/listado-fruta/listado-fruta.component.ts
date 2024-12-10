import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AniadirComponent } from '../aniadir/aniadir.component';
import { Fruta } from '../fruta';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-listado-fruta',
  templateUrl: './listado-fruta.component.html',
  styleUrls: ['./listado-fruta.component.css']
})
export class ListadoFrutaComponent implements OnInit{

  fruta!: Fruta
  datos: Fruta[] =[];
  datasource=new MatTableDataSource<Fruta>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatTable)
  tabla1!: MatTable<Fruta>;
columnas: string[] = ['id', 'nombre', 'precio', 'unidades'  , 'imagen', 'eliminar', 'modificar'];
  indNumero!: number;
modificarFila(fruta: Fruta) {

}
borrarFila(id: string) {
  if (confirm("Realmente quiere borrarlo?")) {
    this.httpCliente.deleteProduct(id).subscribe(resultado=>this.fruta);
    this.indNumero=parseInt(id);
    this.datos.splice(this.indNumero,1);
    this.tabla1.renderRows();
  }
}
abrirDialogo() {
  const dialogo1 = this.dialog.open(AniadirComponent, {
    data: new Fruta('','',0,0,'')
  });
  dialogo1.afterClosed().subscribe((fruta: Fruta) => {
    if (fruta != undefined)
      this.aniadir(fruta);
   });
}
applyFilter(event: KeyboardEvent) {
  const filtro = (event.target as HTMLInputElement).value;
  this.datasource.filter = filtro.trim().toLowerCase();
}
constructor( public dialog: MatDialog,private httpCliente: ServicioService){
this.httpCliente.leerProductos().subscribe((result:Fruta[])=>{this.datos=result;this.datasource.data=result;
  this.datasource.paginator=this.paginator;
  this.datasource.sort=this.sort;});
}
  ngOnInit(): void {
    this.httpCliente.leerProductos().subscribe((result:Fruta[])=>{this.datos=result;this.datasource.data=result;
      this.datasource.paginator=this.paginator;
      this.datasource.sort=this.sort;});
  }
aniadir(fruta: Fruta) {
  //agregar a la lista
         this.datos.push(new Fruta(fruta.id, fruta.nombre, fruta.precio,
                                               fruta.unidades, fruta.imagen));
  //agregar a la tabla
         this.httpCliente.createProduct(fruta).subscribe(resultado=>this.fruta);
  //renderizar la vista
         this.tabla1.renderRows();
  }
  abrirDialogoModificar(fruta: Fruta) {
    const dialogo1 = this.dialog.open(AniadirComponent, {
      data: new Fruta(fruta.id,fruta.nombre,fruta.precio,fruta.unidades,fruta.imagen)
    });
    dialogo1.afterClosed().subscribe((fruta: Fruta) => {
      if (fruta != undefined)
      this.httpCliente.updateProduct(fruta).subscribe(resultado=>this.fruta);
      });
  }
}
