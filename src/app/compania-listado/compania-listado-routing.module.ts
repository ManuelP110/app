import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniaListadoPage } from './compania-listado.page';

const routes: Routes = [
  {
    path: '',
    component: CompaniaListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniaListadoPageRoutingModule {}
