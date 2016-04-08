import {SLATypes} from './SLATypes';
import {SLAStates} from './SLAStates';

export class SLA {
    id: number;
    adminNumber: string;
    type: SLATypes;
    totalBalance: number;
    currency: string;
    state: SLAStates;
}