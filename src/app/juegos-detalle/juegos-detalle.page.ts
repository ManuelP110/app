import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-juegos-detalle',
  templateUrl: './juegos-detalle.page.html',
  styleUrls: ['./juegos-detalle.page.scss'],
})
export class JuegosDetallePage implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private loading : LoadingController
  ) { }
juegos: any=null;
ngOnInit(): void {
  this.cargarJuegos();
}
async cargarJuegos() {
  const idjuegos = this.route.snapshot.paramMap.get('idjuegos');
  const loading = await this.loading.create({
    message: 'Cargando',
    spinner: 'bubbles',
  });
  await loading.present();
  const response = await axios({
    method: 'get',
    url: "http://localhost:8080/juegos/"+idjuegos,
    withCredentials: true,
    headers: {
      'Accept': 'application/json'
    }
  }).then((response) => {
    this.juegos = response.data;
  }).catch(function (error) {
    console.log(error);
  });
  loading.dismiss();
}


}
