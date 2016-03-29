System.register(['angular2/core', 'angular2/router', './play', './Components/SLA.component', './Components/SLADetail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, play_1, SLA_component_1, SLADetail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (play_1_1) {
                play_1 = play_1_1;
            },
            function (SLA_component_1_1) {
                SLA_component_1 = SLA_component_1_1;
            },
            function (SLADetail_component_1_1) {
                SLADetail_component_1 = SLADetail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'game',
                        template: "\n    <a [routerLink]=\"['SLAs']\" class=\"btn btn-default\">Main Page</a>\n    <a [routerLink]=\"['Play']\" class=\"btn btn-default\">Play Page</a>\n    <hr/>\n    <div class=\"content\" id=\"MainContent\" style=\"opacity: 1; display: block;\">\n        <router-outlet></router-outlet>\n    </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'SLAs', component: SLA_component_1.SLAComponent },
                        { path: '/detail/:id', name: 'SLADetail', component: SLADetail_component_1.SLADetailComponent },
                        { path: '/play', name: 'Play', component: play_1.UIPlay }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.js.map
