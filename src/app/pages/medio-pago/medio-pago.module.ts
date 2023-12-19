import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedioPagoRoutingModule } from './medio-pago-routing.module';
import { AddMedioPagoComponent } from './components/add-medio-pago/add-medio-pago.component';
import { ListMedioPagoComponent } from './components/list-medio-pago/list-medio-pago.component';
import { MedioPagoComponent } from './page/medio-pago/medio-pago.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComunModule } from '@components/comun.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AddMedioPagoComponent,
    ListMedioPagoComponent,
    MedioPagoComponent
  ],
  imports: [
    CommonModule,
    MedioPagoRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ComunModule,
    SweetAlert2Module.forChild()
  ]
})
export class MedioPagoModule { }
