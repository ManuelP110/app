import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlataformaDetallePage } from './plataforma-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: PlataformaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlataformaDetallePageRoutingModule {}
