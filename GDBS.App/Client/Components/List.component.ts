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
    paging: PagingConfig

    @Output()
    refreshData = new EventEmitter<RefreshInfo>()

    @Input()
    configMode = false;

    @Output()
    configModeChange = new EventEmitter<boolean>()

    sortKey: string
    sortAsc: boolean


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

    @Input()
    id: string;


    constructor(
        private _element: ElementRef,
        private _location: Location) {
    }

    ngOnInit() {
        var columns = JSON.parse(localStorage.getItem(this._location.path() + '#' + this.id));

        if (columns)
            for (var i = 0; i < this.columns.length; i++)
                this.columns[i].IsVisible = columns[this.columns[i].Key];

        this.configModeChange.emit(this.configMode)
    }

    showHideColumns() {
        if (this.configMode) {
            var columns = {};

            for (var i = 0; i < this.columns.length; i++)
                columns[this.columns[i].Key] = this.columns[i].IsVisible || false;

            localStorage.setItem(this._location.path() + '#' + this.id, JSON.stringify(columns));
        }

        this.configMode = !this.configMode;
        this.configModeChange.emit(this.configMode)
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