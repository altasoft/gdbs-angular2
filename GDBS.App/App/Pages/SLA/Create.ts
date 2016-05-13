import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';
import {EnumSelect, Validator} from 'AltaSoft/Core';
import {SLA} from './Models/SLA';
import {SLATypes} from './Models/SLATypes';
import {SLAStates} from './Models/SLAStates';


@Component({
    selector: 'create',
    templateUrl: 'Create.ts.html',
    directives: [ROUTER_DIRECTIVES, EnumSelect]
})

export class Create {
    SLATypes = SLATypes;
    SLAStates = SLAStates;
    active = true;

    form: ControlGroup;
    type: Control;
    totalBalance: Control;
    currency: Control;
    state: Control;

    constructor(private builder: FormBuilder) {
        this.type = new Control('', Validators.required);
        this.totalBalance = new Control('', Validators.compose([Validators.required, Validator.isNumber]));
        this.currency = new Control('');
        this.state = new Control('0', Validators.required);

        this.form = builder.group({
            type: this.type,
            totalBalance: this.totalBalance,
            currency: this.currency,
            state: this.state,
        }, { validator: this.isRegularAndUSD });
    }

    isRegularAndUSD(group: ControlGroup) {
        if (group.controls['type'].value == SLATypes.Regular && group.controls['currency'].value == 'USD')
            return { isRegularAndUSD: true };
    }

    clear() {
        this.active = false;

        setTimeout(() => {
            this.active = true;
        }, 0);
    }

    submit() {
        console.log(JSON.stringify(this.form.value));

        this.active = false;

        setTimeout(() => {
            this.active = true;
        }, 0);
    }
}