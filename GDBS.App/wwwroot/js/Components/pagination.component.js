System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Pagination;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Pagination = (function () {
                function Pagination() {
                    this.currentPage = 1;
                    this.itemsPerPage = 10;
                    this.maxSize = 5;
                    this.currentPageChange = new core_1.EventEmitter();
                    this.itemsPerPageChange = new core_1.EventEmitter();
                }
                Pagination.prototype.GetPagesArray = function () {
                    var pages = [];
                    this.totalPages = this.calculateTotalPages();
                    var startPage = 1;
                    var endPage = this.totalPages;
                    if (this.maxSize < this.totalPages) {
                        startPage = ((Math.ceil(this.currentPage / this.maxSize) - 1) * this.maxSize) + 1;
                        endPage = Math.min(startPage + this.maxSize - 1, this.totalPages);
                    }
                    for (var number = startPage; number <= endPage; number++)
                        pages.push(this.makePage(number, number.toString(), number === this.currentPage));
                    if (this.maxSize < this.totalPages) {
                        if (startPage > 1)
                            pages.unshift(this.makePage(startPage - 1, '...', false));
                        if (endPage < this.totalPages)
                            pages.push(this.makePage(endPage + 1, '...', false));
                    }
                    return pages;
                };
                Pagination.prototype.calculateTotalPages = function () {
                    var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
                    return Math.max(totalPages || 0, 1);
                };
                Pagination.prototype.makePage = function (number, text, active) {
                    return {
                        number: number,
                        text: text,
                        active: active
                    };
                };
                Pagination.prototype.selectPage = function (page, event) {
                    if (event) {
                        event.preventDefault();
                        if (event.target) {
                            var target = event.target;
                            target.blur();
                        }
                    }
                    if ((page == this.currentPage || page == 0 || page == this.totalPages + 1) && event != undefined)
                        return;
                    this.currentPage = page;
                    this.currentPageChange.emit({ page: page, itemsPerPage: this.itemsPerPage });
                    this.itemsPerPageChange.emit({ page: page, itemsPerPage: this.itemsPerPage });
                };
                Pagination.prototype.onChange = function (event) {
                    var target = event.target;
                    target.blur();
                    this.itemsPerPage = target.value;
                    this.selectPage(1);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Pagination.prototype, "currentPage", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Pagination.prototype, "itemsPerPage", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Pagination.prototype, "totalItems", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Pagination.prototype, "maxSize", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Pagination.prototype, "currentPageChange", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Pagination.prototype, "itemsPerPageChange", void 0);
                Pagination = __decorate([
                    core_1.Component({
                        selector: 'pagination',
                        templateUrl: '/html/Components/pagination.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Pagination);
                return Pagination;
            }());
            exports_1("Pagination", Pagination);
        }
    }
});

//# sourceMappingURL=pagination.component.js.map
