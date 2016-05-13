import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router'
import {Customers} from './Components/Customers'


@Component({
    selector: 'list',
    templateUrl: 'List.ts.html',
    directives: [ROUTER_DIRECTIVES, Customers]
})

export class List {
}
