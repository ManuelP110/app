import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegosDetallePageRoutingModule } from './juegos-detalle-routing.module';

import { JuegosDetallePage } from './juegos-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegosDetallePageRoutingModule
  ],
  declarations: [JuegosDetallePage]
})
export class JuegosDetallePageModule {}
