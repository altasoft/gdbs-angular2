import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'pagination',
    templateUrl: '/html/Components/pagination.component.html'
})

export class Pagination {
    @Input()
    currentPage: number = 1;

    @Input()
    itemsPerPage: number = 10;

    @Input()
    totalItems: number;

    @Input()
    maxSize: number = 5;

    @Output()
    currentPageChange = new EventEmitter();

    @Output()
    itemsPerPageChange = new EventEmitter();

    GetPagesArray(): any[] {
        let pages: any[] = [];
        let totalPages = this.calculateTotalPages();
        let startPage = 1;
        let endPage = totalPages;

        if (this.maxSize < totalPages) {
            startPage = ((Math.ceil(this.currentPage / this.maxSize) - 1) * this.maxSize) + 1;
            endPage = Math.min(startPage + this.maxSize - 1, totalPages);
        }

        for (var number = startPage; number <= endPage; number++)
            pages.push(this.makePage(number, number.toString(), number === this.currentPage));

        if (this.maxSize < totalPages) {
            if (startPage > 1)
                pages.unshift(this.makePage(startPage - 1, '...', false));

            if (endPage < totalPages)
                pages.push(this.makePage(endPage + 1, '...', false));
        }

        return pages;
    }

    private calculateTotalPages(): number {
        let totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);

        return Math.max(totalPages || 0, 1);
    }

    private makePage(number: number, text: string, active: boolean) {
        return {
            number: number,
            text: text,
            active: active
        };
    }

    private selectPage(page: number, event?: MouseEvent) {
        if (event) {
            event.preventDefault();

            if (event.target) {
                let target: any = event.target;
                target.blur();
            }
        }

        if ((page == this.currentPage || page == 0 || page == this.calculateTotalPages() + 1) && event != undefined)
            return;

        this.currentPage = page;
        this.currentPageChange.emit({ page: page, itemsPerPage: this.itemsPerPage });
        this.itemsPerPageChange.emit({ page: page, itemsPerPage: this.itemsPerPage });
    }

    private blur(event: MouseEvent) {
        let target: any = event.target;
        target.blur();
    }
}