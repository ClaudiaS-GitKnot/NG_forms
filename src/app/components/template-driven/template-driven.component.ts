import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss',
})
export class TemplateDrivenComponent {
  // Definisco una variabile da associare all'input con Two Way Binding
  // N.B. è buona norma attribuire una stringa vuota come valore dato che si tratta di un input di tipo testo
  ex1_nome: string = '';
  ex1_email: string = '';
  email_format = new RegExp(/^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/gm);
  ex1_msg: string = '';
}
