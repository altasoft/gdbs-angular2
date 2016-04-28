import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';
import {Validator} from '../../Common/Components/Validator';
import {Service} from './Service'

@Component({
    selector: 'create',
    templateUrl: 'Create.ts.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [Service]
})

export class Create {
    isSubmitting = false;
    success = false;
    fail = false;

    form: ControlGroup;

    legalEntityGroup: ControlGroup;
    isIndividual: Control;
    fullName: Control;
    legalLocation: Control;
    legalAddress: Control;
    actualLocation: Control;
    actualAddress: Control;

    individualEntityGroup: ControlGroup;
    personalId: Control;
    name: Control;
    surname: Control;
    dateOfIssue: Control;
    type: Control;
    homePhone: Control;

    constructor(private customerService: Service, builder: FormBuilder) {
        this.isIndividual = new Control('', Validators.required);

        this.form = builder.group({
            'UFE.Customer.IsIndividual': this.isIndividual,
            'UFE.Customer.RegistrationLocationResid': this.legalLocation,
            'UFE.Customer.RegistrationAddressResid': this.legalAddress,
            'UFE.Customer.ActualLocationResid': this.actualLocation,
            'UFE.Customer.ActualAddressResid': this.actualAddress
        });
    }

    initGroups() {
        this.fullName = new Control('', Validators.required);
        this.legalLocation = new Control('', Validators.required);
        this.legalAddress = new Control('', Validators.required);
        this.actualLocation = new Control('', Validators.required);
        this.actualAddress = new Control('', Validators.required);

        this.legalEntityGroup = new ControlGroup({
            'UFE.Customer.FullName': this.fullName
        })

        this.personalId = new Control('', Validators.required);
        this.name = new Control('', Validators.required);
        this.surname = new Control('', Validators.required);
        this.type = new Control('', Validators.required);
        this.dateOfIssue = new Control('', Validators.required);
        this.homePhone = new Control('', Validators.compose([Validators.required, Validator.isNumber]));

        this.individualEntityGroup = new ControlGroup({
            'UFE.IndividualEntity.PersonalId': this.personalId,
            'UFE.IndividualEntity.Name': this.name,
            'UFE.IndividualEntity.Surname': this.surname,
            'UFE.IndividualEntity.Type': this.type,
            'UFE.IndividualEntity.DateofIssue': this.dateOfIssue,
            'UFE.Customer.Phone': this.homePhone
        })
    }

    submit() {
        this.isSubmitting = true;
        this.success = false;
        this.fail = false;

        var data = this.form.value;
        var entity = this.form.controls['legalEntity'] ? this.form.controls['legalEntity'].value : this.form.controls['individualEntity'].value;

        delete data['legalEntity'];
        delete data['individualEntity'];

        for (var property in entity)
            data[property] = entity[property];

        console.log(JSON.stringify(data));
        this.customerService.put(data, res => {
            this.success = res.Document != null && res.Document.Data != null;
            this.fail = !this.success;

            console.log(res);
        });

        this.isSubmitting = false;
    }

    change($event) {
        this.success = false;
        this.fail = false;

        if ($event.target.value != '') {
            this.initGroups();

            if ($event.target.value == 'True') {
                this.form.addControl('individualEntity', this.individualEntityGroup);
                this.form.removeControl('legalEntity');
            }
            else if ($event.target.value == 'False') {
                this.form.addControl('legalEntity', this.legalEntityGroup);
                this.form.removeControl('individualEntity');
            }
        }
    }
}