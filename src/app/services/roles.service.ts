import { Injectable } from '@angular/core';
import { RolModel } from '@models/rol.model';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  rol: RolModel;
  permisos: number;
  constructor(
    private _coreService: CoreService
  ) { }

  public traerRol() {
    return this._coreService.get<RolModel[]>('roles');
  }



  public rolBynombre(nombre: string) {
    let name = nombre.toUpperCase();

    return this._coreService.get('virtualt/roles?nombre=' + name);

  }

  public rolByCompany(id: number) {

    return this._coreService.get('roles?company=' + id);

  }


  crearRol(rol: RolModel) {
    rol.name = rol.name.toUpperCase();
    return this._coreService.post<RolModel>('roles', rol);
  }


  eliminarRol(rolId: number) {
    // const url = `${this.path}/${todoId}`;
    return this._coreService.delete('roles/' + rolId);
  }
  actualizarRol(rol: RolModel) {
    rol.name = rol.name.toUpperCase();
    return this._coreService.put('roles/' + rol.id, rol);
  }
}
