System.register(['angular2/core', 'angular2/router', 'angular2/common', '../Models/SLATypes', '../Models/SLAStates', './EnumSelect.component', './Validator'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, SLATypes_1, SLAStates_1, EnumSelect_component_1, Validator_1;
    var SLACreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (SLATypes_1_1) {
                SLATypes_1 = SLATypes_1_1;
            },
            function (SLAStates_1_1) {
                SLAStates_1 = SLAStates_1_1;
            },
            function (EnumSelect_component_1_1) {
                EnumSelect_component_1 = EnumSelect_component_1_1;
            },
            function (Validator_1_1) {
                Validator_1 = Validator_1_1;
            }],
        execute: function() {
            SLACreateComponent = (function () {
                function SLACreateComponent(builder) {
                    this.builder = builder;
                    this.SLATypes = SLATypes_1.SLATypes;
                    this.SLAStates = SLAStates_1.SLAStates;
                    this.active = true;
                    this.type = new common_1.Control('', common_1.Validators.required);
                    this.totalBalance = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, Validator_1.Validator.isNumber]));
                    this.state = new common_1.Control('0', common_1.Validators.required);
                    this.form = builder.group({
                        type: this.type,
                        totalBalance: this.totalBalance,
                        currency: new common_1.Control(''),
                        state: this.state
                    });
                }
                SLACreateComponent.prototype.clear = function () {
                    var _this = this;
                    this.active = false;
                    setTimeout(function () {
                        _this.active = true;
                    }, 0);
                };
                SLACreateComponent.prototype.submit = function () {
                    var _this = this;
                    console.log(JSON.stringify(this.form.value));
                    this.active = false;
                    setTimeout(function () {
                        _this.active = true;
                    }, 0);
                };
                SLACreateComponent = __decorate([
                    core_1.Component({
                        selector: 'create',
                        templateUrl: '/html/Components/SLACreate.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, EnumSelect_component_1.EnumSelect]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], SLACreateComponent);
                return SLACreateComponent;
            }());
            exports_1("SLACreateComponent", SLACreateComponent);
        }
    }
});

//# sourceMappingURL=SLACreate.component.js.map
