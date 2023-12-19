import { Component, OnInit } from '@angular/core';
import { ProcesoModel } from '@models/proceso.model';
import { ProcesoService } from '@services/proceso.service';
import { UINotificationService } from '@services/uinotification.service';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.scss']
})
export class ProcesoComponent implements OnInit {

  private showModalProceso = false;

  proceso: ProcesoModel = null;
  procesos: ProcesoModel[] = [];

  constructor(
    private _uiNotificationService: UINotificationService,
    private _procesoService: ProcesoService
  ) { }

  ngOnInit(): void {
    this.getProcesos();
  }

  getProcesos() {
    this._procesoService.traerProcesos()
      .subscribe(proceso => {
        this.procesos = proceso;
      }, error => {
        this._uiNotificationService.error("Error de conexión");
      });
  }

  eliminarProceso(procesoId: number) {
    this._procesoService.eliminarProceso(procesoId).subscribe(() => {
      this.getProcesos();
    })
  }

  actualizarProceso(proceso: ProcesoModel) {
    this.proceso = proceso;
    this.showModalProceso = true;
  }

  createProceso() {
    this.proceso = null;
    this.showModalProceso = true;
  }

  guardarProceso(proceso: ProcesoModel) {
    if (proceso.id) {
      this._procesoService.actualizarProceso(proceso).subscribe(rol => {
        this.getProcesos();
        this.reset();
      });
    } else {
      this._procesoService.crearProceso(proceso).subscribe(rol => {
        this.getProcesos();
        this.reset();
      })
    }
  }

  reset() {
    this.proceso = null;
    this.showModalProceso = false;
  }

}
