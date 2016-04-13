System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var ENUM_SELECT_CONTROL_VALUE_ACCESSOR, EnumSelect;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ENUM_SELECT_CONTROL_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, {
                useExisting: core_1.forwardRef(function () { return EnumSelect; }),
                multi: true
            });
            EnumSelect = (function () {
                function EnumSelect() {
                    this.defaultText = '--';
                    this.disabled = null;
                    this.options = [];
                    this._onChangeCallback = function () { };
                    this._onTouchedCallback = function () { };
                }
                EnumSelect.prototype.ngOnInit = function () {
                    this.options.length = 0;
                    this.options.push({ value: '', text: this.defaultText });
                    for (var i = 0; i < Object.keys(this.enumType).length / 2; i++) {
                        var key = Object.keys(this.enumType)[i];
                        this.options.push({ value: key, text: this.enumType[key] });
                    }
                };
                Object.defineProperty(EnumSelect.prototype, "value", {
                    get: function () { return this._value; },
                    set: function (v) {
                        if (v !== this._value) {
                            this._value = v;
                            this._onChangeCallback(v);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                EnumSelect.prototype.writeValue = function (value) {
                    this._value = value;
                };
                EnumSelect.prototype.onTouched = function () {
                    this._onTouchedCallback(null);
                };
                EnumSelect.prototype.registerOnChange = function (fn) {
                    this._onChangeCallback = fn;
                };
                EnumSelect.prototype.registerOnTouched = function (fn) {
                    this._onTouchedCallback = fn;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], EnumSelect.prototype, "enumType", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], EnumSelect.prototype, "defaultText", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], EnumSelect.prototype, "disabled", void 0);
                EnumSelect = __decorate([
                    core_1.Component({
                        selector: 'enumselect',
                        templateUrl: '/html/Components/EnumSelect.component.html',
                        directives: [common_1.CORE_DIRECTIVES],
                        providers: [ENUM_SELECT_CONTROL_VALUE_ACCESSOR]
                    }), 
                    __metadata('design:paramtypes', [])
                ], EnumSelect);
                return EnumSelect;
            }());
            exports_1("EnumSelect", EnumSelect);
        }
    }
});

//# sourceMappingURL=EnumSelect.component.js.map
