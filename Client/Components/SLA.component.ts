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
    total: number;
    currentPage: number;

    constructor(
        element: ElementRef,
        location: Location,
        private _SLAService: SLAService) {
        super(element, location, 'SLAs');
    }

    ngOnInit() {
        super.ngOnInit();

        this._SLAService.getSLAs().then(res => {
            this.SLAs = res.SLAs;
            this.total = res.total
        });
    }

    pageChanged(event) {
        this._SLAService.getSLAs((event.page - 1) * event.itemsPerPage, event.itemsPerPage).then(res => {
            this.SLAs = res.SLAs;
            this.total = res.total
        });
    }
}