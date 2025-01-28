import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioClienteService } from '../servicio-cliente.service';
import { Usuario } from '../usuario';
import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!:FormGroup
  ngOnInit(): void {
    this.form=new FormGroup({
      emailFormControl : new FormControl('', [Validators.required, Validators.email]),
      contrasenaFormControl : new FormControl('', [Validators.required , Validators.minLength(3)])
    })
  }

  constructor(private httpCliente: ServicioClienteService) {
  }
  listaUsuario!:Usuario[]
  usuario: Usuario = {
    nombre: '',
    email: '',
    pwd: '',
    activo: 0,
  };
  logueo() {
    this.httpCliente.logueo(this.form.value).subscribe((c:Usuario[])=>(this.usuario=c[0]))
    alert('Login completado ' + this.usuario.nombre)
    sessionStorage.setItem('Nombre',this.usuario.nombre)
    // this.router.navigate(['chat'])
  }
}
