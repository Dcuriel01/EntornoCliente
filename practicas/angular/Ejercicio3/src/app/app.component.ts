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
      letras: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      num: ['', [Validators.required,Validators.pattern('^[0-9]+$')]],
      mayus: ['', [Validators.required,Validators.pattern('^[A-Z]+$')]],
      rang: ['', [Validators.required,Validators.min(100),Validators.max(200)]],
      cinco: ['', [Validators.required,Validators.pattern('^[0-9]{5}$')]],
      diezLetras: ['', [Validators.required,Validators.pattern('^[a-zA-Z]{10}$')]]
    })
  }

}
