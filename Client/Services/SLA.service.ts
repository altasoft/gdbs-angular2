import {Injectable} from 'angular2/core';

import {SLA} from '../Models/SLA';

var SLAs: SLA[] = [
    { "id": 1, "adminNumber": "01020304050", "type": 0, "totalBalance": 13.13, "currency": "GEL", "state": 0 },
    { "id": 2, "adminNumber": "05040302010", "type": 1, "currency": "GEL", "state": 2 },
];

@Injectable()
export class SLAService {
    getSLAs() {
        return Promise.resolve(SLAs);
    }

    getSLA(id: number) {
        return Promise.resolve(SLAs).then(
            SLAs => SLAs.filter(SLA => SLA.id === id)[0]
        );
    }
}