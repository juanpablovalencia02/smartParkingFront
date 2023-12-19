import { Injectable } from '@angular/core';
import { TipoPagoModel } from '@models/tipo-pago.model';
import { CoreService } from './core.service';
@Injectable({
  providedIn: 'root'
})
export class TipoPagoService {

  tipoPagoModel: TipoPagoModel;
  constructor(
    private _coreService: CoreService
  ) { }

  public traerTipoPagos() {
    return this._coreService.get<TipoPagoModel[]>('tipo_pagos');
  }

  crearTipoPago(tPago: TipoPagoModel) {

    return this._coreService.post<TipoPagoModel>('tipo_pagos', tPago);
  }


  eliminarTipoPago(tPagoId: number) {
    return this._coreService.delete('tipo_pagos/' + tPagoId);
  }
  actualizarTipoPago(tPago: TipoPagoModel) {
    return this._coreService.put('tipo_pagos/' + tPago.id, tPago);
  }
}
