import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesDePagoListadoPageRoutingModule } from './detalles-de-pago-listado-routing.module';

import { DetallesDePagoListadoPage } from './detalles-de-pago-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesDePagoListadoPageRoutingModule
  ],
  declarations: [DetallesDePagoListadoPage]
})
export class DetallesDePagoListadoPageModule {}
