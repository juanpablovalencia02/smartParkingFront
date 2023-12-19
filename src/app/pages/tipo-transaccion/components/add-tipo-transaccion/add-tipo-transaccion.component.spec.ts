import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoTransaccionComponent } from './add-tipo-transaccion.component';

describe('AddTipoTransaccionComponent', () => {
  let component: AddTipoTransaccionComponent;
  let fixture: ComponentFixture<AddTipoTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipoTransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipoTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
