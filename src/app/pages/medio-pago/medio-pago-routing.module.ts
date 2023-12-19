import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedioPagoComponent } from './page/medio-pago/medio-pago.component';

const routes: Routes = [
  {
    path: '',
    component: MedioPagoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedioPagoRoutingModule { }
