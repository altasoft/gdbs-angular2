﻿import {Injectable} from 'angular2/core';

import {SLA} from '../Models/SLA';

var SLAs: SLA[] = [
    { "id": 1, "adminNumber": "01020304050", "type": 0, "totalBalance": 13.13, "currency": "GEL", "state": 0 },
    //{ "id": 2, "adminNumber": "05040302010", "type": 1, "currency": "GEL", "state": 2 },
    { "id": 3, "adminNumber": "01020304050", "type": 0, "totalBalance": 13.13, "currency": "GEL", "state": 0 },
    //{ "id": 4, "adminNumber": "05040302010", "type": 1, "currency": "GEL", "state": 2 },
    { "id": 5, "adminNumber": "01020304050", "type": 0, "totalBalance": 13.13, "currency": "GEL", "state": 0 },
    //{ "id": 6, "adminNumber": "05040302010", "type": 1, "currency": "GEL", "state": 2 },
    { "id": 7, "adminNumber": "01020304050", "type": 0, "totalBalance": 13.13, "currency": "GEL", "state": 0 },
    //{ "id": 8, "adminNumber": "05040302010", "type": 1, "currency": "GEL", "state": 2 },
    { "id": 9, "adminNumber": "01020304050", "type": 0, "totalBalance": 13.13, "currency": "GEL", "state": 0 },
    //{ "id": 10, "adminNumber": "05040302010", "type": 1, "currency": "GEL", "state": 2 },
    { "id": 11, "adminNumber": "01020304050", "type": 0, "totalBalance": 13.13, "currency": "GEL", "state": 0 },
    //{ "id": 12, "adminNumber": "05040302010", "type": 1, "currency": "GEL", "state": 2 },
];


@Injectable()
export class ServiceAgreementService {

    getItems() {
        return Promise.resolve(SLAs);
    }

    getItem(id: number) {
        return Promise.resolve(SLAs).then(
            SLAs => SLAs.filter(SLA => SLA.id === id)[0]
        );
    }
}