import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoPagoComponent } from './list-tipo-pago.component';

describe('ListTipoPagoComponent', () => {
  let component: ListTipoPagoComponent;
  let fixture: ComponentFixture<ListTipoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTipoPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTipoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
