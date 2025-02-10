import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive3',
  templateUrl: './reactive3.component.html',
  styleUrl: './reactive3.component.scss',
})
export class Reactive3Component {
  // Controllo custom di un FormControl
  citta = new FormControl('', (control: AbstractControl) => {
    const value: string = control.value;
    const accepted = ['roma', 'milano', 'napoli'];
    if (accepted.includes(value.toLowerCase())) {
      // Restituisco null se il valore è valid
      return null;
    }
    // Restituisco un ValidationErrors se il valore è invalid
    return {
      // Nome del validatore che ho violato
      cittaSconosciuta: {
        // Informazioni utili
        valoreDigitato: value,
        valoriAmmessi: accepted,
      },
    };
  });

  // Controllo custom di un FormGroup
  choose_pwd = new FormGroup(
    {
      pwd: new FormControl(''),
      repeat_pwd: new FormControl(''),
    },
    (group: AbstractControl) => {
      const pwd1 = group.get('pwd')!.value;
      const pwd2 = group.get('repeat_pwd')!.value;
      return pwd1 === pwd2 ? null : { msg: 'Le password non coincidono' };
    }
  );
}
