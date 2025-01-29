import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router:Router,private servicioCliente:ServicioClienteService){

}
usuario: Usuario=new Usuario();
listaUsuarios:Usuario[]=[];
Login() {
  this.servicioCliente.logeo(this.usuario).subscribe((x)=>{
    this.usuario=x[0];
    sessionStorage.setItem('Nombre',x[0].nombre);
    this.router.navigate(['chat']);
  })

}

}
