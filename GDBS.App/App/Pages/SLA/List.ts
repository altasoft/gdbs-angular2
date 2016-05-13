import {Component, OnInit, ElementRef} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {ColumnComponent, Pagination, SLAService} from 'AltaSoft/Core'
import {SLA} from './Models/SLA';
import {SLATypes} from './Models/SLATypes';
import {SLAStates} from './Models/SLAStates';


@Component({
    selector: 'list',
    templateUrl: 'List.ts.html',
    providers: [SLAService],
    directives: [ROUTER_DIRECTIVES, Pagination]
})

export class List extends ColumnComponent implements OnInit {
    SLAs: SLA[];
    SLATypes = SLATypes;
    SLAStates = SLAStates;
    total: number;

    constructor(
        element: ElementRef,
        private _SLAService: SLAService) {
        super(element, 'SLA');
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