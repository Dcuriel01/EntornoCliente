export class Producto {
  id!: number;
  name!: string;
  price!: number;
  photo!: string;
  activo!: number;
  stockActual!: number;
  stockMinimo!: number;
  constructor(id: number,name: string,price: number,photo: string,activo: number,stockActual: number,stockMinimo: number){
    this.id= id;
    this.name= name;
    this.price= price;
    this.photo= photo;
    this.activo= activo;
    this.stockActual=stockActual
    this.stockMinimo=stockMinimo
  }
}
