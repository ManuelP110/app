import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-juegos-listado',
  templateUrl: './juegos-listado.page.html',
  styleUrls: ['./juegos-listado.page.scss'],
})
export class JuegosListadoPage implements OnInit {
  constructor(
  private loadingCtrl : LoadingController,
) {}
juegos:any = [];
ngOnInit() {
  this.cargarJuegos();
}
async cargarJuegos(event?: InfiniteScrollCustomEvent) {
  const loading = await this.loadingCtrl.create({
      message : 'Cargando',
      spinner : 'bubbles',
  });
  await loading.present();
  const response = await axios({
      method: 'get',
      url : "http://localhost:8080/juegos",
      withCredentials: true,
      headers: {
          'Accept': 'application/json'
      }
  }).then( (response) => {
      this.juegos = response.data;
      event?.target.complete();
  }).catch(function (error) {
      console.log(error);     
  });
  loading.dismiss();

}
}