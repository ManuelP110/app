import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneroDetallePageRoutingModule } from './genero-detalle-routing.module';

import { GeneroDetallePage } from './genero-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneroDetallePageRoutingModule
  ],
  declarations: [GeneroDetallePage]
})
export class GeneroDetallePageModule {}
