System.register(['angular2/core', 'angular2/router', './pagination.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, pagination_component_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(_element, _location) {
                    this._element = _element;
                    this._location = _location;
                    this.refreshData = new core_1.EventEmitter();
                    this.configMode = false;
                    this.configModeChange = new core_1.EventEmitter();
                }
                ListComponent.prototype.ngOnInit = function () {
                    var columns = JSON.parse(localStorage.getItem(this.getPathName('columns')));
                    this.isFiltersVisible = JSON.parse(localStorage.getItem(this.getPathName('filters')));
                    if (columns)
                        for (var i = 0; i < this.columns.length; i++)
                            this.columns[i].IsVisible = columns[this.columns[i].Key];
                    this.configModeChange.emit(this.configMode);
                };
                ListComponent.prototype.sortClick = function (key) {
                    if (this.sortKey != key) {
                        this.sortKey = key;
                        return;
                    }
                    if (this.sortAsc == null || this.sortAsc == undefined)
                        this.sortAsc = false;
                    else if (this.sortAsc === false)
                        this.sortAsc = true;
                    else if (this.sortAsc === true)
                        this.sortAsc = null;
                    console.log(key, this.sortAsc);
                    this.pageChanged();
                };
                ListComponent.prototype.toggleConfigColumns = function () {
                    if (this.configMode) {
                        var columns = {};
                        for (var i = 0; i < this.columns.length; i++)
                            columns[this.columns[i].Key] = this.columns[i].IsVisible || false;
                        localStorage.setItem(this.getPathName('columns'), JSON.stringify(columns));
                    }
                    this.configMode = !this.configMode;
                    this.configModeChange.emit(this.configMode);
                };
                ListComponent.prototype.toggleFilters = function () {
                    this.isFiltersVisible = !this.isFiltersVisible;
                    localStorage.setItem(this.getPathName('filters'), JSON.stringify(this.isFiltersVisible));
                };
                ListComponent.prototype.pageChanged = function () {
                    this.refreshData.emit({
                        Skip: this.paging.ActivePage * this.paging.ItemsPerPage,
                        Take: this.paging.ItemsPerPage,
                        SortKey: this.sortKey,
                        SortAsc: this.sortAsc
                    });
                };
                ListComponent.prototype.getPathName = function (name) {
                    return this._location.path() + '#' + this.id + ':' + name;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ListComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ListComponent.prototype, "columns", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ListComponent.prototype, "source", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ListComponent.prototype, "paging", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ListComponent.prototype, "refreshData", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ListComponent.prototype, "configMode", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ListComponent.prototype, "configModeChange", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ListComponent.prototype, "id", void 0);
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'list',
                        templateUrl: '/html/Components/List.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, pagination_component_1.Pagination],
                        providers: [router_1.Location]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, router_1.Location])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=List.component.js.map