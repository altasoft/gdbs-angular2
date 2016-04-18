import {Injectable} from 'angular2/core';

@Injectable()
export class RightsService {

    allowed(taskName: any, taskRightName: string) {
        return true;
    }

}

export class RightsService2 {

    allowed2(taskName: any, taskRightName?: string) {
        return true;
    }

}