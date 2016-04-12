System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var SLAs, ServiceAgreementService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SLAs = [
                { "id": 1, "adminNumber": "01020304050", "type": 0, "totalBalance": 13.13, "currency": "GEL", "state": 0 },
                //{ "id": 2, "adminNumber": "05040302010", "type": 1, "currency": "GEL", "state": 2 },
                { "id": 3, "adminNumber": "01020304050", "type": 0, "totalBalance": 13.13, "currency": "GEL", "state": 0 },
                //{ "id": 4, "adminNumber": "05040302010", "type": 1, "currency": "GEL", "state": 2 },
                { "id": 5, "adminNumber": "01020304050", "type": 0, "totalBalance": 13.13, "currency": "GEL", "state": 0 },
                //{ "id": 6, "adminNumber": "05040302010", "type": 1, "currency": "GEL", "state": 2 },
                { "id": 7, "adminNumber": "01020304050", "type": 0, "totalBalance": 13.13, "currency": "GEL", "state": 0 },
                //{ "id": 8, "adminNumber": "05040302010", "type": 1, "currency": "GEL", "state": 2 },
                { "id": 9, "adminNumber": "01020304050", "type": 0, "totalBalance": 13.13, "currency": "GEL", "state": 0 },
                //{ "id": 10, "adminNumber": "05040302010", "type": 1, "currency": "GEL", "state": 2 },
                { "id": 11, "adminNumber": "01020304050", "type": 0, "totalBalance": 13.13, "currency": "GEL", "state": 0 },
            ];
            ServiceAgreementService = (function () {
                function ServiceAgreementService() {
                }
                ServiceAgreementService.prototype.getItems = function () {
                    return Promise.resolve(SLAs);
                };
                ServiceAgreementService.prototype.getItem = function (id) {
                    return Promise.resolve(SLAs).then(function (SLAs) { return SLAs.filter(function (SLA) { return SLA.id === id; })[0]; });
                };
                ServiceAgreementService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ServiceAgreementService);
                return ServiceAgreementService;
            }());
            exports_1("ServiceAgreementService", ServiceAgreementService);
        }
    }
});
//# sourceMappingURL=ServiceAgreement.service.js.map