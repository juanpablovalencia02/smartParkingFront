import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomMessagesComponent } from './form-custom-messages.component';

describe('FormCustomMessagesComponent', () => {
  let component: FormCustomMessagesComponent;
  let fixture: ComponentFixture<FormCustomMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCustomMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCustomMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
