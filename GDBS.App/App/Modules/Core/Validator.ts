import {Control} from 'angular2/common';

export class Validator {
    static isNumber(control: Control) {
        if (control.value != '' && isNaN(Number(control.value)))
            return { isNumber: false };

        return null;
    }
}