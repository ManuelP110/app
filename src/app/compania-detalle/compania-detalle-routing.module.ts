import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniaDetallePage } from './compania-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: CompaniaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniaDetallePageRoutingModule {}
