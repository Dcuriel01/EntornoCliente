import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
nUsuario !:string|null
constructor(private router:Router,private servicioCliente:ServicioClienteService){
  if (sessionStorage.getItem('Email')==null) {
    this.registrado = false
  }else{
    this.nUsuario=sessionStorage.getItem('Email')
  }
}
registrado = true
privado !: boolean
usuario: Usuario=new Usuario();
listaUsuarios:Usuario[]=[];
Login() {
  this.servicioCliente.logeo(this.usuario).subscribe(
    (x) => {
    this.usuario=x[0];
    sessionStorage.setItem('Email',x[0].email);
    if (this.privado) {
      this.router.navigate(['chatp']);
    }else{
      this.router.navigate(['chat']);
    }
  },
    (error) => {
      alert('El usuario no existe o esta bloqueado');
    }
  )


}

}
