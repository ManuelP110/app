import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioListadoPage } from './inventario-listado.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioListadoPageRoutingModule {}
