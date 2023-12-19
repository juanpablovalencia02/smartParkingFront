import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListItemComponent } from './cards-list-item.component';

describe('CardsListItemComponent', () => {
  let component: CardsListItemComponent;
  let fixture: ComponentFixture<CardsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
