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
    indirizzo: new FormGroup({
      via: new FormControl(''),
      civico: new FormControl(''),
    }),
  });

  inviaPersona() {
    console.log(this.frmPersona.value);
  }

  beLaura() {
    this.frmPersona.setValue({
      nome: 'Laura',
      gender: 'F',
      indirizzo: { via: '', civico: '' },
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

  // Refactoring
  setDefaultAddress() {
    this.getIndirizzo().setValue({
      via: 'Via Del Corso',
      civico: '15',
    });
  }
  private getIndirizzo() {
    // Il valore di ritorno è un AbstractControl, se voglio che mi ritorni il FormGroup lo casto con 'as FormGroup'
    return this.frmPersona.get('indirizzo')! as FormGroup;
  }

  civicoSconosciuto() {
    this.getIndirizzo().get('civico')!.setValue('sconosciuto');
  }
}
