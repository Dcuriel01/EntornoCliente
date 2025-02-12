import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';
import { ServicioClienteLocalService } from '../servicio-cliente-local.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
usuario: Usuario=new Usuario();
nUsuario !:string|null
servicio !: any
online = false
ngOnInit(): void {
  if (this.online) {
    this.servicio=this.servicioOnline
    sessionStorage.setItem('Estado', 'online');
  }else{
    this.servicio=this.servicioLocal
    sessionStorage.setItem('Estado', 'local');
  }
}
constructor(private servicioLocal:ServicioClienteLocalService,private route:Router,private servicioOnline:ServicioClienteService){
  if (sessionStorage.getItem('Email')==null) {
    this.registrado = false
  }else{
    this.nUsuario=sessionStorage.getItem('Email')
  }
}
comprobarOnline(){
  if (this.online) {
    this.online=false
  }else{
    this.online=true
  }
  if (this.online) {
    this.servicio=this.servicioOnline
    sessionStorage.setItem('Estado', 'online');
  }else{
    this.servicio=this.servicioLocal
    sessionStorage.setItem('Estado', 'local');
  }
}
registrado = true
Registrar() {

  //llamar al servicio de añadirNuevoUsuario (usuario)
   this.servicio.insertarUsuario(this.usuario).subscribe((x:Usuario)=>{
    this.usuario=x;

   })
   this.route.navigate(['login'])

}

}
