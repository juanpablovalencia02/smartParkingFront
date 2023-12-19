import { Component, Input, OnInit, Output, TemplateRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  @Input()title: string = '';

  @Input()cardLayout: TemplateRef<any>;

  private _data: [] = [];

  dataSlider: [][] = [];

  @Input()
  set data(data: []) {
    if (data && data.length === this._data.length) return;
    this._data = data;
    this.getDataSlider(data);
  }

  @Output()onFilter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onSearch(query) {
    this.onFilter.emit(query);
  }

  getDataSlider(data: []) {
    const carousel = [];
    const array = Object.assign([], data);
    while (array.length > 0) {
        carousel.push(array.splice(0, 5));
    }
    this.dataSlider = carousel;
  }
}
