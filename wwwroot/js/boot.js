///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
System.register(['angular2/platform/browser', 'angular2/http', './app', './Services/ConfigProvider', 'angular2/router'], function(exports_1) {
    var browser_1, http_1, app_1, ConfigProvider_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (ConfigProvider_1_1) {
                ConfigProvider_1 = ConfigProvider_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            //enableProdMode();
            browser_1.bootstrap(app_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, ConfigProvider_1.ConfigProvider]);
        }
    }
});
//# sourceMappingURL=boot.js.map