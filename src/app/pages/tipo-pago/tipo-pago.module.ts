import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoPagoRoutingModule } from './tipo-pago-routing.module';
import { TipoPagoComponent } from './page/tipo-pago/tipo-pago.component';
import { ListTipoPagoComponent } from './components/list-tipo-pago/list-tipo-pago.component';
import { AddTipoPagoComponent } from './components/add-tipo-pago/add-tipo-pago.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComunModule } from '@components/comun.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    TipoPagoComponent,
    ListTipoPagoComponent,
    AddTipoPagoComponent
  ],
  imports: [
    CommonModule,
    TipoPagoRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ComunModule,
    SweetAlert2Module.forChild()
  ]
})
export class TipoPagoModule { }
