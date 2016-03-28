import {Component, OnInit}  from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router'
import {UIMain}             from './main'
import {UIPlay}             from './play'
import {ConfigProvider}     from './Providers/ConfigProvider'

@Component({
    selector: 'game',
    template: `
    <a [routerLink]="['Main']" class="btn btn-default">Main Page</a>
    <a [routerLink]="['Play']" class="btn btn-default">Play Page</a>
    <hr/>
    <div class="content" id="MainContent" style="opacity: 1; display: block;">
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'Main', component: UIMain },
    { path: '/play', name: 'Play', component: UIPlay }
])
export class AppComponent {

    constructor() {
    }
}