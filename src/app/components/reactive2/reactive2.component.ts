import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive2',
  templateUrl: './reactive2.component.html',
  styleUrl: './reactive2.component.scss',
})
export class Reactive2Component {
  frmPersona = new FormGroup({
    nome: new FormControl('', Validators.minLength(3)),
    gender: new FormControl('M'),
  });

  inviaPersona() {
    console.log(this.frmPersona.value);
  }

  beLaura() {
    this.frmPersona.setValue({
      nome: 'Laura',
      gender: 'F',
    });
  }

  // Se voglio cambiare alcune chiavi del formGroup basta usare patchValue
  beM() {
    this.frmPersona.patchValue({
      gender: 'M',
    });
  }

  // Accedere ad un formControl all'interno del formGroup
  leggiNome() {
    const theName = this.frmPersona.get('nome')?.value;
    alert(`Hai digitato ${theName}`);
  }
}
