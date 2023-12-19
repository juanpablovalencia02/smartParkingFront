import { Injectable } from '@angular/core';
import { ProcesoModel } from '@models/proceso.model';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class ProcesoService {
  proceso: ProcesoModel;
  permisos: number;
  constructor(
    private _coreService: CoreService
  ) { }

  public traerProcesos() {
    return this._coreService.get<ProcesoModel[]>('procesos');
  }
  public slider() {
    return this._coreService.get('slider');
  }

  public procesosByRolUsuario(idRol: number) {
    const idrol = idRol;
    this.permisos = idRol;
    return this._coreService.post('traerprocesossusuario', idrol);
  }

  public procesosByNombre(nombre: string) {
    const name = nombre.toUpperCase();
    return this._coreService.get('procesos?nombreProceso=' + name);
  }

  public procesosByRol(idRol: number) {
    const idrol = idRol;
    this.permisos = idRol;
    return this._coreService.post('traerprocesos', idrol);
  }

  public info(idRol: number) {
    const idrol = idRol;
    this.permisos = idRol;
    return this._coreService.post('permisos', idrol);
  }

  crearProceso(proceso: ProcesoModel) {

    proceso.nombreProceso = proceso.nombreProceso.toUpperCase();
    proceso.descripcion = proceso.descripcion.toUpperCase();
    return this._coreService.post<ProcesoModel>('procesos', proceso);
  }


  eliminarProceso(procesoId: number) {
    return this._coreService.delete('procesos/' + procesoId);
  }
  actualizarProceso(proceso: ProcesoModel) {
    proceso.nombreProceso = proceso.nombreProceso.toUpperCase();
    proceso.descripcion = proceso.descripcion.toUpperCase();
    return this._coreService.put('procesos/' + proceso.id, proceso);
  }
}
