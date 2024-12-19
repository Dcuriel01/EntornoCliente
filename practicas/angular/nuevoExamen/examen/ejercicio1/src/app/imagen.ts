export class Imagen {
  id!: number;
  imagen!: string;
  texto!: string;
  subtexto!: string;
  activo!: number;
  constructor(id: number,imagen: string,texto: string,subtexto: string,activo: number){
    this.id= id;
    this.imagen= imagen;
    this.texto= texto;
    this.subtexto= subtexto;
    this.activo= activo;
  }
}
