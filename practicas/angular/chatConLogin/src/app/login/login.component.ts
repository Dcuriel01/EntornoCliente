import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';
import { NgModel } from '@angular/forms';
import { ServicioClienteLocalService } from '../servicio-cliente-local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  servicio !: any
  online = false
  nUsuario !: string | null
  constructor(private servicioLocal:ServicioClienteLocalService,private route:Router,private servicioOnline:ServicioClienteService){
    if (sessionStorage.getItem('Email') == null) {
      this.registrado = false
    } else {
      this.nUsuario = sessionStorage.getItem('Email')
    }
  }
  ngOnInit(): void {
    if (sessionStorage.getItem('Estado')=='online') {
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
  privado !: boolean
  usuario: Usuario = {
    nombre: '',
    email: '',
    pwd: '',
    activo: 1
  }
  usuarioEncontrado: Usuario = {
    nombre: '',
    email: '',
    pwd: '',
    activo: 1
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
    console.log(sessionStorage.getItem('Estado'))
  }
  encontrado = false;
  listaUsuarios: Usuario[] = [];
  Login() {
    this.servicio.logeo(this.usuario).subscribe(
      (x:Usuario) => {
        sessionStorage.setItem('Email', this.usuario.email);
        if (this.privado) {
          this.route.navigate(['chatp']);
        } else {
          this.route.navigate(['chat']);
        }
      }
    )

  }

}
