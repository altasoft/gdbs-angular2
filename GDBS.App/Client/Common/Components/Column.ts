import {Component, OnInit, ElementRef, ReflectiveInjector} from 'angular2/core';

@Component({
})
export class ColumnComponent implements OnInit {
    columnsVisibility = {};
    configMode = false;

    constructor(
        private _element: ElementRef,
        private _id: string) {
    }

    ngOnInit() {
        var columns = localStorage.getItem(document.location.pathname + '#' + this._id);

        this.columnsVisibility = columns ? JSON.parse(columns) : {};
    }

    showHideColumns() {
        if (Object.keys(this.columnsVisibility).length == 0) {
            var columns = {};
            var cells = this._element.nativeElement.querySelectorAll('#' + this._id + ' td[column]')

            for (var i = 0; i < cells.length; i++)
                columns[cells[i].getAttribute('column')] = true;

            this.columnsVisibility = columns;
        }

        if (this.configMode)
            localStorage.setItem(document.location.pathname + '#' + this._id, JSON.stringify(this.columnsVisibility));

        this.configMode = !this.configMode;
    }

    isVisible(name?: string) {
        if (name == undefined)
            return this.configMode;

        return Object.keys(this.columnsVisibility).length == 0 || this.columnsVisibility[name] || this.configMode;
    }
}