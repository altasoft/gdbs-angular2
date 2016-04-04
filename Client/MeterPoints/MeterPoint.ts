import {Component}  from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {List} from './List'

@Component({
    selector: 'route',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', name: 'List', component: List, useAsDefault: true },
    //{ path: '/details:id', name: 'details' }
])

export class Route { }