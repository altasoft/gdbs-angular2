import {Component, OnInit}  from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router'
import {Details} from './Details'
import {List} from './List'

@Component({
    selector: 'route',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'List', component: List },
    { path: '/detail/:id', name: 'Details', component: Details }
])
export class Route { }

