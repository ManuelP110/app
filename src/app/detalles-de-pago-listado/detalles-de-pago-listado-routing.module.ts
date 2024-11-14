import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesDePagoListadoPage } from './detalles-de-pago-listado.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesDePagoListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesDePagoListadoPageRoutingModule {}
