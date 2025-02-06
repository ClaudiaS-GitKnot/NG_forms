import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive1',
  templateUrl: './reactive1.component.html',
  styleUrl: './reactive1.component.scss',
})
export class Reactive1Component implements OnInit {
  // Definisco un FormControl per la proprietà 'nome', il cui valore può essere modificato all'interno del componente
  // Le proprietà di un formControl sono sempre di un tipo | null (nullable) perché gli input possono essere disabled
  // Da qui posso accedere ai validatori attraverso la classe Validators - questo dà accesso da template a tutti gli stati dell'input
  nome = new FormControl('');

  eta = new FormControl(undefined, [Validators.min(18), Validators.max(99)]);

  ccCheckBox = new FormControl(false);
  ccNumber = new FormControl('');

  ngOnInit() {
    this.ccNumber.disable();
    // Mi sottoscrivo al cambiamento del valore di 'nome'
    // L'observable in questo caso può servire a fare delle richieste di autocompletamento al server ma solo tramite "debounce"
    this.nome.valueChanges.subscribe((v) => {
      console.log(`Hai digitato ${v}`);
    });

    // Ogni qual volta cambia il valore del checkbox ccCheckBox...
    this.ccCheckBox.valueChanges.subscribe((v) => {
      if (v) {
        // Aggiungo il validator - numero di conto obbligatorio
        this.ccNumber.addValidators(Validators.required);
        // Abilito l'input
        this.ccNumber.enable();
      } else {
        // Tolgo il validator
        this.ccNumber.removeValidators(Validators.required);
        // Svuoto l'input se disabilito la checkbox
        this.ccNumber.setValue('');
        // Disabilito l'input
        this.ccNumber.disable();
      }
      // Aggiorno lo stato del FormControl
      this.ccNumber.updateValueAndValidity();
    });
  }

  mostraNome() {
    alert(`Il tuo nome è ${this.nome.value}`);
  }

  // Il metodo cambiaNome() attiverebbe il valueChanges di ngOnInit()
  // Per evitarlo (in contesti come la modifica di una fattura) si utilizza l'oggetto { emitEvent: false}
  cambiaNome() {
    this.nome.setValue('Gianloreto', { emitEvent: false });
  }

  reimpostaNome() {
    this.nome.reset();
  }
}
