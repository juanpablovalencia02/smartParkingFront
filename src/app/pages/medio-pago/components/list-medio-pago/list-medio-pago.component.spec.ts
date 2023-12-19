import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedioPagoComponent } from './list-medio-pago.component';

describe('ListMedioPagoComponent', () => {
  let component: ListMedioPagoComponent;
  let fixture: ComponentFixture<ListMedioPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMedioPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedioPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
