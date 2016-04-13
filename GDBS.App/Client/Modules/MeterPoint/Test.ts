import {Component} from 'angular2/core';
import {Pagination} from '../../Common/Components'
import {ROUTER_DIRECTIVES} from 'angular2/router'


@Component({
    selector: 'list',
    templateUrl: 'Test.ts.html',
    directives: [Pagination, ROUTER_DIRECTIVES]
})

export class Test {

    paging: PagingConfig = {
        ActivePage: 1,
        ItemsPerPage: 10,
        TotalItemsCount: 70
    };

    onClick() {
        this.paging.TotalItemsCount = 2000;
    }

    pageChanged() {
    }
}

export interface PagingConfig {
    ItemsPerPage: number
    ActivePage: number
    TotalItemsCount: number
}