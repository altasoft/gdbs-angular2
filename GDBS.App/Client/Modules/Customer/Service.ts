import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class Service {

    serviceBaseUrl = 'http://localhost:35089'

    constructor(private http: Http) {
    }


    getList(searchText: string, skip: number = 0, take: any = 10, cb: (data: any) => void) {

        var headers = new Headers({
            'X-UserId': 6721,
            'X-OrganisationId': 1,
            'X-Unit': 'Test Unit',
            'X-Name': 'My Device',
            'X-BankUserId': '12',
            'X-BankBranchId': '01',
            'X-LmsUserId': '12',
            'X-LmsBranchId': '01',
            'X-RoleId': -1000
        })

        if (!searchText) {
            cb && cb([])
            return
        }

        this.http.get(this.serviceBaseUrl + '/api/customer/list?searchParam=' + searchText, { headers: headers }).subscribe(
            res => cb && cb(res.json()),
            err => console.warn(err)
        )
    }
}