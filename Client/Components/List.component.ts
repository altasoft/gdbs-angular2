import {Component, OnInit, ElementRef, Input, Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES, Location} from 'angular2/router'
import {Pagination} from './pagination.component'

@Component({
    selector: 'list',
    templateUrl: '/html/Components/List.component.html',
    directives: [ROUTER_DIRECTIVES, Pagination],
    providers: [Location]
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

    @Input()
    paging: PagingConfig

    @Output()
    refreshData = new EventEmitter<RefreshInfo>()


    sortKey: string
    sortAsc: boolean


    hasLink(item: any, col: ListColumn) {
        return item && col && col.LinkRoute && col.LinkItemKey && item[col.LinkItemKey]
    }

    sortClick(key: string) {

        if (this.sortKey != key) {
            this.sortKey = key
            return
        }

        if (this.sortAsc == null || this.sortAsc == undefined)
            this.sortAsc = false
        else if (this.sortAsc === false)
            this.sortAsc = true
        else if (this.sortAsc === true)
            this.sortAsc = null


        console.log(key, this.sortAsc)

        this.pageChanged()
    }

    pageChanged() {
        this.refreshData.emit({
            Skip: this.paging.ActivePage * this.paging.ItemsPerPage,
            Take: this.paging.ItemsPerPage,
            SortKey: this.sortKey,
            SortAsc: this.sortAsc
        })
    }




    configMode = true;
    _id = ''

    constructor(
        private _element: ElementRef,
        private _location: Location
        ) {
    }

    ngOnInit() {
        var columns = localStorage.getItem(this._location.path() + '#' + this._id);
    }

    showHideColumns() {

        if (this.configMode)
            localStorage.setItem(this._location.path() + '#' + this._id, JSON.stringify(this.columns));

        this.configMode = !this.configMode;
    }

    isVisible(col: ListColumn) {
        if (col == undefined)
            return this.configMode;

        return col.IsVisible || this.configMode;
    }
}

export interface PagingConfig {
    ItemsPerPage: number
    ActivePage: number
    TotalItemsCount: number
}

export interface RefreshInfo {
    Skip: number
    Take: number
    SortKey?: string
    SortAsc?: boolean
}


export interface ListColumn {
    Key: string
    Name?: string
    Sorting?: boolean
    LinkRoute?: string[]
    LinkItemKey?: string
    IsVisible?: boolean
}

export interface ListColumnVisibility {
    Key: string
    IsVisible: boolean
}