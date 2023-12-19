import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RolModel } from '@models/rol.model';
import { UsuarioModel } from '@models/usuario.model';

@Component({
  selector: 'app-asignar-rol',
  templateUrl: './asignar-rol.component.html',
  styleUrls: ['./asignar-rol.component.scss']
})
export class AsignarRolComponent implements OnInit {
  @Output() asignation: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Input() roles: any[] = [];
  @Input() usuario: UsuarioModel;
  rol: number[];
  constructor() { }

  ngOnInit(): void {
  }
  closeModal() {
    this.cancel.emit();
  }

  asignarRol() {
    this.asignation.emit(this.getRoles());


  }

  getRoles() {
    return {
      roles: this.roles.filter(r => r.checked).map(rol => rol.id),
      idActivation: this.usuario.id
    }
  }
}
