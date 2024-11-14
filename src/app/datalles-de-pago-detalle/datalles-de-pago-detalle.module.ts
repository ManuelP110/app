import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatallesDePagoDetallePageRoutingModule } from './datalles-de-pago-detalle-routing.module';

import { DatallesDePagoDetallePage } from './datalles-de-pago-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatallesDePagoDetallePageRoutingModule
  ],
  declarations: [DatallesDePagoDetallePage]
})
export class DatallesDePagoDetallePageModule {}
