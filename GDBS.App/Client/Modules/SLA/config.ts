import {Component, OnInit}  from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router'
import {Create} from './Create'
import {Details} from './Details'
import {List} from './List'

@Component({
    selector: 'route',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'List', component: List, useAsDefault: true },
    { path: '/create', name: 'Create', component: Create },
    { path: '/detail/:id', name: 'Details', component: Details }
])
export class Config { }