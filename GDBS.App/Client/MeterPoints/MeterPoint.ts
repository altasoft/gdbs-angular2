import {Component}  from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {List} from './List'
import {Test} from './Test'

@Component({
    selector: 'route',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', name: 'List', component: List, useAsDefault: true },
    { path: '/test', name: 'Test', component: Test },
    //{ path: '/details:id', name: 'details' }
])

export class Route { }