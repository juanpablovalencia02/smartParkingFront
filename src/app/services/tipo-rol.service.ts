import { Injectable } from '@angular/core';
import { TipoRolModel } from '@models/tipo-rol.model';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class TipoRolService {
  tipo_rol: TipoRolModel;
  permisos: number;

  constructor(
    private _coreService: CoreService
  ) { }

  public traerTipo_rol() {
     return this._coreService.get<TipoRolModel[]>('virtualt/tipo_roles');
  }

  public slider() {
    return this._coreService.get('virtualt/slider');
  }

  public tipo_rolByRolUsuario(idRol: number) {
    const idrol = idRol;
    this.permisos = idRol;
    return this._coreService.post('virtualt/traerdescripcionususuario', idrol);
  }

  public tipo_rolByRol(idRol: number) {
    const idrol = idRol;
    this.permisos = idRol;
    return this._coreService.post('virtualt/traerdescripcion', idrol);
  }

  public info(idRol: number) {
    const idrol = idRol;
    this.permisos = idRol;
    return this._coreService.post('virtualt/permisos', idrol);
  }

  crearTipo_rol(tipo_rol: TipoRolModel ) {
    tipo_rol.descripcionRol = tipo_rol.descripcionRol.toUpperCase();
    return this._coreService.post<TipoRolModel>('virtualt/tipo_roles', tipo_rol);
  }


  eliminarTipo_rol(tipo_rolId: number) {
    return this._coreService.delete('virtualt/tipo_roles/' + tipo_rolId);
  }
  actualizarTipo_rol(tipo_rol: TipoRolModel) {
    tipo_rol.descripcionRol = tipo_rol.descripcionRol.toUpperCase();
    return this._coreService.put('virtualt/tipo_roles/' + tipo_rol.id, tipo_rol);
  }
}
