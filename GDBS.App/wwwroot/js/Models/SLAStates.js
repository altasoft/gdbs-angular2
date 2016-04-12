System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SLAStates;
    return {
        setters:[],
        execute: function() {
            (function (SLAStates) {
                SLAStates[SLAStates["Pending"] = 0] = "Pending";
                SLAStates[SLAStates["Cancelled"] = 1] = "Cancelled";
                SLAStates[SLAStates["Active"] = 2] = "Active";
                SLAStates[SLAStates["Suspended"] = 3] = "Suspended";
            })(SLAStates || (SLAStates = {}));
            exports_1("SLAStates", SLAStates);
        }
    }
});
//# sourceMappingURL=SLAStates.js.map