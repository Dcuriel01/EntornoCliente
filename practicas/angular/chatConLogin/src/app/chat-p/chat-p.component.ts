import { Component, ViewChild } from '@angular/core';
import { Mensaje } from '../mensaje';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Router } from '@angular/router';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-chat-p',
  templateUrl: './chat-p.component.html',
  styleUrls: ['./chat-p.component.css']
})
export class ChatPComponent {
  usuarios:Usuario[]=[]
  enviarMensaje() {
    this.mensaje.usuario=this.nUsuario || ''
    this.mensaje.fecha= new Date().toLocaleString()
    alert('Mensaje enviado')
    console.log(this.mensaje)
    this.servicio.escribirMensajeP(this.mensaje).subscribe()
  }
  refrescar(){
    this.servicio.leerMensajesP().subscribe((resultado:Mensaje[])=>{
      this.dataSource.data=resultado
      this.dataSource.paginator = this.paginator
      this.dataSource.sort=this.sort
    })
  }
    constructor(private servicio:ServicioClienteService,private route:Router){}
    dataSource = new MatTableDataSource<Mensaje>()

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    nUsuario!:string|null
    mensaje:Mensaje={
      id:0,
      fecha:'',
      usuario:'',
      mensaje:'',
      destinatario:'todos',
      activo:1
    }
    displayedColumns: string[]=['id','fecha','usuario','mensaje','destinatario'];

    ngOnInit(): void {
      this.nUsuario = sessionStorage.getItem('Email')
      if (this.nUsuario==null) {
        this.dataSource= new MatTableDataSource<Mensaje>()
      }else{
        this.servicio.leerMensajesP().subscribe((resultado:Mensaje[])=>{
          this.dataSource.data=resultado
          this.dataSource.paginator = this.paginator
          this.dataSource.sort=this.sort
        })
        this.servicio.obtenerUsuarios().subscribe((x:Usuario[])=>{
          this.usuarios=x
        })
      }
    }

    cerrarSesion() {
      sessionStorage.removeItem('Email')
      this.nUsuario = 'Sesión cerrada'
      this.dataSource = new MatTableDataSource<Mensaje>()
      this.route.navigate(['login'])
    }

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    tabla!:MatTable<Mensaje>

}
