import { AbstractControl } from "@angular/forms";

interface errors {
  [key: string]: string;
}

export interface ErrorsForm {
  [key: string]: FormCustomMessagesModel;
}

export interface FormCustomMessagesModel {
    control: AbstractControl;
    errors: errors;
    success: string;
}
