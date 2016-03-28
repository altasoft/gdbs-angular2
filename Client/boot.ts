///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {enableProdMode} from 'angular2/core'
import {bootstrap}  from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent}  from './app'
import {ConfigProvider} from './Providers/ConfigProvider';
import {ROUTER_PROVIDERS} from 'angular2/router';


//enableProdMode();
bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, ConfigProvider]);