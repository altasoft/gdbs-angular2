import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';

import {SLA} from '../Models/SLA';
import {SLATypes} from '../Models/SLATypes';
import {SLAStates} from '../Models/SLAStates';
import {EnumSelect} from './EnumSelect.component';
import {Validator} from './Validator';

@Component({
    selector: 'create',
    templateUrl: '/html/Components/SLACreate.component.html',
    directives: [ROUTER_DIRECTIVES, EnumSelect]
})

export class SLACreateComponent {
    SLATypes = SLATypes;
    SLAStates = SLAStates;
    active = true;

    form: ControlGroup;
    type: Control;
    totalBalance: Control;
    state: Control;

    constructor(private builder: FormBuilder) {
        this.type = new Control('', Validators.required);
        this.totalBalance = new Control('', Validators.compose([Validators.required, Validator.isNumber]));
        this.state = new Control('0', Validators.required);

        this.form = builder.group({
            type: this.type,
            totalBalance: this.totalBalance,
            currency: new Control(''),
            state: this.state
        });
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