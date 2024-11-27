import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { ProductoModule } from '../producto/producto.module';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
resetear() {
throw new Error('Method not implemented.');
}
  fruta!: ProductoModule;
  frutaSeleccionada: ProductoModule = {
    id: 0,
    nombre: '',
    precio: 0,
    unidades: 0,
    imagen: '',
  };

  listaProducto!: ProductoModule[];
  mensajes: string=''
  constructor(private httpCliente: ServicioService) {
    this.httpCliente.leerProductos().subscribe((x) => (this.listaProducto = x));
  }

  aniadirProducto(form: { value: ProductoModule }) {
    this.httpCliente.crearFruta(form.value).subscribe((p: ProductoModule) => {
      this.fruta = p;
      this.httpCliente
        .leerProductos()
        .subscribe((x) => (this.listaProducto = x));
    });
  }

  actualizarProducto(form:{value:ProductoModule}) {
    this.httpCliente.actualizarFruta(form.value).subscribe((p: ProductoModule) => {
      this.fruta = p;
      this.httpCliente
        .leerProductos()
        .subscribe((x) => (this.listaProducto = x));
    });
  }

  eliminarFruta(id: number) {
    this.httpCliente.eliminarFruta(id).subscribe((x: ProductoModule) => {
      this.fruta = x;
      this.httpCliente
        .leerProductos()
        .subscribe((x) => (this.listaProducto = x));
    });
  }

  modificarFruta(fruta: ProductoModule) {
    this.frutaSeleccionada = fruta
  }
}
