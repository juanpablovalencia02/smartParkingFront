import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuarioModel } from '@models/usuario.model';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent {

  @Input() usuarios: UsuarioModel[] = [];

  @Output() update: EventEmitter<UsuarioModel> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() create: EventEmitter<void> = new EventEmitter();
  @Output() asignation: EventEmitter<UsuarioModel> = new EventEmitter();

  numReg = 5;
  pageActual = 0;

  constructor() {
    console.log('user desde list', this.usuarios)
  }

  enviarNumeroRegistros(num: number) {
    this.numReg = num;
  }

  actualizar(usuario: UsuarioModel) {
    this.update.emit(usuario);
  }

  eliminar(idUsuario: number) {
    this.delete.emit(idUsuario);
  }

  agregar() {
    this.create.emit();
  }

  asignar(usuario: UsuarioModel) {
    console.log(usuario, 'desde list')
    this.asignation.emit(usuario);

  }
}
