System.register(['angular2/core', 'angular2/router', './pagination.component', './Column.component', '../Services/SLA.service'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, pagination_component_1, Column_component_1, SLA_service_1;
    var SLAComponent;
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
            },
            function (Column_component_1_1) {
                Column_component_1 = Column_component_1_1;
            },
            function (SLA_service_1_1) {
                SLA_service_1 = SLA_service_1_1;
            }],
        execute: function() {
            SLAComponent = (function (_super) {
                __extends(SLAComponent, _super);
                function SLAComponent(element, location, _SLAService) {
                    _super.call(this, element, location, 'SLAs');
                    this._SLAService = _SLAService;
                }
                Object.defineProperty(SLAComponent.prototype, "totalSLAs", {
                    get: function () {
                        return this.SLAs ? this.SLAs.length : 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                SLAComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    _super.prototype.ngOnInit.call(this);
                    this._SLAService.getSLAs().then(function (SLAs) { return _this.SLAs = SLAs; });
                };
                SLAComponent = __decorate([
                    core_1.Component({
                        selector: 'list',
                        templateUrl: '/html/Components/SLA.component.html',
                        providers: [SLA_service_1.SLAService],
                        directives: [router_1.ROUTER_DIRECTIVES, pagination_component_1.Pagination]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, router_1.Location, SLA_service_1.SLAService])
                ], SLAComponent);
                return SLAComponent;
            })(Column_component_1.ColumnComponent);
            exports_1("SLAComponent", SLAComponent);
        }
    }
});
//# sourceMappingURL=SLA.component.js.map