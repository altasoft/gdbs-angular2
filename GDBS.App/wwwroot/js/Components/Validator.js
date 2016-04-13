System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Validator;
    return {
        setters:[],
        execute: function() {
            Validator = (function () {
                function Validator() {
                }
                Validator.isNumber = function (control) {
                    if (control.value != '' && isNaN(Number(control.value)))
                        return { 'isNumber': false };
                    return null;
                };
                return Validator;
            }());
            exports_1("Validator", Validator);
        }
    }
});
//# sourceMappingURL=Validator.js.map