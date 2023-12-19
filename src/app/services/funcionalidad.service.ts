// import { Injectable } from '@angular/core';
// import { PermisoModel } from '@models/permiso.model';
// import { CoreService } from './core.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class FuncionalidadService {
//   funcionalidad: FuncionalidadModel;
//   constructor(
//     private _coreService: CoreService

//   ) { }

//   /**
// //    * en este metodo se consule el servicio de funcionalidades,
// //    * que corresponde a una lista de todas las funcionalidades registradas en el sistema
// //    * las rutas que se ven (virtualt/funcionalidades) son proporcionadas por el backend
// //    */
//   // public traerFuncionalidad() {
//   //   return this._coreService.get('/funcionalidades', {
//   //   }).pipe(map((res: Response) => {
//   //     return res
//   //   }));
//   // }

//   public traerFuncionalidad() {
//     return this._coreService.get<FuncionalidadModel[]>('virtualt/funcionalidades');
//   }

//   crearFuncionalidad(funcModel: FuncionalidadModel) {

//     funcModel.name = funcModel.name.toUpperCase();
//     funcModel.guard_name = funcModel.guard_name;
//     funcModel.idmenu = funcModel.idmenu;
//     funcModel.idmodulo = funcModel.idmodulo;
//     return this._coreService.post<FuncionalidadModel>('virtualt/funcionalidades', funcModel);
//   }


//   eliminarFuncionalidad(menuId: number) {
//     // const url = `${this.path}/${todoId}`;
//     return this._coreService.post('virtualt/eliminarfuncionalidad', menuId);
//   }

//   actualizarFuncionalidad(funcModel: FuncionalidadModel) {
//     funcModel.name = funcModel.name.toUpperCase();
//     funcModel.guard_name = funcModel.guard_name;
//     funcModel.idmenu = funcModel.idmenu;
//     funcModel.idmodulo = funcModel.idmodulo;
//     return this._coreService.put('virtualt/funcionalidades' + funcModel.id, funcModel);
//   }

// }
