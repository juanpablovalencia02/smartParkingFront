import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoPagoModel } from '@models/tipo-pago.model';
import { UINotificationService } from '@services/uinotification.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-add-tipo-pago',
  templateUrl: './add-tipo-pago.component.html',
  styleUrls: ['./add-tipo-pago.component.scss']
})
export class AddTipoPagoComponent implements OnInit {

  @Input() tipoPago: TipoPagoModel;//actualizar

  @Output() store: EventEmitter<TipoPagoModel> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  formTipoPago: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _uiNotificationService: UINotificationService
  ) {
    this.tipoPago = {
      id: null,
      detalleTipoPago: '',

    };
    this.buildForm();
  }

  ngOnInit(): void {

    this.setTipoPago()
  }


  get detalleTipoPagoField() {
    return this.formTipoPago.get('detalleTipoPago');
  }



  setTipoPago() {
    if (this.tipoPago) {
      this.formTipoPago.patchValue({
        detalleTipoPago: this.tipoPago.detalleTipoPago
      })
    }
  }

  private buildForm() {
    this.formTipoPago = this.formBuilder.group({
      id: [0],
      detalleTipoPago: ['', [Validators.required]]
    });

    this.formTipoPago.valueChanges
      .pipe(
        debounceTime(350),
      )
      .subscribe(data => {
      });
  }

  guardarTipoPago() {
    this.store.emit(this.getTipoPago());
  }

  closeModal() {
    this.cancel.emit();
  }

  private getControl(name: string) {
    return this.formTipoPago.controls[name];
  }

  getTipoPago(): TipoPagoModel {
    return {
      id: this.tipoPago?.id,
      detalleTipoPago: this.getControl('detalleTipoPago').value,
    }
  }

}
