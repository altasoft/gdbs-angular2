import {Component, OnInit, ElementRef, Input, Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES, Location} from 'angular2/router'
import {Pagination} from './Pagination'


@Component({
    selector: 'list',
    templateUrl: 'List.ts.html',
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

    @Output()
    addItem = new EventEmitter()

    @Input()
    id: string;


    sortKey: string
    sortAsc: boolean

    isFiltersVisible: boolean


    constructor(
        private _element: ElementRef,
        private _location: Location) {
    }


    ngOnInit() {
        var columns = JSON.parse(localStorage.getItem(this.getPathName('columns')));
        this.isFiltersVisible = JSON.parse(localStorage.getItem(this.getPathName('filters')));

        if (columns)
            for (var i = 0; i < this.columns.length; i++)
                this.columns[i].IsVisible = columns[this.columns[i].Key];

        this.configModeChange.emit(this.configMode)
    }


    sortClick(key: string) {

        var column = this.columns.filter(x => x.Key == key)[0]
        if (!column || !column.Sorting) return


        if (this.sortAsc == null || this.sortAsc == undefined)
            this.sortAsc = false
        else if (this.sortAsc === false)
            this.sortAsc = true
        else if (this.sortAsc === true)
            this.sortAsc = null

        this.sortKey = key

        this.refreshDataRequest()
    }

    toggleConfigColumns() {
        if (this.configMode) {
            var columns = {};

            for (var i = 0; i < this.columns.length; i++)
                columns[this.columns[i].Key] = this.columns[i].IsVisible || false;

            localStorage.setItem(this.getPathName('columns'), JSON.stringify(columns));
        }

        this.configMode = !this.configMode;
        this.configModeChange.emit(this.configMode)
    }

    toggleFilters() {
        this.isFiltersVisible = !this.isFiltersVisible

        localStorage.setItem(this.getPathName('filters'), JSON.stringify(this.isFiltersVisible));
    }

    refreshDataRequest() {


        this.refreshData.emit({
            Skip: this.paging.ActivePage * this.paging.ItemsPerPage,
            Take: this.paging.ItemsPerPage,
            SortKey: this.sortKey,
            SortAsc: this.sortAsc
        })
    }

    getPathName(name: string): string {
        return this._location.path() + '#' + this.id + ':' + name
    }

    createNew() {
        this.addItem.emit(null)
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