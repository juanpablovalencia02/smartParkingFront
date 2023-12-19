import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoPagoComponent } from './page/tipo-pago/tipo-pago.component';

const routes: Routes = [
  {
    path: '',
    component: TipoPagoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoPagoRoutingModule { }
