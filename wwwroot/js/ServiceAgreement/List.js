System.register(['angular2/core', 'angular2/router', '../Services/SLA.service'], function(exports_1, context_1) {
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
    var core_1, router_1, SLA_service_1;
    var List;
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
            List = (function () {
                function List(_SLAService, _router) {
                    this._SLAService = _SLAService;
                    this._router = _router;
                }
                List.prototype.ngOnInit = function () {
                    var _this = this;
                    this._SLAService.getSLAs().then(function (SLAs) { return _this.SLAs = SLAs; });
                };
                List.prototype.gotoDetail = function (id) {
                    this._router.navigate(['SLADetail', { id: id }]);
                };
                List = __decorate([
                    core_1.Component({
                        selector: 'list',
                        templateUrl: '/html/ServiceAgreement/List.html',
                        providers: [SLA_service_1.SLAService]
                    }), 
                    __metadata('design:paramtypes', [SLA_service_1.SLAService, router_1.Router])
                ], List);
                return List;
            }());
            exports_1("List", List);
        }
    }
});
//# sourceMappingURL=List.js.map