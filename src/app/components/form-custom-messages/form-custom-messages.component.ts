import { Component, Input } from '@angular/core';
import { FormCustomMessagesModel } from '@models/form-custom-messages.model';

@Component({
  selector: 'app-form-custom-messages',
  templateUrl: './form-custom-messages.component.html',
  styleUrls: ['./form-custom-messages.component.css']
})
export class FormCustomMessagesComponent {

  @Input() data: FormCustomMessagesModel;

  constructor() { }

  get errors() {
    if (this.isValid) {
      return [];
    }

    let errors: string[] = [];
    Object.keys(this.data.control.errors).forEach(error => {
      errors.push(this.data.errors[error]);
    });
    return errors;
  }

  get isValid() {
    return this.data.control.valid;
  }

}
