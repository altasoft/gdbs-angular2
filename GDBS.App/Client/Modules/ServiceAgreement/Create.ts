import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES } from 'angular2/common';


@Component({
    selector: 'create',
    templateUrl: 'Create.ts.html',
})

export class Create {

    form: ControlGroup;


    constructor(private builder: FormBuilder) {

        this.form = builder.group({
            username: new Control('', Validators.compose([Validators.required, UsernameValidator.startsWithNumber])),
            type: new Control('', Validators.required)
        });
    }


    goBack() {
        window.history.back();
    }


    submitData() {
        console.log(JSON.stringify(this.form.value))
    }

    changeValidator() {
        this.form.controls['username'].validator = null
        this.form.controls['type'].validator = null

        this.form.controls['username'].updateValueAndValidity({
            onlySelf: false,
            emitEvent: true
        })
        this.form.controls['type'].updateValueAndValidity({
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
