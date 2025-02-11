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

# - Fifth Commit - Reactive Form - FormGroup annidati in Reactive2Component

APPUNTI:

Annidamento di FormGroup contenenti dei FormControl

In HTML:

- [formGroup]='frmPersona' nel tag <form>
- formGroupName='indirizzo' per il div che contiene i FormControl di 'indirizzo'
- <label> e <input> hanno gli attributi for, formControlName e id con stesso valore
- negli <input> inserisco il formControlName='via/civico'

Refactoring di get('indirizzo') - reactive2.component.ts riga 44:

- seleziono la porzione di codice che voglio semplificare
- tasto destro -> refactoring
- scelgo in cosa trasformarlo
  Il refactoring può essere utile nelle form quando quella riga di codice viene ripetuta più volte.

# - Sixth Commit - Reactive Form - Custom Convalidation with FormControl and FormGroup in Reactive3Component

- Controllo inserimento elemento presente in un array di città su FormControl
  - metodo .join() - inserire caratteri fra i valori di un array
  - pipe titlecase
- Controllo inserimento password in due FormControl di un FormGroup
  - gestione errore con operatore ternario e messaggio

# - Seventh Commit - Reactive Form - FormArray in Reactive4Component

APPUNTI:

FormArray di FormControls
Ciclo su input e index per gli attributi -> let i = index;
Disabilitare l'eliminazione dell'unico input presente -> let primo = first -> [disabled]='primo'

FormArray di FormGroup
Creare un FormGroup contenente un FormArray di FormGroup
Getter per estensione classe AbstractControl (al posto dei metodi)
Precompilare i campi di un FormArray con dati del backend
