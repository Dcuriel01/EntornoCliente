import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Mensaje } from '../mensaje';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';
import { ServicioClienteLocalService } from '../servicio-cliente-local.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  pwdNueva!: string
  usuario: Usuario = {
    nombre: '',
    email: '',
    pwd: '',
    activo: 1
  }
  cambiarPWD() {
    this.usuario.email = this.nUsuario || ''
    this.usuario.pwd = this.pwdNueva
    this.servicio.cambiarPWD(this.usuario).subscribe()
    alert('Contraseña cambiada')
    this.cerrarSesion()
  }

  enviarMensaje() {
    this.mensaje.usuario = this.nUsuario || ''
    this.mensaje.fecha = new Date().toLocaleString()
    this.servicio.escribirMensaje(this.mensaje).subscribe()
    alert('Mensaje enviado')
  }
  refrescar() {
    this.servicio.leerMensajes().subscribe((resultado: Mensaje[]) => {
      this.dataSource.data = resultado
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
  }
  constructor(private servicio: ServicioClienteLocalService, private route: Router) { }
  dataSource = new MatTableDataSource<Mensaje>()

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  nUsuario!: string | null
  mensaje: Mensaje = {
    id: 0,
    fecha: '',
    usuario: '',
    mensaje: '',
    destinatario: 'todos',
    activo: 1
  }
  displayedColumns: string[] = ['id', 'fecha', 'usuario', 'mensaje'];

  ngOnInit(): void {
    this.nUsuario = sessionStorage.getItem('Email')
    if (this.nUsuario==null) {
      this.dataSource= new MatTableDataSource<Mensaje>()
    }else{

      this.servicio.leerMensajes().subscribe((resultado:Mensaje[])=>{
        this.dataSource.data=resultado
        this.dataSource.paginator = this.paginator
        this.dataSource.sort=this.sort
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
  tabla!: MatTable<Mensaje>


}


