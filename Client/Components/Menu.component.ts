﻿import {Component, OnInit, ElementRef} from 'angular2/core';
import {Location, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'menu',
    templateUrl: '/html/Components/Menu.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class MenuComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}