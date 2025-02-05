import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
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
export class LoginComponent {
nUsuario !:string|null
constructor(private router:Router,private servicioCliente:ServicioClienteLocalService){
  if (sessionStorage.getItem('Email')==null) {
    this.registrado = false
  }else{
    this.nUsuario=sessionStorage.getItem('Email')
  }
}
registrado = true
privado !: boolean
usuario:Usuario={
  nombre:'',
  email:'',
  pwd:'',
  activo:1
}
usuarioEncontrado:Usuario={
  nombre:'',
  email:'',
  pwd:'',
  activo:1
}
encontrado=false;
listaUsuarios:Usuario[]=[];
Login() {
  this.servicioCliente.obtenerUsuarios().subscribe(x=>{
    this.listaUsuarios=x;
    this.listaUsuarios.forEach(user => {
              if (user.email === this.usuario.email && user.pwd === this.usuario.pwd && user.activo === 1) {
                 this.usuarioEncontrado = user;
                 this.encontrado = true;
                }
   });
   if (this.encontrado) {
    sessionStorage.setItem('Email',this.usuario.email);
    if (this.privado) {
      this.router.navigate(['chatp']);
    }else{
      this.router.navigate(['chat']);
    }
  }else{
    alert('El usuario no existe o esta bloqueado');
  }
});
  // this.servicioCliente.logeo(this.usuario).subscribe(
  //   (x) => {
  //   this.usuario=x[0];
  //   sessionStorage.setItem('Email',x[0].email);
  //   if (this.privado) {
  //     this.router.navigate(['chatp']);
  //   }else{
  //     this.router.navigate(['chat']);
  //   }
  // },
  //   (error) => {
  //     alert('El usuario no existe o esta bloqueado');
  //   }
  // )


}

}
