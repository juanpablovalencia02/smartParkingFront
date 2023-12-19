import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-list-item',
  templateUrl: './cards-list-item.component.html',
  styleUrls: ['./cards-list-item.component.scss']
})
export class CardsListItemComponent{
  @Input()
  disabled: Boolean = false
}
