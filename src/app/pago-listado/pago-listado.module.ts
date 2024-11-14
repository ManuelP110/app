import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoListadoPageRoutingModule } from './pago-listado-routing.module';

import { PagoListadoPage } from './pago-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoListadoPageRoutingModule
  ],
  declarations: [PagoListadoPage]
})
export class PagoListadoPageModule {}
