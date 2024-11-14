import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneroListadoPage } from './genero-listado.page';

const routes: Routes = [
  {
    path: '',
    component: GeneroListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneroListadoPageRoutingModule {}
