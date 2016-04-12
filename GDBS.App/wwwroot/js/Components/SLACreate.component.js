System.register(['angular2/core', 'angular2/router', '../Models/SLA', '../Models/SLATypes', '../Models/SLAStates', './EnumSelect.component'], function(exports_1, context_1) {
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
    var core_1, router_1, SLA_1, SLATypes_1, SLAStates_1, EnumSelect_component_1;
    var SLACreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (SLA_1_1) {
                SLA_1 = SLA_1_1;
            },
            function (SLATypes_1_1) {
                SLATypes_1 = SLATypes_1_1;
            },
            function (SLAStates_1_1) {
                SLAStates_1 = SLAStates_1_1;
            },
            function (EnumSelect_component_1_1) {
                EnumSelect_component_1 = EnumSelect_component_1_1;
            }],
        execute: function() {
            SLACreateComponent = (function () {
                function SLACreateComponent() {
                    this.model = new SLA_1.SLA();
                    this.SLATypes = SLATypes_1.SLATypes;
                    this.SLAStates = SLAStates_1.SLAStates;
                    this.active = true;
                }
                SLACreateComponent.prototype.ngOnInit = function () {
                    this.model.type = SLATypes_1.SLATypes.Regular;
                    this.model.state = SLAStates_1.SLAStates.Pending;
                };
                SLACreateComponent.prototype.clear = function () {
                    var _this = this;
                    this.active = false;
                    setTimeout(function () {
                        _this.active = true;
                        _this.model = new SLA_1.SLA();
                    }, 0);
                };
                SLACreateComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log(this.model);
                    this.active = false;
                    setTimeout(function () {
                        _this.active = true;
                        _this.model = new SLA_1.SLA();
                    }, 0);
                };
                SLACreateComponent = __decorate([
                    core_1.Component({
                        selector: 'create',
                        templateUrl: '/html/Components/SLACreate.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, EnumSelect_component_1.EnumSelect]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SLACreateComponent);
                return SLACreateComponent;
            }());
            exports_1("SLACreateComponent", SLACreateComponent);
        }
    }
});
//# sourceMappingURL=SLACreate.component.js.map