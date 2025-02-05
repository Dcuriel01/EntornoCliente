import { Component, ViewChild } from '@angular/core';
import { Mensaje } from '../mensaje';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Router } from '@angular/router';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServicioAdminService } from '../servicio-admin.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  refrescar(){
    this.servicio.leerMensajes().subscribe((resultado:Mensaje[])=>{
      this.dataSource.data=resultado
      this.dataSource.paginator = this.paginator1
      this.dataSource.sort=this.sort1
    })
    this.servicio.obtenerUsuarios().subscribe((resultado:Usuario[])=>{
      this.dataSource2.data=resultado
      this.dataSource2.paginator = this.paginator2
      this.dataSource2.sort=this.sort2
    })
  }
    constructor(private servicio:ServicioAdminService,private route:Router){}
    dataSource = new MatTableDataSource<Mensaje>()
    dataSource2 = new MatTableDataSource<Usuario>()

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    applyFilter2(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource2.filter = filterValue.trim().toLowerCase();

      if (this.dataSource2.paginator) {
        this.dataSource2.paginator.firstPage();
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
    displayedColumns: string[]=['id','fecha','usuario','mensaje','destinatario','activo','acciones'];
    displayedColumns2: string[]=['nombre','email','activo','pwd','acciones'];
    ngOnInit(): void {
      this.nUsuario = sessionStorage.getItem('Email')
      if (this.nUsuario==null) {
        this.dataSource= new MatTableDataSource<Mensaje>()
        this.dataSource2= new MatTableDataSource<Usuario>()
      }else{

        this.servicio.leerMensajes().subscribe((resultado:Mensaje[])=>{
          this.dataSource.data=resultado
          this.dataSource.paginator = this.paginator1
          this.dataSource.sort=this.sort1
        })
        this.servicio.obtenerUsuarios().subscribe((resultado:Usuario[])=>{
          this.dataSource2.data=resultado
          this.dataSource2.paginator = this.paginator2
          this.dataSource2.sort=this.sort2
        })
      }
    }

    cerrarSesion() {
      sessionStorage.removeItem('Email')
      this.nUsuario = 'Sesión cerrada'
      this.dataSource = new MatTableDataSource<Mensaje>()
      this.route.navigate(['login'])
    }

    activarM(mensaje:Mensaje){
      this.servicio.activarMensaje(mensaje).subscribe((resultado: Mensaje) => {
      },
      () => {
        this.refrescar();
        alert('Mensaje activado');
      }
    );
    }

    bloquearM(mensaje:Mensaje){
      this.servicio.bloquearMensaje(mensaje).subscribe((resultado: Mensaje) => {
        },
        () => {
          this.refrescar();
          alert('Mensaje bloqueado');
        }
      );

    }

    activarU(usuario:Usuario){
      this.servicio.activarUsuario(usuario).subscribe((resultado: Usuario) => {
      },
      () => {
        this.refrescar();
        alert('Usuario activado');
      }
    );
    }

    bloquearU(usuario:Usuario){
      this.servicio.bloquearUsuario(usuario).subscribe((resultado: Usuario) => {
      },
      () => {
        this.refrescar();
        alert('Usuario activado');
      }
    )
    }

    @ViewChild(MatSort) sort1!: MatSort;
    tabla!:MatTable<Mensaje>
    @ViewChild('paginator1') paginator1!: MatPaginator;

    @ViewChild('paginator2') paginator2!: MatPaginator;
    @ViewChild(MatSort) sort2!: MatSort;
    tabla2!:MatTable<Mensaje>

}
