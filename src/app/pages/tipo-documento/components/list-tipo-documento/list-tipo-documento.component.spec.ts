import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoDocumentoComponent } from './list-tipo-documento.component';

describe('ListTipoDocumentoComponent', () => {
  let component: ListTipoDocumentoComponent;
  let fixture: ComponentFixture<ListTipoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTipoDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
