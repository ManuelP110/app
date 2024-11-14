import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-pago-listado',
  templateUrl: './pago-listado.page.html',
  styleUrls: ['./pago-listado.page.scss'],
})
export class PagoListadoPage implements OnInit {

  constructor(
    private loadingCtrl : LoadingController,
) {}
pagos:any = [];
ngOnInit() {
  this.cargarPagos();
}
async cargarPagos(event?: InfiniteScrollCustomEvent) {
  const loading = await this.loadingCtrl.create({
      message : 'Cargando',
      spinner : 'bubbles',
  });
  await loading.present();
  const response = await axios({
      method: 'get',
      url : "http://localhost:8080/pago",
      withCredentials: true,
      headers: {
          'Accept': 'application/json'
      }
  }).then( (response) => {
      this.pagos = response.data;
      event?.target.complete();
  }).catch(function (error) {
      console.log(error);     
  });
  loading.dismiss();
}

}
