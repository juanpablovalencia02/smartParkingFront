import { Component, OnInit } from '@angular/core';
import { RolModel } from '@models/rol.model';
import { RolesService } from '@services/roles.service';
import { UINotificationService } from '@services/uinotification.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent implements OnInit {

  private showModalRol = false;

  rol: RolModel = null;
  roles: RolModel[] = [];

  constructor(
    private _uiNotificationService: UINotificationService,
    private _rolService: RolesService
  ) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this._rolService.traerRol()
      .subscribe(roles => {
        this.roles = roles;
      }, error => {
        this._uiNotificationService.error("Error de conexión");
      });
  }

  eliminarRol(rolId: number) {
    this._rolService.eliminarRol(rolId).subscribe(() => {
      this.getRoles();
    })
  }

  actualizarRol(rol: RolModel) {
    this.rol = rol;
    this.showModalRol = true;
  }

  createRol(){
    this.rol = null;
    this.showModalRol = true;
  }

  guardarRol(rol: RolModel) {
    if (rol.id) {
      this._rolService.actualizarRol(rol).subscribe(rol => {
        this.getRoles();
        this.reset();
      });
    } else {
      this._rolService.crearRol(rol).subscribe(rol => {
        this.getRoles();
        this.reset();
      })
    }
  }

  reset() {
    this.rol = null;
    this.showModalRol = false;
  }
}
