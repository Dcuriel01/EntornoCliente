import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Usuario } from '../usuario';
import { ServicioClienteService } from '../servicio-cliente.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  form!:FormGroup

  ngOnInit(): void {
    this.form= new FormGroup({
      emailFormControl : new FormControl('', [Validators.required, Validators.email]),
      nombreFormControl : new FormControl('', [Validators.required]),
      contrasenaFormControl : new FormControl('', [Validators.required , Validators.minLength(3)]),
    })
  }



  constructor(private httpCliente: ServicioClienteService) {
  }
  usuario: Usuario = {
    nombre: '',
    email: '',
    pwd: '',
    activo: 0,
  };

  altaUsuario() {
    this.httpCliente.altaUsuario(this.form.value).subscribe((c:Usuario)=>(this.usuario=c))
    alert('Registro completado')
  }
}
