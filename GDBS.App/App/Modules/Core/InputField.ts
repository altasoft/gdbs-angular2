import {Component, OnInit, ElementRef, Input, Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {Pagination} from './Pagination'
import {Location} from 'angular2/platform/common'

@Component({
    selector: 'field',
    templateUrl: 'InputField.ts.html',
    directives: [ROUTER_DIRECTIVES, Pagination]
})
export class InputField {

    @Input()
    title: string

    @Input()
    errors: any

    getErrors():any[] {
        var result = []

        for (var key in this.errors) {
            result.push(key)
        }

        return result
    }
}

