import {Component, OnInit, ElementRef} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location} from 'angular2/router';
import {Pagination} from './pagination.component'

import {ColumnComponent} from './Column.component'

import {SLA} from '../Models/SLA';
import {SLAService} from '../Services/SLA.service';

@Component({
    selector: 'list',
    templateUrl: '/html/Components/SLA.component.html',
    providers: [SLAService],
    directives: [ROUTER_DIRECTIVES, Pagination]
})

export class SLAComponent extends ColumnComponent implements OnInit {
    SLAs: SLA[];
    get totalSLAs() {
        return this.SLAs ? this.SLAs.length : 0;
    }

    constructor(
        element: ElementRef,
        location: Location,
        private _SLAService: SLAService) {
        super(element, location, 'SLAs');
    }

    ngOnInit() {
        super.ngOnInit();

        this._SLAService.getSLAs().then(SLAs => this.SLAs = SLAs);
    }
}