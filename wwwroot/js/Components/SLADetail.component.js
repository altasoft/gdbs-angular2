System.register(['angular2/core', 'angular2/router', '../Services/SLA.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, SLA_service_1;
    var SLADetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (SLA_service_1_1) {
                SLA_service_1 = SLA_service_1_1;
            }],
        execute: function() {
            SLADetailComponent = (function () {
                function SLADetailComponent(_SLAService, _routeParams) {
                    this._SLAService = _SLAService;
                    this._routeParams = _routeParams;
                }
                SLADetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._SLAService.getSLA(+this._routeParams.get('id')).then(function (SLA) { return _this.SLA = SLA; });
                };
                SLADetailComponent = __decorate([
                    core_1.Component({
                        selector: 'detail',
                        templateUrl: '/html/Components/SLADetail.component.html',
                        providers: [SLA_service_1.SLAService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [SLA_service_1.SLAService, router_1.RouteParams])
                ], SLADetailComponent);
                return SLADetailComponent;
            })();
            exports_1("SLADetailComponent", SLADetailComponent);
        }
    }
});
//# sourceMappingURL=SLADetail.component.js.map