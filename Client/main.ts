import {Component, ViewEncapsulation, OnInit, Inject} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router'
import {ConfigProvider}                 from './Providers/ConfigProvider'


@Component({
    selector: 'main',
    styleUrls: ['./css/main.ts.css'],
    template: `
    <div class="main">
        Main Page
    </div>
    `
})
export class UIMain {

}

