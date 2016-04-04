import {Component, OnInit, ElementRef, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router'


@Component({
    selector: 'list',
    templateUrl: '/html/Components/List.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class ListComponent {

    @Input()
    title: string

    @Input()
    columns: ListColumn[]

    @Input()
    source: any[]

    @Input()
    details_route: string[]



    hasLink(item: any, col: ListColumn) {
        return item && col && col.LinkRoute && col.LinkItemKey && item[col.LinkItemKey]
    }
}


export interface ListColumn {
    Key: string
    Name?: string
    Sorting?: boolean
    LinkRoute?: string[]
    LinkItemKey?: string
}