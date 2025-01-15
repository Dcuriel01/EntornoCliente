import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  EnviarDatos() {
    alert("OK")
  }

  FRegistro!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.FRegistro = this.fb.group({
      nombre: ['', [Validators.required,Validators.maxLength(20)]],
      email: ['', [Validators.required,Validators.pattern('')]],
      edad: ['', [Validators.required,Validators.min(18)]],
      salario: ['', [Validators.required,Validators.min(900),Validators.max(1200)]]
    })
  }

}
