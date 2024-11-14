import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegosDetallePage } from './juegos-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: JuegosDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosDetallePageRoutingModule {}
