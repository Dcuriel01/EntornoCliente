import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruta } from './fruta';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  constructor(private http: HttpClient) {}
  rutaFichero = 'assets/precios.txt'
  obtenerFrutas(): Observable<string>{
  return this.http.get(this.rutaFichero, { responseType: 'text' });}
  procesarFrutas(frutaTexto:string):Fruta[]{
    const frutas: Fruta[] = [];
    const lineas = frutaTexto.split('\n');
    lineas.forEach(linea => {
      const partes = linea.split(':');
      let fruta = new Fruta(partes[0],partes[1])
      frutas.push(fruta)
      console.log(frutas[0])
    });
    return frutas
  }
}
