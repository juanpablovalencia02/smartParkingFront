import { Injectable } from '@angular/core';
import { CiudadModel } from '@models/ciudad.model';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  ciudad: CiudadModel;
  constructor(
    private _coreService: CoreService
  ) { }

  public traerCiudades() {
     return this._coreService.get<CiudadModel[]>('ciudades');
  }

  public ciudadesByDep(iddepartamento: number) {
    const url = `ciudades/departamento/${iddepartamento}`;
    return this._coreService.get<CiudadModel[]>(url);

  }
}
