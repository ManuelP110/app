import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteListadoPage } from './cliente-listado.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteListadoPageRoutingModule {}
