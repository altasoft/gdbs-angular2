import {Component} from 'angular2/core';
import {ListComponent, ListColumn, PagingConfig} from '../../Common/Components'
import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    selector: 'list',
    templateUrl: 'List.ts.html',
    directives: [ListComponent, ROUTER_DIRECTIVES],
    //providers: [Pagination]
})

export class List {

    //constructor(paging: Pagination) {
    //    paging.testEvent.subscribe(function () { alert(1); });
    //}

    //onTestEvent() {
    //    alert(1);
    //}

    // Paging Configuration
    pagingConfig: PagingConfig = {
        ActivePage: 1,
        ItemsPerPage: 10,
        TotalItemsCount: 3000
    };

    // Columns Configuration
    columns: ListColumn[] = [
        { Key: 'SLAAdminNumber', Name: 'SLAN', LinkRoute: ['/SLADetail'], LinkItemKey: 'SLAId' },
        { Key: 'OldCustomerNumber', Name: 'Old Customer Number' },
        { Key: 'CustomerFullName', Name: 'Customer Full Name' },
        { Key: 'IdentificationNumber', Name: 'Identification Number' },
        { Key: 'District', IsVisible: true },
        { Key: 'Address', Sorting: false },
        { Key: 'ServiceType', Name: 'Service Type' },
        { Key: 'State' },
    ]


    hasLink(item: any, col: ListColumn) {
        return item && col && col.LinkRoute && col.LinkItemKey && item[col.LinkItemKey]
    }

    // Mock Data
    items = [
        {
            SLAId: 1,
            SLAAdminNumber: '3100003360',
            OldCustomerNumber: '',
            CustomerFullName: 'შპს რას მერჩი',
            IdentificationNumber: '205205205',
            District: 'აბაშა',
            Address: 'ცცცც',
            ServiceType: 'State Budget',
            State: 'Active',
        },
        {
            SLAId: 2,
            SLAAdminNumber: '3100003360',
            OldCustomerNumber: '123456',
            CustomerFullName: 'ნინჩო ხელაძე 2+',
            IdentificationNumber: '	01005007111',
            District: 'აბაშა',
            Address: 'ცცცც',
            ServiceType: 'State Budget',
            State: 'Active',
        },
        {
            SLAId: 3,
            SLAAdminNumber: '3100002586',
            OldCustomerNumber: '123321',
            CustomerFullName: '	რამანა რამანა',
            IdentificationNumber: '01005007000',
            District: 'ქარელი',
            Address: 'ედიშერ მაღალაშვილის ქუჩა, N8',
            ServiceType: 'Retail Commercial',
            State: 'Suspended',
        }
    ]
}
