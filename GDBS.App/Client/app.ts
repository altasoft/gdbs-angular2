import {Component, OnInit}  from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router'

import {MenuComponent} from './Common/Components';

import * as SLA from './Modules/SLA/Config';
import * as ServiceAgreement from './Modules/ServiceAgreement/Config';
import * as MeterPoint from './Modules/MeterPoint/Config';


@Component({
    selector: 'game',
    template: `
    <menu></menu>
    <div class="page-content">
        <div class="content" id="MainContent" style="opacity: 1; display: block;">
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES, MenuComponent]
})
@RouteConfig([
    { path: '/SLA/...', name: 'SLA', component: SLA.Config, useAsDefault: true },
    { path: '/ServiceAgreement/...', name: 'ServiceAgreement', component: ServiceAgreement.Config },
    { path: '/MeterPoint/...', name: 'MeterPoint', component: MeterPoint.Config }
])
export class AppComponent { }
