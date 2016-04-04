System.register(['angular2/core', 'angular2/router', './Details', './List'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, Details_1, List_1;
    var Route;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Details_1_1) {
                Details_1 = Details_1_1;
            },
            function (List_1_1) {
                List_1 = List_1_1;
            }],
        execute: function() {
            Route = (function () {
                function Route() {
                }
                Route = __decorate([
                    core_1.Component({
                        selector: 'route',
                        template: "<router-outlet></router-outlet>",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'List', component: List_1.List },
                        { path: '/detail/:id', name: 'Details', component: Details_1.Details }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Route);
                return Route;
            })();
            exports_1("Route", Route);
        }
    }
});

//# sourceMappingURL=Root.js.map
