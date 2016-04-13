///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {enableProdMode, provide} from 'angular2/core'
import {bootstrap}  from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent}  from './app'
import {ConfigProvider} from './Services/ConfigProvider';
import {RightsService} from './Services/Rights.service';
import {ROUTER_PROVIDERS} from 'angular2/router';


//enableProdMode();
bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    ConfigProvider,
    RightsService
]);