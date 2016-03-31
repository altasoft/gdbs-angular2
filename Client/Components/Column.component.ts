import {Component, OnInit, ElementRef} from 'angular2/core';
import {Location} from 'angular2/router';

@Component({
    providers: [Location]
})

export class ColumnComponent implements OnInit {
    columns = {};
    configure = false;

    constructor(
        private element: ElementRef,
        private _location: Location) {
    }

    ngOnInit() {
        var columns = localStorage.getItem(this._location.path());

        this.columns = columns ? JSON.parse(columns) : {};
    }

    showHideColumns() {
        if (Object.keys(this.columns).length == 0) {
            var columns = {};
            var cells = this.element.nativeElement.getElementsByTagName('table')[0].rows[0].cells;

            for (var i = 0; i < cells.length; i++)
                if (cells[i].getAttribute('column'))
                    columns[cells[i].getAttribute('column')] = true;

            this.columns = columns;
        }

        if (this.configure)
            localStorage.setItem(this._location.path(), JSON.stringify(this.columns));

        this.configure = !this.configure;
    }

    isVisible(name?: string) {
        if (name == undefined)
            return this.configure;

        return Object.keys(this.columns).length == 0 || this.columns[name] || this.configure;
    }
}