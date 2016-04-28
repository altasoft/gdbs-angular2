///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {enableProdMode, provide, PLATFORM_PIPES, ExceptionHandler} from 'angular2/core'
import {Location} from 'angular2/platform/common'
import {bootstrap}  from 'angular2/platform/browser'
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {TRANSLATE_PROVIDERS, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';

import {AppComponent}  from './app'
import {RightsService} from './Common/Services';




class Logger {

    item: string[]

    logGroup(message) {
        this.item = []
        this.logError(message)
    }

    logError(info) {
        //info = JSON.stringify(info, (key, value) => {
        //    if (key == 'parent') { return value.id; }
        //    else { return value; }
        //})

        this.item.push(info)
    }

    logGroupEnd() {
        console.warn(this.item)
    }
}



//enableProdMode();
bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    RightsService,
    Location,
    TRANSLATE_PROVIDERS,
    provide(TranslateLoader, { useFactory: (http: Http) => new TranslateStaticLoader(http, 'lang', '.json'), deps: [Http] }),
    provide(PLATFORM_PIPES, { useValue: [TranslatePipe], multi: true }),
    //provide(Http, { useClass: MyHttp }),
    provide(ExceptionHandler, { useValue: new ExceptionHandler(new Logger(), false) })
]);
