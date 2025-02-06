import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive1',
  templateUrl: './reactive1.component.html',
  styleUrl: './reactive1.component.scss',
})
export class Reactive1Component {
  // Definisco un FormControl per la proprietà 'nome', il cui valore può essere modificato all'interno del componente
  nome = new FormControl('');

  mostraNome() {
    alert(`Il tuo nome è ${this.nome.value}`);
  }

  cambiaNome() {
    this.nome.setValue('Gianloreto');
  }

  reimpostaNome() {
    this.nome.reset();
  }
}
