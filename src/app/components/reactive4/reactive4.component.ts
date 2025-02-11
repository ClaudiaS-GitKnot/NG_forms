import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive4',
  templateUrl: './reactive4.component.html',
  styleUrl: './reactive4.component.scss',
})
export class Reactive4Component implements OnInit {
  // Array di FormControl
  // Definisco un FormArray di FormControls
  indirizzi_email = new FormArray<FormControl>([]);

  ngOnInit(): void {
    this.addEmail();
  }

  addEmail() {
    this.indirizzi_email.push(
      new FormControl('', [Validators.required, Validators.email])
    );
  }

  // Rimuovere una mail
  removeEmail(x: number) {
    this.indirizzi_email.removeAt(x);
  }

  // Eliminare tutte le mail
  eliminaTutte() {
    this.indirizzi_email.clear();
  }

  // Eliminare le mail che non superano una certa validazione
  eliminaEmailNonValide() {
    this.indirizzi_email.controls = this.indirizzi_email.controls.filter(
      (c) => c.valid
    );
  }

  // Marca gli input con email non valide
  mostraEmailNonValide() {
    this.indirizzi_email.markAllAsTouched();
  }

  // Array di FormGroup
  // Definisco un FormArray di FormGroup
  frm = new FormGroup({
    nome: new FormControl(''),
    cognome: new FormControl(''),
    note: new FormControl(''),
    indirizzo: new FormArray<FormGroup>([]),
  });

  // Metodo che crea un FormGroup e lo ritorna
  createIndirizzo() {
    const f = new FormGroup({
      via: new FormControl(''),
      cap: new FormControl(''),
    });
    return f;
  }

  // Proprietà che estende la classe AbstractControl alla classe FormArray
  get indirizzoFormArray() {
    return this.frm.get('indirizzo')! as FormArray<FormGroup>;
  }

  // Proprietà che permette di accedere a .controls di FormArray
  get indirizziControls() {
    return this.indirizzoFormArray.controls as FormGroup[];
  }

  // Metodo che aggiunge il FormGroup creato al FormArray
  // get() è un metodo della classe AbstractControl e il metodo push() non le appartiene
  // per questo motivo devo estendere la classe AbstractControl alla classe FormArray
  // Dato che nei form questa estensione
  addIndirizzo() {
    // this.frm.get('indirizzo').push(this.createIndirizzo());
    this.indirizzoFormArray.push(this.createIndirizzo());
  }

  // Simulo la risposta del backend che mi manda:
  indirizziFromBackend = [
    { via: 'Via del Corso 32', cap: '00100' },
    { via: 'Piazza Alabania 2', cap: '00153' },
  ];

  // Metodo che carica gli indirizzi del backend per prepopolare il form
  caricaIndirizzi() {
    // Per ogni oggetto di indirizziFromBackend
    for (let i of this.indirizziFromBackend) {
      // Creo un FormGroup di indirizzi
      const indirizzo = this.createIndirizzo();
      // e ne faccio il setValue
      indirizzo.setValue(i);
      // Aggiungo il FormGroup al FormArray
      this.indirizzoFormArray.push(indirizzo);
    }
  }
}
