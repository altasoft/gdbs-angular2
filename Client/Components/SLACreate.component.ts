import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {SLA} from '../Models/SLA';
import {SLATypes} from '../Models/SLATypes';
import {SLAStates} from '../Models/SLAStates';
import {EnumSelect} from './EnumSelect.component';

@Component({
    selector: 'create',
    templateUrl: '/html/Components/SLACreate.component.html',
    directives: [ROUTER_DIRECTIVES, EnumSelect]
})

export class SLACreateComponent implements OnInit {
    model: SLA = new SLA();
    SLATypes = SLATypes;
    SLAStates = SLAStates;
    active = true;

    ngOnInit() {
        this.model.type = SLATypes.Regular;
        this.model.state = SLAStates.Pending;
    }

    clear() {
        this.active = false;

        setTimeout(() => {
            this.active = true;
            this.model = new SLA();
        }, 0);
    }

    onSubmit() {
        console.log(this.model);

        this.active = false;

        setTimeout(() => {
            this.active = true;
            this.model = new SLA();
        }, 0);
    }
}