import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-detalles-de-pago-listado',
  templateUrl: './detalles-de-pago-listado.page.html',
  styleUrls: ['./detalles-de-pago-listado.page.scss'],
})
export class DetallesDePagoListadoPage implements OnInit {

  constructor(
    private loadingCtrl : LoadingController,
) {}
detallesdepagos:any = [];
ngOnInit() {
  this.cargarDetallesdepago();
}
async cargarDetallesdepago(event?: InfiniteScrollCustomEvent) {
  const loading = await this.loadingCtrl.create({
      message : 'Cargando',
      spinner : 'bubbles',
  });
  await loading.present();
  const response = await axios({
      method: 'get',
      url : "http://localhost:8080/detalles-de-pago",
      withCredentials: true,
      headers: {
          'Accept': 'application/json'
      }
  }).then( (response) => {
      this.detallesdepagos= response.data;
      event?.target.complete();
  }).catch(function (error) {
      console.log(error);     
  });
  loading.dismiss();
}


}
