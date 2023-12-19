import { Injectable } from '@angular/core';
import { DepartamentoModel } from '@models/departamento.model';
import { CoreService } from './core.service';


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  departamento: DepartamentoModel;

  constructor(
    private _coreService: CoreService
  ) { }

  public traerDepartamentos() {
     return this._coreService.get<DepartamentoModel[]>( 'departamentos');
  }





}
