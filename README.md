# - Template Driven Form in TemplateDrivenComponent

APPUNTI:

Definizione di una Template Variable (#) di nome #ex1_form con valore ngForm
Template Variable su ogni input (#nome='ngModel')
Two Way Binding sull'input
Stati del form e degli inputs: touched - untouched | dirty - pristine | valid - invalid
Validatori HTML5: required | [disabled] | [pattern] | minlength | maxlength
[ngClass]='{}' - inserisci una classe in modo condizionale
Regex - [pattern] proprietà del componente
email.errors controllo della mail (required: true - pattern) o valida (null)
<ng-container> può gestire i messaggi di errore - contenitore che non manipola il DOM

# - Second Commit

Navbar | Home | Dropdown menu | Routing | RouterLink Active | RouterLinkOptions

# - Third Commit - Reactive Form - FormControl in Reactive1Component

APPUNTI:

- Nei reactive forms non è necessario l'attributo 'name'
- Inserisco nell'input la proprietà [formControl] con il valore della proprietà dell'input definita nello script - N.B. se si tratta di più di un input la proprietà .ts diventa un oggetto che contiene più chiavi -> myForm = { nome: '', cognome: '' }
- Il FormControl permette di accedere alla classe Validators direttamente dallo script: required | minLength | maxLength | min | max | pattern | email | custom
- Il FormControl permette di accedere alle proprietà e ai metodi della form come ad esempio valueChanges che aiuta nel monitorare con le Osbervable il cambiamento di un valore. N.B. Quando l'Observable si trova in ngOnInit() significa che parte al caricamento del componente. Se voglio bloccare il flusso utilizzo l'oggetto { emitEvent: false }
- Metodi:
  - setValue(<valore>) | cambia il valore del campo
  - reset() | resetta il valore del campo
  - disable() | disabilita il campo
  - enable() | abilita il campo
  - addValidators(Validators.<validatore>) | aggiunge un validatore al campo
  - removeValidators(Validators.<validatore>) | rimuove il validatore dal campo
  - updateValueAndValidity() | ricalcola il valore e la validazione del campo
- Il FormControl permette di accedere alle proprietà di validazione in HTML:
  - errors | è la proprietà dell'oggetto ValidationErrors e controlla se sono presenti errori di validazione nel campo (es. name.errors['minLength'])
  - valid / invalid | lo stato del campo è valido o non valido
  - dirty / pristine | il valore del campo è cambiato o non è cambiato
  - touched / untouched | il campo ha preso il focus o non ha preso il focus

# - Fourth Commit - Reactive Form - FormGroup in Reactive2Component

APPUNTI:

- FormGroup è una classe che definisce un gruppo di FormControls
- La proprietà del componente istanzia la classe FormGroup che conterrà le chiavi degli input
- Lego il tag form [formGroup]='frmPersona'
- Lego gli input alle chiavi formControlName='key'
- FormGroup eredita proprietà e metodi della classe FormControl - Superclasse AbstractControl

# NGForms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
