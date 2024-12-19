import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) {}
  cargarFicheroJson(rutaFichero: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(rutaFichero);
  }
}
