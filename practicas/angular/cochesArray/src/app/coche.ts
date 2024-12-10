export class Coche {
  matricula!: string;
  marcaModelo!: string;
  km!: number;
  color!:string;
  constructor(matricula:string,marcaModelo:string,km:number,color:string){
    this.matricula=matricula;
    this.marcaModelo=marcaModelo;
    this.km=km;
    this.color=color;
  }
}
