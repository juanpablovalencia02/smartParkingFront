import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTableServeComponent } from './custom-table-serve.component';

describe('CustomTableServeComponent', () => {
  let component: CustomTableServeComponent;
  let fixture: ComponentFixture<CustomTableServeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTableServeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTableServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
