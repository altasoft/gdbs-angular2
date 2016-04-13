///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {enableProdMode, provide, PLATFORM_PIPES} from 'angular2/core'
import {bootstrap}  from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent}  from './app'
import {RightsService} from './Common/Services';


//enableProdMode();
bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    RightsService,
    //provide(PLATFORM_PIPES, { useValue: [TranslatePipe], multi: true })
]);
