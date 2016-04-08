import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    selector: '.ppp',
    template: '<div *ngFor="#c of ppp">{{c.Name|| "ppp"}}</div> <input [(ngModel)]="pppName" (ngModelChange)="onChange()" /> <span style="color:blue;">{{pppName}}</span>',
    directives: [ROUTER_DIRECTIVES]
})

export class MPListHandler {
    @Input()
    ppp: any[];

    @Input()
    pppName: string

    @Output()
    pppNameChange = new EventEmitter<string>()


    onChange() {
        this.pppNameChange.emit(this.pppName)
    }
}