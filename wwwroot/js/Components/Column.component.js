System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var ColumnComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ColumnComponent = (function () {
                function ColumnComponent(element, _location) {
                    this.element = element;
                    this._location = _location;
                    this.columns = {};
                    this.configure = false;
                    this.init = false;
                }
                ColumnComponent.prototype.ngOnInit = function () {
                    var columns = localStorage.getItem(this._location.path());
                    this.columns = columns ? JSON.parse(columns) : {};
                    this.init = Object.keys(this.columns).length == 0;
                };
                ColumnComponent.prototype.showHideColumns = function () {
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
                };
                ColumnComponent.prototype.isVisible = function (name) {
                    return this.columns[name] || this.configure || this.init;
                };
                ColumnComponent = __decorate([
                    core_1.Component({
                        providers: [router_1.Location]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, router_1.Location])
                ], ColumnComponent);
                return ColumnComponent;
            })();
            exports_1("ColumnComponent", ColumnComponent);
        }
    }
});
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
//# sourceMappingURL=Column.component.js.map