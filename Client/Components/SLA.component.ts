import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {SLA} from '../Models/SLA';
import {SLAService} from '../Services/SLA.service';

@Component({
    selector: 'list',
    templateUrl: '/html/Components/SLA.component.html',
    providers: [SLAService]
})

export class SLAComponent implements OnInit {
    SLAs: SLA[];

    constructor(
        private _SLAService: SLAService,
        private _router: Router) {
    }

    ngOnInit() {
        this._SLAService.getSLAs().then(SLAs => this.SLAs = SLAs);
    }

    gotoDetail(id: number) {
        this._router.navigate(['SLADetail', { id: id }]);
    }
}