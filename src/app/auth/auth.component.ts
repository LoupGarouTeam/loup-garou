import {Component, OnInit} from '@angular/core';
import {PseudoService} from '../pseudo.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {forbiddenNameValidator} from './forbidden-name.directive';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

    pseudo: string;
    noPseudo: boolean;
    pseudoForm: FormGroup;
    forbiddenRegex = new RegExp('patrick','i');
    active = true;

    constructor(private _pseudoService: PseudoService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.pseudo = this._pseudoService.getPseudo();
        this.buildForm();
    }

    submitPseudo() {
        this._pseudoService.addPseudo(this.pseudo);
    }

    onSubmit() {
        this.buildForm();
        this.pseudo = this.pseudoForm.value.pseudo;

        if (this.pseudo.length > 4) {
            this.noPseudo = true;
        } else {
            this.noPseudo = false;
        }
        console.log(this.pseudo);
        this.submitPseudo();
    }

    buildForm(): void {
        this.pseudoForm = this.fb.group({
            'pseudo': [this.pseudo, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(16),
                forbiddenNameValidator(this.forbiddenRegex)]
            ]
        });
        this.pseudoForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
    }


    onValueChanged(data?: any) {
        if (!this.pseudoForm) {
            return;
        }
        const form = this.pseudoForm;

        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'pseudo': ''
    };

    validationMessages = {
        'pseudo': {
            'required': 'Un pseudo est obligatoire.',
            'minlength': 'Le nom doit être composé de 4 caractères minimum.',
            'maxlength': 'Le nom doit être composé de 16 caractères maximum.',
            'forbiddenName': 'Ce pseudo n\'est pas disponible.'
        }
    };
}
