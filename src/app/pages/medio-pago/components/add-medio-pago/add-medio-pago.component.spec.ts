import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedioPagoComponent } from './add-medio-pago.component';

describe('AddMedioPagoComponent', () => {
  let component: AddMedioPagoComponent;
  let fixture: ComponentFixture<AddMedioPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedioPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedioPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
