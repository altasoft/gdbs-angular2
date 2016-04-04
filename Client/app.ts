import {Component, OnInit}  from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router'
import {UIMain}             from './main'
import {UIPlay}             from './play'
import {ConfigProvider}     from './Services/ConfigProvider'
import {SLAComponent} from './Components/SLA.component';
import {SLADetailComponent} from './Components/SLADetail.component';
import * as ServiceAgreement from './ServiceAgreement/Route'

@Component({
    selector: 'game',
    template: `
    <a [routerLink]="['SLAs']" class="btn btn-default">Main Page</a>
    <a [routerLink]="['ServiceAgreement']" class="btn btn-default">Service Agreement</a>
    <hr/>
    <div class="content" id="MainContent" style="opacity: 1; display: block;">
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/SLAs', name: 'SLAs', component: SLAComponent, useAsDefault: true },
    { path: '/detail/:id', name: 'SLADetail', component: SLADetailComponent },
    { path: '/ServiceAgreement/...', name: 'ServiceAgreement', component: ServiceAgreement.Route }
])
export class AppComponent { }
