import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneroListadoPageRoutingModule } from './genero-listado-routing.module';

import { GeneroListadoPage } from './genero-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneroListadoPageRoutingModule
  ],
  declarations: [GeneroListadoPage]
})
export class GeneroListadoPageModule {}
