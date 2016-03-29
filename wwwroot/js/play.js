System.register(['angular2/core', 'angular2/router', './Services/ConfigProvider'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, ConfigProvider_1;
    var UIPlay;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ConfigProvider_1_1) {
                ConfigProvider_1 = ConfigProvider_1_1;
            }],
        execute: function() {
            UIPlay = (function () {
                function UIPlay(routeParams, configProvider) {
                    this.routeParams = routeParams;
                    this.configProvider = configProvider;
                    this.info = 'Play Page';
                }
                UIPlay.prototype.ngOnInit = function () {
                    this.configProvider.channel = this.routeParams.get('channel') || '';
                    this.configProvider.sid = this.routeParams.get('sid') || this.configProvider.sid;
                };
                UIPlay = __decorate([
                    core_1.Component({
                        selector: 'play',
                        styleUrls: ['./css/play.ts.css'],
                        templateUrl: './html/play.ts.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, ConfigProvider_1.ConfigProvider])
                ], UIPlay);
                return UIPlay;
            })();
            exports_1("UIPlay", UIPlay);
        }
    }
});

//# sourceMappingURL=play.js.map
