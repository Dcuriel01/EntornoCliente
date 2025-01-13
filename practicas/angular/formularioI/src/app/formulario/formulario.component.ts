import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements  OnInit {
  EnviarDatos() {
    alert ("OK")
  }

   formulario1!:FormGroup;
   constructor(private fb:FormBuilder) { }
   ngOnInit(): void {
       this.formulario1=this.fb.group({

            name:[' ',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.minLength(3)]],


            firstName:[' ',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.maxLength(20)]],

           mail:[ ' ',[Validators.required,Validators.email]],

           password:[' ',[Validators.required,Validators.minLength(8),   Validators.pattern('/^(?=.*[a-z])(?=.*\d)/i')]]
      })
    }
}
