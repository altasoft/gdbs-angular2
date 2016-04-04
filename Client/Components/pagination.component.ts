import {Component, OnInit, Input, Output, ElementRef, EventEmitter, Self, Renderer} from 'angular2/core';
import {ControlValueAccessor, NgModel} from 'angular2/common';

export interface IPaginationConfig {
    maxSize: number;
    itemsPerPage: number;
}

export interface IPageChangedEvent {
    itemsPerPage: number;
    page: number;
}

const paginationConfig: IPaginationConfig = {
    maxSize: 5,
    itemsPerPage: 10,
}

@Component({
    selector: 'pagination',
    templateUrl: '/html/Components/pagination.component.html',
    providers: [NgModel]
})

export class Pagination implements ControlValueAccessor, OnInit, IPaginationConfig {
    @Input() public maxSize: number;
    @Output() private pageChanged: EventEmitter<IPageChangedEvent> = new EventEmitter(false);

    @Input() public get itemsPerPage() {
        return this._itemsPerPage;
    }

    public set itemsPerPage(v: number) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }

    @Input() private get totalItems(): number {
        return this._totalItems;
    }

    private set totalItems(v: number) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }

    public config: any;

    private _itemsPerPage: number;
    private _totalItems: number;
    private _totalPages: number;

    private inited: boolean = false;

    private get totalPages() {
        return this._totalPages;
    }

    private set totalPages(v: number) {
        this._totalPages = v;

        if (this.inited)
            this.selectPage(this.page);
    }

    public set page(value) {
        const _previous = this._page;
        this._page = (value > this.totalPages) ? this.totalPages : (value || 1);

        if (_previous === this._page || typeof _previous === 'undefined')
            return;

        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }

    public get page() {
        return this._page;
    }

    private _page: number;
    private pages: Array<any>;

    constructor( @Self() public cd: NgModel, public renderer: Renderer, public elementRef: ElementRef) {
        cd.valueAccessor = this;
        this.config = this.config || paginationConfig;
    }

    ngOnInit() {
        // watch for maxSize
        this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : paginationConfig.maxSize;

        // base class
        this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : paginationConfig.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.page = this.cd.value;
        this.inited = true;
    }

    writeValue(value: number) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    }

    private selectPage(page: number, event?: MouseEvent) {
        if (event)
            event.preventDefault();

        if (event && event.target) {
            let target: any = event.target;
            target.blur();
        }

        this.writeValue(page);
        this.cd.viewToModelUpdate(this.page);
    }

    private noPrevious(): boolean {
        return this.page === 1;
    }

    private noNext(): boolean {
        return this.page === this.totalPages;
    }

    // Create page object used in template
    private makePage(number: number, text: string, isActive: boolean): { number: number, text: string, active: boolean } {
        return {
            number: number,
            text: text,
            active: isActive
        };
    }

    private getPages(currentPage: number, totalPages: number): Array<any> {
        let pages: any[] = [];

        // Default page limits
        let startPage = 1;
        let endPage = totalPages;
        let isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;

        // recompute if maxSize
        if (isMaxSized) {
            // Visible pages are paginated with maxSize
            startPage = ((Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize) + 1;
            
            // Adjust last page if limit is exceeded
            endPage = Math.min(startPage + this.maxSize - 1, totalPages);
        }

        // Add page number links
        for (var number = startPage; number <= endPage; number++)
            pages.push(this.makePage(number, number.toString(), number === currentPage));

        // Add links to move between page sets
        if (isMaxSized) {
            if (startPage > 1)
                pages.unshift(this.makePage(startPage - 1, '...', false));

            if (endPage < totalPages)
                pages.push(this.makePage(endPage + 1, '...', false));
        }

        return pages;
    }

    // base class
    private calculateTotalPages(): number {
        let totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);

        return Math.max(totalPages || 0, 1);
    }

    onChange = (_: any) => { };
    onTouched = () => { };

    registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }
}