import {Component, OnInit} from '@angular/core';
import {PseudoService} from '../pseudo.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {forbiddenNameValidator} from './forbidden-name.directive';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

    user: string;
    noUser: boolean;
    userForm: FormGroup;
    forbiddenRegex = new RegExp('patrick','i');
    active = true;

    constructor(private _pseudoService: PseudoService, private fb: FormBuilder, private router: Router) {
    }

    ngOnInit() {
        this.user = this._pseudoService.getPseudo();
        this.buildForm();
    }

    submitPseudo() {
        this._pseudoService.addPseudo(this.user);
        this.router.navigateByUrl('role');
    }

    onSubmit() {

        this.user = this.userForm.value.user;
        if (this.user.length >= 4) {
            this.noUser = true;
        } else {
            this.noUser = false;
        }
        this.submitPseudo();
    }

    buildForm(): void {
        this.userForm = this.fb.group({
            'user': [this.user, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(16),
                forbiddenNameValidator(this.forbiddenRegex)]
            ]
        });
        this.userForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
    }


    onValueChanged(data?: any) {
        if (!this.userForm) {
            return;
        }
        const form = this.userForm;

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
        'user': ''
    };

    validationMessages = {
        'user': {
            'required': 'Un pseudo est obligatoire.',
            'minlength': 'Le nom doit être composé de 4 caractères minimum.',
            'maxlength': 'Le nom doit être composé de 16 caractères maximum.',
            'forbiddenName': 'Ce pseudo n\'est pas disponible.'
        }
    };
}
