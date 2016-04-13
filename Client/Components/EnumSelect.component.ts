import {Component, Input} from 'angular2/core';
import {SLATypes} from '../Models/SLATypes';

@Component({
    selector: '[enum]',
    template: `
      <select>
         <option *ngFor="#v of values" [value]="v" [label]="values[v]"></option>
      </select>
    `
})

export class EnumSelect {
    @Input()
    enumType: string = "SLATypes";

    enum: any = Object.create(window[this.enumType]);
    values: any;

    constructor() {
        this.values = Object.keys(this.enum).map(function (i) { return parseInt(i); })
    }
}