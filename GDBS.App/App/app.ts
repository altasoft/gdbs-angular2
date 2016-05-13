import {Component, OnInit}  from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router'

import {MenuComponent} from 'AltaSoft/Core';
import {TranslateService}   from 'ng2-translate'

import * as SLA from './Pages/SLA/Config';
import * as ServiceAgreement from './Pages/ServiceAgreement/Config';
import * as MeterPoint from './Pages/MeterPoint/Config';
import * as Customer from './Pages/Customer/Config';


@Component({
    selector: 'app',
    templateUrl: 'app.ts.html',
    directives: [ROUTER_DIRECTIVES, MenuComponent]
})
@RouteConfig([
    { path: '/SLA/...', name: 'SLA', component: SLA.Config, useAsDefault: true },
    { path: '/ServiceAgreement/...', name: 'ServiceAgreement', component: ServiceAgreement.Config },
    { path: '/MeterPoint/...', name: 'MeterPoint', component: MeterPoint.Config },
    { path: '/Customer/...', name: 'Customer', component: Customer.Config }
])
export class AppComponent implements OnInit {

    defaultLang = 'en'


    constructor(private translate: TranslateService) {
    }


    ngOnInit() {
        var userLang = navigator.language.split('-')[0] || document.documentElement.lang // use navigator lang if available
        userLang = /(ka|en|ru)/gi.test(userLang) ? userLang : this.defaultLang

        userLang = this.defaultLang

        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang(this.defaultLang)

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use(userLang)
    }


    selectLang(lang: string) {
        this.translate.use(lang)
    }
}
