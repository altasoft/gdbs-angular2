import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    selector: 'noname',
    template: '<div>ppp</div>',
    directives: [ROUTER_DIRECTIVES]
})

export class MPListHandler {
    @Input()
    classa: any[];
}