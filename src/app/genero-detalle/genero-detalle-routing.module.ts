import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneroDetallePage } from './genero-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: GeneroDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneroDetallePageRoutingModule {}
