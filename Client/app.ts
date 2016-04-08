﻿import {Component, OnInit}  from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router'
import {UIPlay}             from './play'
import {SLAComponent} from './Components/SLA.component';
import {MenuComponent} from './Components/Menu.component';
import {SLADetailComponent} from './Components/SLADetail.component';
import {SLACreateComponent} from './Components/SLACreate.component';
import * as ServiceAgreement from './ServiceAgreement/Route';
import * as MeterPoint from './MeterPoints/MeterPoint';

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
    { path: '/SLAs', name: 'SLAs', component: SLAComponent, useAsDefault: true },
    { path: '/detail/:id', name: 'SLADetail', component: SLADetailComponent },
    { path: '/SLA/create', name: 'SLACreate', component: SLACreateComponent },
    { path: '/ServiceAgreement/...', name: 'ServiceAgreement', component: ServiceAgreement.Route },
    { path: '/MeterPoint/...', name: 'MeterPoint', component: MeterPoint.Route }
])
export class AppComponent { }
