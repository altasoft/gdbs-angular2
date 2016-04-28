import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class Service {

    serviceBaseUrl = 'http://localhost:35089'

    constructor(private http: Http) {
    }

    headers = new Headers({
        'X-UserId': 6721,
        'X-OrganisationId': 1,
        'X-Unit': 'Test Unit',
        'X-Name': 'My Device',
        'X-BankUserId': '12',
        'X-BankBranchId': '01',
        'X-LmsUserId': '12',
        'X-LmsBranchId': '01',
        'X-RoleId': -1000,
        'Content-Type': 'text/json'
    })

    getList(searchText: string, skip: number = 0, take: any = 10, cb: (data: any) => void) {
        if (!searchText) {
            cb && cb([])
            return
        }

        this.http.get(this.serviceBaseUrl + '/api/customer/list?searchParam=' + searchText, { headers: this.headers }).subscribe(
            res => cb && cb(res.json()),
            err => console.warn(err)
        )
    }

    put(customer: any, cb: (data: any) => void) {
        var data = { Data: customer }
        var request = { RequestBody: data };

        this.http.put(this.serviceBaseUrl + '/api/customer/put', JSON.stringify(request), { headers: this.headers }).subscribe(
            res => cb && cb(res.json()),
            err => cb && cb(err)
        )
    }
}