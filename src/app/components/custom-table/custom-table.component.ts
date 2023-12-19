import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {

  @Input() customTableBody: TemplateRef<any>;

  @Input() items: any[] = [];
  @Input() title: string;

  paginate = 5;
  currentPage = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
