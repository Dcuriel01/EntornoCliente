import { Injectable } from '@angular/core';
import { Imagen } from './imagen';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  constructor(private http: HttpClient) {}

  cargarFicheroJson(rutaFichero: string): Observable<Imagen[]> {
    return this.http.get<Imagen[]>(rutaFichero);
  }
}
