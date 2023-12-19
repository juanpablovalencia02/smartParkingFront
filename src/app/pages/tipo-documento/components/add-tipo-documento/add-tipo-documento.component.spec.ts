import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoDocumentoComponent } from './add-tipo-documento.component';

describe('AddTipoDocumentoComponent', () => {
  let component: AddTipoDocumentoComponent;
  let fixture: ComponentFixture<AddTipoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipoDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
