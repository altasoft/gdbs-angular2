import {Injectable} from 'angular2/core';

@Injectable()
export class RightsService {

    allowed(taskName: string, taskRightName: string) {
        return true;
    }

}