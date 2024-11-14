import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteListadoPageRoutingModule } from './cliente-listado-routing.module';

import { ClienteListadoPage } from './cliente-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteListadoPageRoutingModule
  ],
  declarations: [ClienteListadoPage]
})
export class ClienteListadoPageModule {}
