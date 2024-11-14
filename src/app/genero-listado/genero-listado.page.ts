import { Component, OnInit } from '@angular/core';
import { AlertController, InfiniteScrollCustomEvent, LoadingController, ModalController } from '@ionic/angular';
import axios from 'axios';
import { GeneroDetallePage } from '../genero-detalle/genero-detalle.page';
import { Router } from '@angular/router';



@Component({
  selector: 'app-genero-listado',
  templateUrl: './genero-listado.page.html',
  styleUrls: ['./genero-listado.page.scss'],
})
export class GeneroListadoPage implements OnInit {

  constructor(
    private loadingCtrl : LoadingController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private router: Router,

) {}
generos:any = [];
ngOnInit() {
  this.cargarGeneros();
}
async cargarGenero(event?: InfiniteScrollCustomEvent) {
  const loading = await this.loadingCtrl.create({
      message : 'Cargando',
      spinner : 'bubbles',
  });
  await loading.present();
  const response = await axios({
      method: 'get',
      url : "http://localhost:8080/genero",
      withCredentials: true,
      headers: {
          'Accept': 'application/json'
      }
  }).then( (response) => {
      this.generos = response.data;
      event?.target.complete();
  }).catch(function (error) {
      console.log(error);     
  });
  loading.dismiss();
}
async new() {
  const paginaModal = await this.modalCtrl.create({
  component: GeneroDetallePage,
  breakpoints : [0, 0.3, 0.5, 0.95],
  initialBreakpoint: 0.95
  });
  await paginaModal.present();
}
async cargarGeneros() {
  const response = await axios({
  method: 'get',
  url :"http://localhost:8080/genero",
  withCredentials: true,
  headers: {
      'Accept': 'application/json'
  }
  }).then( (response) => {
  this.generos = response.data;
  }).catch(function (error) {
  console.log(error);     
  });
}
async editar(idgenero: string) {

  const paginaModal = await this.modalCtrl.create({
  component: GeneroDetallePage,
  componentProps: {
      'genero': this.generos
  },
  breakpoints: [0, 0.3, 0.5, 0.95],
  initialBreakpoint: 0.95
  });
  await paginaModal.present();

  paginaModal.onDidDismiss().then((data) => {
      this.cargarGeneros();
  });
}
}


