import {Component, OnInit} from 'angular2/core';
import {ListComponent, ListColumn, PagingConfig} from '../Components/List.component'
import {Pagination} from '../Components/pagination.component'



@Component({
    selector: 'list',
    templateUrl: '/html/ServiceAgreement/List.html',
    directives: [ListComponent, Pagination]
})

export class List {

    // Paging Configuration
    pagingConfig: PagingConfig = {
        ActivePage: 1,
        ItemsPerPage: 10,
        TotalItemsCount: 2000
    };


    // Columns Configuration
    columns: ListColumn[] = [
        { Key: 'SLAAdminNumber', Name: 'SLAN', LinkRoute: ['/SLADetail'], LinkItemKey: 'SLAId' },
        { Key: 'OldCustomerNumber', Name: 'Old Customer Number' },
        { Key: 'CustomerFullName', Name: 'Customer Full Name' },
        { Key: 'IdentificationNumber', Name: 'Identification Number' },
        { Key: 'District' },
        { Key: 'Address', Sorting: false },
        { Key: 'ServiceType', Name: 'Service Type' },
        { Key: 'State' },
    ]

    items: any[]



    constructor() {
        this.refreshData({})
    }


    refreshData(info) {
        console.log(info)


        this.items = [
            {
                SLAId: 1,
                SLAAdminNumber: '3100003' + Math.round(Math.random() * 1000),
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
                SLAAdminNumber: '3100003' + Math.round(Math.random() * 1000),
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
                SLAAdminNumber: '3100002' + Math.round(Math.random() * 1000),
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
}
