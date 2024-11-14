import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompaniaDetallePageRoutingModule } from './compania-detalle-routing.module';

import { CompaniaDetallePage } from './compania-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompaniaDetallePageRoutingModule
  ],
  declarations: [CompaniaDetallePage]
})
export class CompaniaDetallePageModule {}
