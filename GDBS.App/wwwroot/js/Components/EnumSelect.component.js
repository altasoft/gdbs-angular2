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
    var EnumSelect;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EnumSelect = (function () {
                function EnumSelect(el) {
                    this.defaultText = '--';
                    this._e = el.nativeElement;
                }
                EnumSelect.prototype.ngOnInit = function () {
                    var option = document.createElement('option');
                    option.value = 'undefined';
                    option.text = this.defaultText;
                    this._e.appendChild(option);
                    for (var i = 0; i < Object.keys(this.enumType).length / 2; i++) {
                        var key = Object.keys(this.enumType)[i];
                        var option = document.createElement('option');
                        option.value = key;
                        option.text = this.enumType[key];
                        this._e.appendChild(option);
                    }
                    this._e.onchange = function () { };
                };
                __decorate([
                    core_1.Input('enumType'), 
                    __metadata('design:type', Object)
                ], EnumSelect.prototype, "enumType", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], EnumSelect.prototype, "defaultText", void 0);
                EnumSelect = __decorate([
                    core_1.Directive({
                        selector: '[enumType]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], EnumSelect);
                return EnumSelect;
            }());
            exports_1("EnumSelect", EnumSelect);
        }
    }
});
//# sourceMappingURL=EnumSelect.component.js.map