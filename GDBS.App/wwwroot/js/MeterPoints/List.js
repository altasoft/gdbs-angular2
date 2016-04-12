System.register(['angular2/core', './MPListHandler'], function(exports_1, context_1) {
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
    var core_1, MPListHandler_1;
    var List;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MPListHandler_1_1) {
                MPListHandler_1 = MPListHandler_1_1;
            }],
        execute: function() {
            List = (function () {
                function List() {
                    // Configuration
                    this.columns = [
                        { Key: 'SLAAdminNumber', Name: 'SLAN', LinkRoute: ['/SLADetail'], LinkItemKey: 'SLAId' },
                        { Key: 'OldCustomerNumber', Name: 'Old Customer Number' },
                        { Key: 'CustomerFullName', Name: 'Customer Full Name' },
                        { Key: 'IdentificationNumber', Name: 'Identification Number' },
                        { Key: 'District' },
                        { Key: 'Address', Sorting: false },
                        { Key: 'ServiceType', Name: 'Service Type' },
                        { Key: 'State' },
                    ];
                    // Mock Data
                    this.items = [
                        {
                            SLAId: 1,
                            SLAAdminNumber: '3100003360',
                            OldCustomerNumber: '',
                            CustomerFullName: 'შპს რას მერჩი',
                            IdentificationNumber: '205205205',
                            District: 'აბაშა',
                            Address: 'ცცცც',
                            ServiceType: 'State Budget',
                            State: 'Active',
                        },
                        {
                            SLAId: 2,
                            SLAAdminNumber: '3100003360',
                            OldCustomerNumber: '123456',
                            CustomerFullName: 'ნინჩო ხელაძე 2+',
                            IdentificationNumber: '	01005007111',
                            District: 'აბაშა',
                            Address: 'ცცცც',
                            ServiceType: 'State Budget',
                            State: 'Active',
                        },
                        {
                            SLAId: 3,
                            SLAAdminNumber: '3100002586',
                            OldCustomerNumber: '123321',
                            CustomerFullName: '	რამანა რამანა',
                            IdentificationNumber: '01005007000',
                            District: 'ქარელი',
                            Address: 'ედიშერ მაღალაშვილის ქუჩა, N8',
                            ServiceType: 'Retail Commercial',
                            State: 'Suspended',
                        }
                    ];
                }
                List = __decorate([
                    core_1.Component({
                        selector: 'list',
                        templateUrl: '/html/MeterPoints/List.html',
                        //directives: [ListComponent]
                        directives: [MPListHandler_1.MPListHandler]
                    }), 
                    __metadata('design:paramtypes', [])
                ], List);
                return List;
            }());
            exports_1("List", List);
        }
    }
});
//# sourceMappingURL=List.js.map