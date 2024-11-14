import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioListadoPageRoutingModule } from './inventario-listado-routing.module';

import { InventarioListadoPage } from './inventario-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioListadoPageRoutingModule
  ],
  declarations: [InventarioListadoPage]
})
export class InventarioListadoPageModule {}
