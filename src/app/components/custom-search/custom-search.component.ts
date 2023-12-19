import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.css']
})
export class CustomSearchComponent implements OnInit{

  @ViewChild('searchInput', { static: true }) movieSearchInput: ElementRef;

  @Output() onSearch: EventEmitter<String> = new EventEmitter();

  value: String = ''

  constructor() {
    
  }

  get isDirty(){
    return (this.value&&this.value.length>2)
  }

  get classIcon() {
    return this.isDirty?'fa fa-times':'fa fa-search'
  }

  ngOnInit(){
    fromEvent(this.movieSearchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , debounceTime(500)
      , distinctUntilChanged()
    ).subscribe((text: string) => {
      this.onSearch.emit(text)
    });
  }

  clean(){
    if (this.isDirty){
      this.value = ''
      this.onSearch.emit('')
    }
  }
}
