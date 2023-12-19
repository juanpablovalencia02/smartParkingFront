import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {

  @Input()
  status: string;

  get classStatus() {
    let claseText = ''
    switch (this.status.toLocaleLowerCase()) {
      case 'activo':
      case 'aceptado':
      case 'aprobado':
        claseText = 'text-success'
        break;
      case 'pendiente':
      case 'cancelado':
        claseText = 'text-warning'
        break;
      case 'inactivo':
      case 'reprobado':
        claseText = 'text-danger'
        break;
      case 'cerrado':
        claseText = 'text-muted'//gris
        break;
      case 'cursando':
        claseText = 'text-orange'
        break;
    }
    return `status ${claseText}`
  }
}
