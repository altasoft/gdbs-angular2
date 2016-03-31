import {Component, Injectable, ElementRef} from 'angular2/core';
import {Location} from 'angular2/router';

@Component({
    providers: [Location]
})

@Injectable()
export class ColumnService {
    constructor(private _location: Location) { }

    initColumns(element: ElementRef) {
        var columns = {};
        var cells = element.nativeElement.getElementsByTagName('table')[0].rows[0].cells;

        for (var i = 0; i < cells.length; i++)
            if (cells[i].getAttribute('column'))
                columns[cells[i].getAttribute('column')] = true;

        return columns;
    }

    getColumns() {
        var columns = localStorage.getItem(this._location.path());

        if (!columns)
            return {};

        return JSON.parse(columns);
    }

    setColumns(columns: {}) {
        localStorage.setItem(this._location.path(), JSON.stringify(columns));
    }
}