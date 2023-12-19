import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedioPagoModel } from '@models/medio-pago.model';
import { UINotificationService } from '@services/uinotification.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-add-medio-pago',
  templateUrl: './add-medio-pago.component.html',
  styleUrls: ['./add-medio-pago.component.scss']
})
export class AddMedioPagoComponent implements OnInit {

  @Input() medioPago: MedioPagoModel;//actualizar

  @Output() store: EventEmitter<MedioPagoModel> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  formMedioPago: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _uiNotificationService: UINotificationService
  ) {
    this.medioPago = {
      id: null,
      detalleMedioPago: '',

    };
    this.buildForm();
  }

  ngOnInit(): void {

    this.setMedioPago()
  }


  get detalleMedioPagoField() {
    return this.formMedioPago.get('detalleMedioPago');
  }



  setMedioPago() {
    if (this.medioPago) {
      this.formMedioPago.patchValue({
        detalleMedioPago: this.medioPago.detalleMedioPago
      })
    }
  }

  private buildForm() {
    this.formMedioPago = this.formBuilder.group({
      id: [0],
      detalleMedioPago: ['', [Validators.required]]
    });

    this.formMedioPago.valueChanges
      .pipe(
        debounceTime(350),
      )
      .subscribe(data => {
      });
  }

  guardarMedioPago() {
    this.store.emit(this.getMedioPago());
  }

  closeModal() {
    this.cancel.emit();
  }

  private getControl(name: string) {
    return this.formMedioPago.controls[name];
  }

  getMedioPago(): MedioPagoModel {
    return {
      id: this.medioPago?.id,
      detalleMedioPago: this.getControl('detalleMedioPago').value,
    }
  }

}
