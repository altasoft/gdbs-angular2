import {Component, OnInit, ElementRef} from 'angular2/core';
import {Location} from 'angular2/router';
import {ColumnService} from '../Services/Column.service';

@Component({
    providers: [Location]
})

export class ColumnComponent implements OnInit {
    columns = {};
    configure = false;
    init = false;

    constructor(
        private element: ElementRef,
        private _location: Location) {
    }

    ngOnInit() {
        var columns = localStorage.getItem(this._location.path());
        this.columns = columns ? JSON.parse(columns) : {};
        this.init = Object.keys(this.columns).length == 0;
    }

    showHideColumns() {
        if (this.init) {
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
        this.init = false;
    }

    isVisible(name: string) {
        return this.columns[name] || this.configure || this.init;
    }
}

//import {Component, OnInit, ElementRef} from 'angular2/core';
//import {ColumnService} from '../Services/Column.service';

//export class ColumnComponent implements OnInit {
//    columns = {};
//    configure = false;
//    init = false;

//    constructor(
//        public _ColumnService: ColumnService,
//        public element: ElementRef) {
//    }

//    ngOnInit() {
//        this.columns = this._ColumnService.getColumns();
//        this.init = Object.keys(this.columns).length == 0;
//    }

//    showHideColumns() {
//        if (this.init)
//            this.columns = this._ColumnService.initColumns(this.element);

//        if (this.configure)
//            this._ColumnService.setColumns(this.columns);

//        this.configure = !this.configure;
//        this.init = false;
//    }
//}