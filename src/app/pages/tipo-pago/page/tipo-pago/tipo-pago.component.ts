import { Component, OnInit } from '@angular/core';
import { TipoPagoModel } from '@models/tipo-pago.model';
import { TipoPagoService } from '@services/tipo-pago.service';
import { UINotificationService } from '@services/uinotification.service';

@Component({
  selector: 'app-tipo-pago',
  templateUrl: './tipo-pago.component.html',
  styleUrls: ['./tipo-pago.component.scss']
})
export class TipoPagoComponent implements OnInit {

  private showModalTipoPago = false;

  tipoPago: TipoPagoModel = null;
  tipoPagos: TipoPagoModel[] = [];

  constructor(
    private _uiNotificationService: UINotificationService,
    private _tipoPagoService: TipoPagoService
  ) { }

  ngOnInit(): void {
    this.getTipoPago();
  }

  getTipoPago() {
    this._tipoPagoService.traerTipoPagos()
      .subscribe(tipoPago => {
        this.tipoPagos = tipoPago;
      }, error => {
        this._uiNotificationService.error("Error de conexión");
      });
  }

  eliminarTipoPago(tipoPagoId: number) {
    this._tipoPagoService.eliminarTipoPago(tipoPagoId).subscribe(() => {
      this.getTipoPago();
    })
  }

  actualizarTipoPago(tipoPago: TipoPagoModel) {
    this.tipoPago = tipoPago;
    this.showModalTipoPago = true;
  }

  createTipoPago() {
    this.tipoPago = null;
    this.showModalTipoPago = true;
  }

  guardarTipoPago(tipoPago: TipoPagoModel) {
    if (tipoPago.id) {
      this._tipoPagoService.actualizarTipoPago(tipoPago).subscribe(tipoPago => {
        this.getTipoPago();
        this.reset();
      });
    } else {
      this._tipoPagoService.crearTipoPago(tipoPago).subscribe(rol => {
        this.getTipoPago();
        this.reset();
      })
    }
  }

  reset() {
    this.tipoPago = null;
    this.showModalTipoPago = false;
  }

}
