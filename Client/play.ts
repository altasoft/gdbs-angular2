import {Component, ViewEncapsulation, OnInit, Inject} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router'
import {ConfigProvider}                 from './Providers/ConfigProvider'


@Component({
    selector: 'play',
    styleUrls: ['./css/play.ts.css'],
    template: `
    <div class="play">
        {{info}}
    </div>
    `
})
export class UIPlay implements OnInit {


    info: string = 'Play Page'


    constructor(private routeParams: RouteParams, private configProvider: ConfigProvider) {
    }


    ngOnInit() {
        this.configProvider.channel = this.routeParams.get('channel') || ''
        this.configProvider.sid = this.routeParams.get('sid') || this.configProvider.sid
    }
}

