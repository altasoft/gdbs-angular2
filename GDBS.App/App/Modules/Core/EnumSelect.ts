import {Component, Provider, forwardRef, Input, OnInit} from 'angular2/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, CORE_DIRECTIVES} from 'angular2/common';

const ENUM_SELECT_CONTROL_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {
        useExisting: forwardRef(() => EnumSelect),
        multi: true
    });

@Component({
    selector: 'enumselect',
    templateUrl: 'EnumSelect.ts.html',
    directives: [CORE_DIRECTIVES],
    providers: [ENUM_SELECT_CONTROL_VALUE_ACCESSOR]
})
export class EnumSelect implements ControlValueAccessor, OnInit {
    @Input()
    enumType: any;

    @Input()
    defaultText: string = '--';

    @Input()
    disabled: boolean = null;

    private options: any[] = [];

    ngOnInit() {
        this.options.length = 0;
        this.options.push({ value: '', text: this.defaultText });

        for (var i = 0; i < Object.keys(this.enumType).length / 2; i++) {
            var key = Object.keys(this.enumType)[i];

            this.options.push({ value: key, text: this.enumType[key] });
        }
    }

    private _value: any;

    get value(): any { return this._value; };

    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this._onChangeCallback(v);
        }
    }

    writeValue(value: any) {
        this._value = value;
    }

    onTouched() {
        this._onTouchedCallback(null);
    }

    registerOnChange(fn: any) {
        this._onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this._onTouchedCallback = fn;
    }

    private _onChangeCallback: (_: any) => void = () => { };
    private _onTouchedCallback: (_: any) => void = () => { };
}