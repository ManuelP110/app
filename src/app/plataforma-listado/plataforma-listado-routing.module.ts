import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlataformaListadoPage } from './plataforma-listado.page';

const routes: Routes = [
  {
    path: '',
    component: PlataformaListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlataformaListadoPageRoutingModule {}
