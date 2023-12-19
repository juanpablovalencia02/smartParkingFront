import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { ServerPaginationModel } from '@models/server-pagination.model';
import { TableHeaderModel } from '@models/table-header.model';

@Component({
  selector: 'app-custom-table-serve',
  templateUrl: './custom-table-serve.component.html',
  styleUrls: ['./custom-table-serve.component.css']
})
export class CustomTableServeComponent {

  @Input() customTableBody: TemplateRef<any>;

  @Input() tableHeader: TableHeaderModel[];

  @Input() data: ServerPaginationModel<any>;
  @Input() title: string;

  @Output() onChange = new EventEmitter<Object>();

  private _filters = {};

  private _timeoutFilter = null;

  page = {
    itemsPerPage: 5,
    page: 1
  };

  constructor() {
  }

  updateFilter() {
    clearTimeout(this._timeoutFilter);
    setTimeout(() => {
      this._filters = {};
      this.tableHeader.forEach(header => {
        if (header.filter && header.filter.value) {
          this._filters[header.filter.param] = header.filter.value;
        }
      });

      this.changePage(1);
    }, 200);
  }

  newSearch() {
    const data = Object.assign(this._filters, this.page);
    this.onChange.emit(data)
  }

  changePage(page: number) {
    this.page.page = page;

    this.newSearch();
  }

  changeItemsPerPage() {
    this.changePage(1);
  }

  getCleanText(filter) {
    if (filter['cleanText']) {
      return filter['cleanText'];
    }
    return '';
  }

  getItems(filter) {
    if (filter['items']) {
      return filter['item s'];
    }
    return [];
  }


  getValue(filter, item) {
    const getVal = filter['getValue'];
    if (getVal) {
      return getVal(item)
    }
    return item;
  }


  getTitle(filter, item) {
    const func = filter['getTitle'];
    if (func) {
      return func(item)
    }
    return item;
  }
}
