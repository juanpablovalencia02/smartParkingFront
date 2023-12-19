export interface TableFilterInput {
  type: 'input';
  param: string;
  value?: any;
}

export interface TableFilterSelect {
  type: 'select';
  param: string;
  value?: any;

  cleanText: string;

  items: any[];
  getTitle(item: any): string | number;
  getValue(item: any): string | number;
}

export interface TableHeaderModel {
  title: string;
  filter?: TableFilterInput | TableFilterSelect;
}
