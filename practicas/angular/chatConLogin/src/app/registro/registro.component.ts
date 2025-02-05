import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';
import { ServicioClienteLocalService } from '../servicio-cliente-local.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
usuario: Usuario=new Usuario();
nUsuario !:string|null
constructor(private route:Router,private servicio:ServicioClienteLocalService){
  if (sessionStorage.getItem('Email')==null) {
    this.registrado = false
  }else{
    this.nUsuario=sessionStorage.getItem('Email')
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
