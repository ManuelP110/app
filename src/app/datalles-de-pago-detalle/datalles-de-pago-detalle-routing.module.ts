import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatallesDePagoDetallePage } from './datalles-de-pago-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: DatallesDePagoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatallesDePagoDetallePageRoutingModule {}
