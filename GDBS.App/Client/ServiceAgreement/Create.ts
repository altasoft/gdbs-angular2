import {Component, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';
import {
    FormBuilder,
    Validators,
    Control,
    ControlGroup,
    FORM_DIRECTIVES
} from 'angular2/common';


@Component({
    selector: 'create',
    templateUrl: '/html/ServiceAgreement/Create.html',
})

export class Create {

    form: ControlGroup;

    username: Control;
    type: Control;
    email: Control;
    asyncEmail: Control;


    constructor(private builder: FormBuilder) {

        this.username = new Control('', Validators.compose([Validators.required, UsernameValidator.startsWithNumber]));
        this.type = new Control('', Validators.required)

        this.form = builder.group({
            username: this.username,
            type: this.type
        });
    }


    goBack() {
        window.history.back();
    }


    submitData() {
        console.log(JSON.stringify(this.form.value))
    }

    changeValidator() {
        this.username.validator = UsernameValidator.startsWithNumber
        this.type.validator = null

        this.username.updateValueAndValidity({
            onlySelf: false,
            emitEvent: true
        })
        this.type.updateValueAndValidity({
            onlySelf: false,
            emitEvent: true
        })
    }
}


interface ValidationResult {
    [key: string]: boolean;
}

export class UsernameValidator {

    static startsWithNumber(control: Control): ValidationResult {

        if (control.value != "" && !isNaN(control.value.charAt(0))) {
            return { "startsWithNumber": true };
        }

        return null;
    }

    static usernameTaken(control: Control): Promise<ValidationResult> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "David") {
                    resolve({ "usernameTaken": true })
                } else {
                    resolve(null);
                };

            }, 1000);
        });

    }
}
