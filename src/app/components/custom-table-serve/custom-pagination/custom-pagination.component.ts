import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.css']
})
export class CustomPaginationComponent {

  @Input() current: number;
  @Input() max: number;
  @Output() onChangePage = new EventEmitter<number>();

  paginas: string[] = []

  constructor() { }

  get isFirst() {
    return this.current === 1;
  }

  get isLast() {
    return this.max === this.current
  }

  get pages() {
    let pagination = [2, 3, 4, 5, 6];
    if (this.max <= 7) {
      pagination = [2, 3, 4, 5, 6]
    } else if (this.current >= this.max - 3) {
      pagination = [this.max - 5, this.max - 4, this.max - 3, this.max - 2, this.max - 1]
    } else if (this.current > 4 && this.max > 7) {
      pagination = [this.current - 2, this.current - 1, this.current, this.current + 1, this.current + 2]
    }

    this.paginas = pagination.filter(pagina => pagina < this.max).map(n => n + "")

    if (this.max > 7) {
      this.paginas[4] = Number(this.paginas[4]) == (this.max - 1) ? this.paginas[4] : "..."
    }

    if (this.max > 7) {
      this.paginas[0] = this.paginas[0] == "2" ? "2" : "..."
    }

    return this.paginas;
  }


  changePage(page) {
    page = Number(page)
    if (isNaN(page) || !this.isPageValid(page) || page == this.current) {
      return;
    }

    this.onChangePage.emit(page);
  }

  isActive(page) {
    return Number(page) == this.current
  }

  isPageValid(page: number) {
    return page <= this.max && page >= 1
  }

}
