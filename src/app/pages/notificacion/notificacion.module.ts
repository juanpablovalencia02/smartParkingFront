import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComunModule } from '@components/comun.module';
import { NotificacionComponent } from './components/notificacion.component';
import { NotificacionRoutingModule } from './notificacion-routing.module';



@NgModule({
  declarations: [
    NotificacionComponent
  ],
  imports: [
    CommonModule,
    NotificacionRoutingModule,
    ReactiveFormsModule,
    ComunModule
  ]
})
export class NotificacionModule { }
