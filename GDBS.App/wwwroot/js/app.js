System.register(['angular2/core', 'angular2/router', './Components/SLA.component', './Components/Menu.component', './Components/SLADetail.component', './Components/SLACreate.component', './ServiceAgreement/Route', './MeterPoints/MeterPoint'], function(exports_1, context_1) {
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
    var core_1, router_1, SLA_component_1, Menu_component_1, SLADetail_component_1, SLACreate_component_1, ServiceAgreement, MeterPoint;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (SLA_component_1_1) {
                SLA_component_1 = SLA_component_1_1;
            },
            function (Menu_component_1_1) {
                Menu_component_1 = Menu_component_1_1;
            },
            function (SLADetail_component_1_1) {
                SLADetail_component_1 = SLADetail_component_1_1;
            },
            function (SLACreate_component_1_1) {
                SLACreate_component_1 = SLACreate_component_1_1;
            },
            function (ServiceAgreement_1) {
                ServiceAgreement = ServiceAgreement_1;
            },
            function (MeterPoint_1) {
                MeterPoint = MeterPoint_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'game',
                        template: "\n    <menu></menu>\n    <div class=\"page-content\">\n        <div class=\"content\" id=\"MainContent\" style=\"opacity: 1; display: block;\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, Menu_component_1.MenuComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/SLAs', name: 'SLAs', component: SLA_component_1.SLAComponent, useAsDefault: true },
                        { path: '/detail/:id', name: 'SLADetail', component: SLADetail_component_1.SLADetailComponent },
                        { path: '/SLA/create', name: 'SLACreate', component: SLACreate_component_1.SLACreateComponent },
                        { path: '/ServiceAgreement/...', name: 'ServiceAgreement', component: ServiceAgreement.Route },
                        { path: '/MeterPoint/...', name: 'MeterPoint', component: MeterPoint.Route }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.js.map
