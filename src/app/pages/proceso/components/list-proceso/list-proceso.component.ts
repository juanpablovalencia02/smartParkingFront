import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProcesoModel } from '@models/proceso.model';

@Component({
  selector: 'app-list-proceso',
  templateUrl: './list-proceso.component.html',
  styleUrls: ['./list-proceso.component.scss']
})
export class ListProcesoComponent {

  @Input() procesos: ProcesoModel[] = [];

  @Output() update: EventEmitter<ProcesoModel> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() create: EventEmitter<void> = new EventEmitter();

  numReg = 5;
  pageActual = 0;

  constructor() {
  }

  enviarNumeroRegistros(num: number) {
    this.numReg = num;
  }

  actualizar(proceso: ProcesoModel) {
    this.update.emit(proceso);
  }

  eliminar(idProceso: number) {
    this.delete.emit(idProceso);
  }

  agregar() {
    this.create.emit();
  }

}
