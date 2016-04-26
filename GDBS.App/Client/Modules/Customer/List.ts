import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router'
import {ListComponent, ListColumn, PagingConfig, RefreshInfo} from '../../Common/Components/List'
import {RightsService} from '../../Common/Services'
import {Service} from './Service'


@Component({
    selector: 'list',
    templateUrl: 'List.ts.html',
    directives: [ROUTER_DIRECTIVES, ListComponent],
    providers: [Service]
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
        { IsVisible: true, Key: 'UFE.Customer.$TAXABLE' },
        { IsVisible: true, Key: 'UFE.Customer..IS_EMPLOYEE' },
        { IsVisible: true, Key: 'UFE.Customer..TAX_PID_OR_PASSPORT' },
        { IsVisible: true, Key: 'UFE.Customer.IsResident' },
        { IsVisible: true, Key: 'UFE.Customer.Attributes.IsInBlackList' },
        { IsVisible: true, Key: 'UFE.Customer.FullName' }
    ]

    items: any[]

    searchText: string = '01029014589'



    constructor(private rights: RightsService, private router: Router, private customerService: Service) {
        this.refreshData({})
    }



    hasLink(item: any, col: ListColumn) {
        return item && col && col.LinkRoute && col.LinkItemKey && item[col.LinkItemKey]
    }

    refreshData(info) {

        this.customerService.getList(this.searchText, 0, 100, data => {
            this.items = data.map(x => x.Data)
            this.pagingConfig.TotalItemsCount = this.items.length
        })
    }

    addItem() {
        this.router.navigate(['Create'])
    }
}
