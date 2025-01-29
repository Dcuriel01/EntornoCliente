import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
usuario: Usuario=new Usuario();
constructor(private servicio: ServicioClienteService,private route:Router)
{}
Registrar() {

  //llamar al servicio de añadirNuevoUsuario (usuario)
   this.servicio.insertarUsuario(this.usuario).subscribe((x:Usuario)=>{
    this.usuario=x;

   })
   this.route.navigate(['login'])

}

}
