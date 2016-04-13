import {Component, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';
import {SLAService} from '../../Common/Services';

@Component({
    selector: 'details',
    templateUrl: 'Details.ts.html',
    providers: [SLAService]
})

export class Details implements OnInit {
    SLA: any;

    constructor(
        private _SLAService: SLAService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        this._SLAService.getSLA(+this._routeParams.get('id')).then(SLA => this.SLA = SLA);
    }

    goBack() {
        window.history.back();
    }
}