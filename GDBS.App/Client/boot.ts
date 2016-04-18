///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {enableProdMode, provide, PLATFORM_PIPES} from 'angular2/core'
import {bootstrap}  from 'angular2/platform/browser'
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {TRANSLATE_PROVIDERS, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';

import {AppComponent}  from './app'
import {RightsService, RightsService2} from './Common/Services';


//enableProdMode();
bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(RightsService, { useClass: RightsService2 }),
    TRANSLATE_PROVIDERS,
    provide(TranslateLoader, { useFactory: (http: Http) => new TranslateStaticLoader(http, 'lang', '.json'), deps: [Http] }),
    provide(PLATFORM_PIPES, { useValue: [TranslatePipe], multi: true }),
    //provide(Http, { useClass: MyHttp })
]);
