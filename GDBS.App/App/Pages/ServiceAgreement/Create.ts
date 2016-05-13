import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Http, Response } from 'angular2/http';
import { FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES, ControlArray } from 'angular2/common';


@Component({
    selector: 'create',
    templateUrl: 'Create.ts.html',
})

export class Create {

    form: ControlGroup;
    meterPointsGroup: ControlGroup;
    contactPersonsGroup: ControlGroup;

    MeterPoints = [];
    ContactPersons = [];

    isSubmitting = false
    isSuccess = false
    error = ''


    constructor(private builder: FormBuilder, private http: Http) {

        this.meterPointsGroup = new ControlGroup({
            AdminNumber: new Control('', Validators.required, UsernameValidator.checkAdminNumber(http))
        })

        this.contactPersonsGroup = new ControlGroup({
            Name: new Control('', Validators.required),
            Mobile: new Control('', Validators.required),
            Email: new Control('', Validators.required),
        })

        this.form = builder.group({
            FunctionType: ['', Validators.required],
            OwnershipType: ['', Validators.required],
            ServiceType: [],
            RegularWarrantyDepositLimit: [],
            FrozenWarrantyDepositLimit: [],
            OldCustomerNumber: [],
            Description: [],
            State: [],
            GeneralContractNumber: [],
            SupplyPointNumber: [],
            ServiceUnitId: [],
            SMSService: [],
            MeterPoint: this.meterPointsGroup,
            ContactPerson: this.contactPersonsGroup,
            DocId: [],
            WebUrl: []
        })

        this.form.exclude('MeterPoint')
        this.form.exclude('ContactPerson')
    }

    goBack() {
        window.history.back();
    }


    addMeterPoint(obj) {
        var url = 'http://localhost:30507/api/ServiceAgreement/CheckMeterPointAdminNumber/' + 123123123

        this.http.get(url)
            .subscribe(
            res => { console.log('success', res); },
            err => { console.log(err); },
            () => { console.log('complete'); }
            );


        this.MeterPoints.push(obj);

        for (let i in this.meterPointsGroup.controls)
            this.resetForm(this.meterPointsGroup)
    }

    addContactPerson(obj) {
        this.ContactPersons.push(obj);

        for (let i in this.contactPersonsGroup.controls)
            this.resetForm(this.contactPersonsGroup)
    }


    submitData() {
        var data = this.form.value;
        data.MeterPoints = this.MeterPoints.map(x => x.AdminNumber);
        data.ContactPersons = this.ContactPersons;

        this.isSubmitting = true;
        this.isSuccess = false;

        this.http.post('http://localhost:30507/api/ServiceAgreement/Create', JSON.stringify(data)).subscribe(
            res => this.isSuccess = true,
            error => this.error = error,
            () => this.isSubmitting = false
        );
    }

    resetForm(group: ControlGroup) {
        for (let i in group.controls) {
            var control = (group.controls[i] as Control);
            if (control)
                control.updateValue('');
        }
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

    static checkAdminNumber(http: Http) {
        return (control: Control): Promise<ValidationResult> => {

            return new Promise((resolve, reject) => {
                var url = 'http://localhost:30507/api/ServiceAgreement/CheckMeterPointAdminNumber/' + control.value

                http.get(url).subscribe(
                    (res: Response) => {
                        var isValid = res.text() === 'true';

                        resolve(isValid ? null : { "checkAdminNumber": true });
                    },
                    err => resolve({ "checkAdminNumber": true })
                );
            });
        }
    }

}
