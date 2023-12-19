import { Injectable } from '@angular/core';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(
    private _coreService: CoreService
  ) { }

  public traerNotificaciones() {
    return this._coreService.get<any[]>('notificaciones');
 }

 actualizarEstado(id:number) {

// console.log(id, 'entro a servicio');
  return this._coreService.put('notificaciones/read/' +id, {});
}
}
