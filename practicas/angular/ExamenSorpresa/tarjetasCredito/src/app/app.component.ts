import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  FRegistro!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.FRegistro = this.fb.group({
      visa: ['', [Validators.required, Validators.pattern('^4[0-9]{12}(?:[0-9]{3})?$')]],
      master: ['', [Validators.required, Validators.pattern('^5[1-5][0-9]{14}$')]],
      american: ['', [Validators.required, Validators.pattern('^3[47][0-9]{13}$')]],
      discover: ['', [Validators.required, Validators.pattern('^6(?011|5[0-9]{2})[0-9]{12}$')]],
      diners: ['', [Validators.required, Validators.pattern('^3(?:0[0-5][68][0-9])[0-9]{11}')]],
      jcb: ['', [Validators.required, Validators.pattern('^(?2131|1800|35ºd{3})\d{11}')]]
    })
  }
}
