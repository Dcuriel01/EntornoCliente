import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClaseNumero } from '../clase-numero';

@Component({
  selector: 'app-dialogo-sin-indice',
  templateUrl: './dialogo-sin-indice.component.html',
  styleUrls: ['./dialogo-sin-indice.component.css']
})
export class DialogoSinIndiceComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogoSinIndiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClaseNumero
  ) {}
  Cancelar() {
    this.dialogRef.close();
  }
}
