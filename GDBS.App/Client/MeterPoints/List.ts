import {Component} from 'angular2/core';
import {ListComponent, ListColumn} from '../Components/List.component'
import {MPListHandler} from './MPListHandler'

@Component({
    selector: 'list',
    templateUrl: '/html/MeterPoints/List.html',
    //directives: [ListComponent]
    directives: [MPListHandler]
})

export class List {

    //classa: any[];

    pppName: string;

    // Configuration
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
