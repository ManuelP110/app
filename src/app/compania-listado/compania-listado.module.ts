import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompaniaListadoPageRoutingModule } from './compania-listado-routing.module';

import { CompaniaListadoPage } from './compania-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompaniaListadoPageRoutingModule
  ],
  declarations: [CompaniaListadoPage]
})
export class CompaniaListadoPageModule {}
