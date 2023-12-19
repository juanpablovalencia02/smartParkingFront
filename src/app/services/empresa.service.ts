import { Injectable } from '@angular/core';
import { EmpresaModel } from '@models/empresa.model';
// import { AsignarRolEmpresaModel } from '@models/asignar-rol-empresa.model';
import { CoreService } from './core.service';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  empresa: EmpresaModel;
  constructor(
    private _coreService: CoreService
  ) { }

  public traerEmpresaPrincipal() {
    return this._coreService.get<EmpresaModel>('empresas/principal');

  }

  public traerEmpresas() {

    return this._coreService.get<EmpresaModel[]>('list_companies');

  }

  public getImagenBase() {
    return this._coreService.get<any>('empresa-picture');

  }
  crearEmpresa(empresa: FormData) {
    return this._coreService.post<EmpresaModel>('empresas', empresa);
  }

  eliminarEmpresa(empresaId: number) {
    return this._coreService.delete('empresas/' + empresaId);
  }

  actualizarEmpresa(empresa: FormData) {
    return this._coreService.put<EmpresaModel>('empresas/' + empresa.get('id'), empresa);
  }
  // crearRolEmpresa(rolEmpresa: AsignarRolEmpresaModel) {
  //   console.log('objeto rol', rolEmpresa);
  //   return this._coreService.post<AsignarRolEmpresaModel>('asignacion_rol_empresas', rolEmpresa);
  // }
}
