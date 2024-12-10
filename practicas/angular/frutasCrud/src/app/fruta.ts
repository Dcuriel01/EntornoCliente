export class Fruta {
  id!: string;
  nombre!: string;
  precio!: number;
  unidades!: number;
  imagen!:string;
  constructor(id:string,nombre:string,precio:number,unidades:number,imagen:string){
    this.id=id;
    this.nombre=nombre;
    this.precio=precio;
    this.unidades=unidades;
    this.imagen=imagen;
  }
}
