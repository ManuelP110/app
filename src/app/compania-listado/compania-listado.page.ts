import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-compania-listado',
  templateUrl: './compania-listado.page.html',
  styleUrls: ['./compania-listado.page.scss'],
})
export class CompaniaListadoPage implements OnInit {

  constructor(
    private loadingCtrl : LoadingController,
) {}
companias:any = [];
ngOnInit() {
  this.cargarCompanias();
}
async cargarCompanias(event?: InfiniteScrollCustomEvent) {
  const loading = await this.loadingCtrl.create({
      message : 'Cargando',
      spinner : 'bubbles',
  });
  await loading.present();
  const response = await axios({
      method: 'get',
      url : "http://localhost:8080/compania",
      withCredentials: true,
      headers: {
          'Accept': 'application/json'
      }
  }).then( (response) => {
      this.companias = response.data;
      event?.target.complete();
  }).catch(function (error) {
      console.log(error);     
  });
  loading.dismiss();
}


}
