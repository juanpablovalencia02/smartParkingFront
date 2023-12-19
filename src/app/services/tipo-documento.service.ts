import { Injectable } from '@angular/core';
import { TipoDocumentoModel } from '@models/tipo-documento.model';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  // tipoDocumento: RolModel;
  permisos: number;
  constructor(
    private _coreService: CoreService
  ) { }

  public tipoDocument(estado: number, proceso: number) {
    const state = estado;
    const tipo = proceso;
    return this._coreService.get('tipo_documentos?estado=' + state + '&proceso=' + tipo);

  }

  public traerTipoDocumentos() {
    return this._coreService.get<TipoDocumentoModel[]>('tipo_documentos');
  }


  crearTipoDocumento(tipoDocumento: TipoDocumentoModel) {
    tipoDocumento.tituloDocumento = tipoDocumento.tituloDocumento.toUpperCase();
    return this._coreService.post<TipoDocumentoModel>('tipo_documentos', tipoDocumento);
  }


  eliminarTipoDocumento(tipoDocId: number) {
    // const url = `${this.path}/${todoId}`;
    return this._coreService.delete('tipo_documentos/' + tipoDocId);
  }
  actualizarTipoDocumento(tipoDocumento: TipoDocumentoModel) {
    tipoDocumento.tituloDocumento = tipoDocumento.tituloDocumento.toUpperCase();
    return this._coreService.put('tipo_documentos/' + tipoDocumento.id, tipoDocumento);
  }
}
