import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-cliente-listado',
  templateUrl: './cliente-listado.page.html',
  styleUrls: ['./cliente-listado.page.scss'],
})
export class ClienteListadoPage implements OnInit {

  constructor(
    private loadingCtrl : LoadingController,
) {}
clientes:any = [];
ngOnInit() {
  this.cargarClientes();
}
async cargarClientes(event?: InfiniteScrollCustomEvent) {
  const loading = await this.loadingCtrl.create({
      message : 'Cargando',
      spinner : 'bubbles',
  });
  await loading.present();
  const response = await axios({
      method: 'get',
      url : "http://localhost:8080/cliente",
      withCredentials: true,
      headers: {
          'Accept': 'application/json'
      }
  }).then( (response) => {
      this.clientes = response.data;
      event?.target.complete();
  }).catch(function (error) {
      console.log(error);     
  });
  loading.dismiss();
}

}
