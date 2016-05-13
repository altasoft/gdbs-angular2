import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';
import {Validator, InputField} from 'AltaSoft/Core';
import {Service} from './Service'

declare var window: any



@Component({
    selector: 'create',
    templateUrl: 'Create.ts.html',
    directives: [ROUTER_DIRECTIVES, InputField],
    providers: [Service]
})

export class Create implements OnInit {
    isSubmitting = false;
    success = false;
    fail = false;

    form: ControlGroup
    legalEntity: ControlGroup
    individualEntity: ControlGroup


    constructor(private customerService: Service, private builder: FormBuilder) {
    }


    ngOnInit() {

        this.legalEntity = new ControlGroup({
            'UFE.Customer.FullName': new Control('', Validators.required)
        })

        this.individualEntity = new ControlGroup({
            'UFE.IndividualEntity.PersonalId': new Control('', Validators.required),
            'UFE.IndividualEntity.Name': new Control('', Validators.required),
            'UFE.IndividualEntity.Surname': new Control('', Validators.required),
            'UFE.IndividualEntity.Type': new Control('', Validators.required),
            'UFE.IndividualEntity.DateofIssue': new Control('', Validators.required),
            'UFE.Customer.Phone': new Control('', Validators.compose([Validators.required, Validator.isNumber]))
        })

        this.form = this.builder.group({
            'UFE.Customer.IsIndividual': ['', Validators.required],
            'UFE.Customer.RegistrationLocationResid': ['', Validators.required],
            'UFE.Customer.RegistrationAddressResid': ['', Validators.required],
            'UFE.Customer.ActualLocationResid': ['', Validators.required],
            'UFE.Customer.ActualAddressResid': ['', Validators.required],

            legalEntity: this.legalEntity,
            individualEntity: this.individualEntity
        })


        window.form = this.form

        this.form.exclude('legalEntity')
        this.form.exclude('individualEntity')
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

        this.customerService.put(data, res => {
            this.isSubmitting = false;

            this.success = res.Document != null && res.Document.Data != null;
            this.fail = !this.success;

            console.log(res);
        });

    }

    change($event) {
        this.success = false;
        this.fail = false;

        if ($event.target.value != '') {

            if ($event.target.value == 'True') {
                this.form.exclude('legalEntity')
                this.form.include('individualEntity')
            }
            else if ($event.target.value == 'False') {
                this.form.include('legalEntity')
                this.form.exclude('individualEntity')
            }
        }
    }
}
