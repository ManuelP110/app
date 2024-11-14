import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoListadoPage } from './pago-listado.page';

const routes: Routes = [
  {
    path: '',
    component: PagoListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoListadoPageRoutingModule {}
