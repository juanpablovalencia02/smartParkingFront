import { Injectable } from '@angular/core';
import { MenuModel } from '@models/menu.model';
import { CoreService } from './core.service';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: MenuModel;
  permisos: number;
  constructor(
    private _coreService: CoreService
  ) { }

  public traerMenus() {
    return this._coreService.get<MenuModel[]>('virtualt/menus');
  }

  public slider() {
    return this._coreService.get('virtualt/slider');
  }

  public menusByRolUsuario(idRol: number) {
    const idrol = idRol;
    this.permisos = idRol;
    return this._coreService.post('virtualt/traermenususuario', idrol);
  }

  // public menusByRol(idRol: number) {
  //   const idrol = idRol;
  //   this.permisos = idRol;
  //   return this._coreService.post('virtualt/traermenus', idrol);
  // }
  public menusByrol() {

    return this._coreService.get<any[]>('virtualt/menus_rol');
  }
  public permissionsRole(idRol: number) {

    return this._coreService.get<any[]>('permissions_role?rol=' + idRol);
  }
  public findRoles() {

    return this._coreService.get<any[]>('virtualt/find_roles');
  }



  public info(idRol: number) {
    const idrol = idRol;
    this.permisos = idRol;
    return this._coreService.post('virtualt/permisos', idrol);
  }

  crearMenu(menu: MenuModel) {

    menu.nombreMenu = menu.nombreMenu.toUpperCase();
    return this._coreService.post<MenuModel>('virtualt/menus', menu);
  }


  eliminarMenu(menuId: number) {

    return this._coreService.delete('virtualt/menus/' + menuId);
  }
  actualizarMenu(menu: MenuModel) {
    menu.nombreMenu = menu.nombreMenu.toUpperCase();
    return this._coreService.put('virtualt/menus/' + menu.id, menu);
  }
}
