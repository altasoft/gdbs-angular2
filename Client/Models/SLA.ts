import {SLATypes} from './SLATypes';
import {SLAStates} from './SLAStates';

export interface SLA {
    id: number,
    adminNumber: string,
    type: SLATypes,
    totalBalance?: number,
    currency: string,
    state: SLAStates
}