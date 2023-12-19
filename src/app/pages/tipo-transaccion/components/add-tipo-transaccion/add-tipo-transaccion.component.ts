import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoTransaccionModel } from '@models/tipo-transaccion.model';
import { UINotificationService } from '@services/uinotification.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-add-tipo-transaccion',
  templateUrl: './add-tipo-transaccion.component.html',
  styleUrls: ['./add-tipo-transaccion.component.scss']
})
export class AddTipoTransaccionComponent implements OnInit {

  @Input() tipoT: TipoTransaccionModel;//actualizar

  @Output() store: EventEmitter<TipoTransaccionModel> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  formTipoT: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _uiNotificationService: UINotificationService
  ) {
    this.tipoT = {
      id: null,
      detalle: '',
      descripcion: '',

    };
    this.buildForm();
  }

  ngOnInit(): void {

    this.setTipoT()
  }


  get detalleField() {
    return this.formTipoT.get('detalle');
  }

  get descripcionField() {
    return this.formTipoT.get('descripcion');
  }

  setTipoT() {
    if (this.tipoT) {
      this.formTipoT.patchValue({
        detalle: this.tipoT.detalle,
        descripcion: this.tipoT.descripcion
      })
    }
  }

  private buildForm() {
    this.formTipoT = this.formBuilder.group({
      id: [0],
      detalle: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });

    this.formTipoT.valueChanges
      .pipe(
        debounceTime(350),
      )
      .subscribe(data => {
      });
  }

  guardarTipoT() {
    this.store.emit(this.getTipoT());
  }

  closeModal() {
    this.cancel.emit();
  }

  private getControl(name: string) {
    return this.formTipoT.controls[name];
  }

  getTipoT(): TipoTransaccionModel {
    return {
      id: this.tipoT?.id,
      descripcion: this.getControl('descripcion').value,
      detalle: this.getControl('detalle').value
    }
  }

}
