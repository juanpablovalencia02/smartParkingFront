import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoPagoComponent } from './add-tipo-pago.component';

describe('AddTipoPagoComponent', () => {
  let component: AddTipoPagoComponent;
  let fixture: ComponentFixture<AddTipoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipoPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
