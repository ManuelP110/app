import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-inventario-listado',
  templateUrl: './inventario-listado.page.html',
  styleUrls: ['./inventario-listado.page.scss'],
})
export class InventarioListadoPage implements OnInit {

  constructor(
    private loadingCtrl : LoadingController,
) {}
inventarios:any = [];
ngOnInit() {
  this.cargarInventarios();
}
async cargarInventarios(event?: InfiniteScrollCustomEvent) {
  const loading = await this.loadingCtrl.create({
      message : 'Cargando',
      spinner : 'bubbles',
  });
  await loading.present();
  const response = await axios({
      method: 'get',
      url : "http://localhost:8080/inventario",
      withCredentials: true,
      headers: {
          'Accept': 'application/json'
      }
  }).then( (response) => {
      this.inventarios = response.data;
      event?.target.complete();
  }).catch(function (error) {
      console.log(error);     
  });
  loading.dismiss();
}
}
