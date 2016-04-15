import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import {SLA} from './Models/SLA';
import {SLATypes} from './Models/SLATypes';
import {SLAStates} from './Models/SLAStates';
import {SLAService} from '../../Common/Services';


@Component({
    selector: 'detail',
    templateUrl: 'Details.ts.html',
    providers: [SLAService],
    directives: [ROUTER_DIRECTIVES]
})

export class Details implements OnInit {
    SLA: SLA;
    SLATypes = SLATypes;
    SLAStates = SLAStates;

    constructor(
        private _SLAService: SLAService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        this._SLAService.getSLA(+this._routeParams.get('id')).then(SLA => this.SLA = SLA);
    }
}