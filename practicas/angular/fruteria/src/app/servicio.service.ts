import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModule } from './producto/producto.module';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  constructor(private httpClient:HttpClient) {}
  leerProductos():Observable<ProductoModule[]>{
    return this.httpClient.get<ProductoModule[]>('http://moralo.atwebpages.com/menuAjax/productos2/index.php')
  }
  crearFruta(fruta:ProductoModule):Observable<ProductoModule>{
    return this.httpClient.post<ProductoModule>('http://moralo.atwebpages.com/menuAjax/productos2/create_product.php',fruta)
  }
  eliminarFruta(id:number){
    return this.httpClient.delete<ProductoModule>('http://moralo.atwebpages.com/menuAjax/productos2/delete_product.php/?id='+id)
  }
  actualizarFruta(fruta:ProductoModule){
    return this.httpClient.put<ProductoModule>('http://moralo.atwebpages.com/menuAjax/productos2/update_product.php/',fruta)
  }

}
