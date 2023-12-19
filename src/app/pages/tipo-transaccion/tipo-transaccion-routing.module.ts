import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoTransaccionComponent } from './page/tipo-transaccion/tipo-transaccion.component';

const routes: Routes = [
  {
    path: '',
    component: TipoTransaccionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoTransaccionRoutingModule { }
