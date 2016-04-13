import {Component, OnInit, ElementRef} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location} from 'angular2/router';

import {ColumnComponent, Pagination} from '../../Common/Components'
import {SLA} from './Models/SLA';
import {SLAService} from '../../Common/Services';


@Component({
    selector: 'list',
    templateUrl: 'List.ts.html',
    providers: [SLAService],
    directives: [ROUTER_DIRECTIVES, Pagination]
})

export class List extends ColumnComponent implements OnInit {
    SLAs: SLA[];
    total: number;

    constructor(
        element: ElementRef,
        location: Location,
        private _SLAService: SLAService) {
        super(element, location, 'SLA');
    }

    ngOnInit() {
        super.ngOnInit();

        this._SLAService.getSLAs().then(res => {
            this.SLAs = res.SLAs;
            this.total = res.total
        });
    }

    currentPageChange(event) {
        this._SLAService.getSLAs((event.page - 1) * event.itemsPerPage, event.itemsPerPage).then(res => {
            this.SLAs = res.SLAs;
            this.total = res.total
        });
    }
}