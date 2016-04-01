import {Component, OnInit, ElementRef} from 'angular2/core';
import {Location} from 'angular2/router';

@Component({
    providers: [Location]
})

export class ColumnComponent implements OnInit {
    columns = {};
    configMode = false;

    constructor(
        private _element: ElementRef,
        private _location: Location,
        private _id: string) {
    }

    ngOnInit() {
        var columns = localStorage.getItem(this._location.path() + '#' + this._id);

        this.columns = columns ? JSON.parse(columns) : {};
    }

    showHideColumns() {
        if (Object.keys(this.columns).length == 0) {
            var columns = {};
            var cells = this._element.nativeElement.querySelectorAll('#' + this._id + ' td[column]')

            for (var i = 0; i < cells.length; i++)
                columns[cells[i].getAttribute('column')] = true;

            this.columns = columns;
        }

        if (this.configMode)
            localStorage.setItem(this._location.path() + '#' + this._id, JSON.stringify(this.columns));

        this.configMode = !this.configMode;
    }

    isVisible(name?: string) {
        if (name == undefined)
            return this.configMode;

        return Object.keys(this.columns).length == 0 || this.columns[name] || this.configMode;
    }
}