import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegosListadoPage } from './juegos-listado.page';

const routes: Routes = [
  {
    path: '',
    component: JuegosListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosListadoPageRoutingModule {}
