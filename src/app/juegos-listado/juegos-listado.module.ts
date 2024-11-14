import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegosListadoPageRoutingModule } from './juegos-listado-routing.module';

import { JuegosListadoPage } from './juegos-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegosListadoPageRoutingModule
  ],
  declarations: [JuegosListadoPage]
})
export class JuegosListadoPageModule {}
