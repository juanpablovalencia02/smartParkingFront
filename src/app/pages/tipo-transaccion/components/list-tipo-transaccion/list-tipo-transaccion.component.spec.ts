import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoTransaccionComponent } from './list-tipo-transaccion.component';

describe('ListTipoTransaccionComponent', () => {
  let component: ListTipoTransaccionComponent;
  let fixture: ComponentFixture<ListTipoTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTipoTransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTipoTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
