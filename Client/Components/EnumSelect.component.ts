import {Directive, Input, OnInit, ElementRef} from 'angular2/core';

@Directive({
    selector: '[enumType]'
})

export class EnumSelect implements OnInit {
    @Input('enumType')
    enumType: any;

    @Input()
    defaultText: string = '--';

    private _e: HTMLElement;

    constructor(el: ElementRef) { this._e = el.nativeElement; }

    ngOnInit() {
        var option = document.createElement('option');
        option.value = 'undefined';
        option.text = this.defaultText;

        this._e.appendChild(option)

        for (var i = 0; i < Object.keys(this.enumType).length / 2; i++) {
            var key = Object.keys(this.enumType)[i];

            var option = document.createElement('option');
            option.value = key;
            option.text = this.enumType[key];

            this._e.appendChild(option)
        }

        this._e.onchange = function () {  };
    }
}