import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlataformaListadoPageRoutingModule } from './plataforma-listado-routing.module';

import { PlataformaListadoPage } from './plataforma-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlataformaListadoPageRoutingModule
  ],
  declarations: [PlataformaListadoPage]
})
export class PlataformaListadoPageModule {}
