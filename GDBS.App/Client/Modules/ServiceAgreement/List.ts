import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router'
import {ListComponent, ListColumn, PagingConfig, RefreshInfo} from '../../Common/Components/List'
import {RightsService} from '../../Common/Services'



@Component({
    selector: 'list',
    templateUrl: 'List.ts.html',
    directives: [ROUTER_DIRECTIVES, ListComponent]
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
        {
            Key: 'SLAAdminNumber',
            Name: 'ServiceAgreement.ModelSLAAdminNumber',
            LinkRoute: ['/SLA', 'Details'],
            LinkItemKey: 'SLAId',
            IsVisible: true,
            Sorting: true
        },
        { Key: 'OldCustomerNumber', Name: 'ServiceAgreement.ModelOldCustomerNumber', IsVisible: true },
        { Key: 'CustomerFullName', Name: 'ServiceAgreement.ModelCustomerFullName', IsVisible: true },
        { Key: 'IdentificationNumber', Name: 'ServiceAgreement.ModelIdentificationNumber', IsVisible: true },
        { Key: 'District', Name: 'ServiceAgreement.ModelDistrict', IsVisible: true, Sorting: true },
        { Key: 'Address', Name: 'ServiceAgreement.ModelAddress', Sorting: false },
        { Key: 'ServiceType', Name: 'ServiceAgreement.ModelServiceType' },
        { Key: 'State', Name: 'ServiceAgreement.ModelState' },
    ]

    items: any[]



    constructor(private rights: RightsService, private router: Router) {
        this.refreshData({})
    }



    hasLink(item: any, col: ListColumn) {
        return item && col && col.LinkRoute && col.LinkItemKey && item[col.LinkItemKey]
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

    addItem() {
        this.router.navigate(['Create'])
    }
}
