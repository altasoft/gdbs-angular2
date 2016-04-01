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
                    this.configMode = false;
                }
                ColumnComponent.prototype.ngOnInit = function () {
                    var columns = localStorage.getItem(this._location.path());
                    this.columns = columns ? JSON.parse(columns) : {};
                };
                ColumnComponent.prototype.showHideColumns = function (id) {
                    if (Object.keys(this.columns).length == 0) {
                        var columns = {};
                        var cells = this.element.nativeElement.querySelectorAll('#' + id + ' td[column]');
                        for (var i = 0; i < cells.length; i++)
                            columns[cells[i].getAttribute('column')] = true;
                        this.columns = columns;
                    }
                    if (this.configMode)
                        localStorage.setItem(this._location.path(), JSON.stringify(this.columns));
                    this.configMode = !this.configMode;
                };
                ColumnComponent.prototype.isVisible = function (name) {
                    if (name == undefined)
                        return this.configMode;
                    return Object.keys(this.columns).length == 0 || this.columns[name] || this.configMode;
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

//# sourceMappingURL=Column.component.js.map
