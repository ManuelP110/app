import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-plataforma-detalle',
  templateUrl: './plataforma-detalle.page.html',
  styleUrls: ['./plataforma-detalle.page.scss'],
})
export class PlataformaDetallePage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private loading : LoadingController
  ) { }
plataforma: any=null;
ngOnInit(): void {
  this.cargarPlataformas();
}
async cargarPlataformas() {
  const idplataforma = this.route.snapshot.paramMap.get('idplataforma');
  const loading = await this.loading.create({
    message: 'Cargando',
    spinner: 'bubbles',
  });
  await loading.present();
  const response = await axios({
    method: 'get',
    url: "http://localhost:8080/plataformas/"+ idplataforma,
    withCredentials: true,
    headers: {
      'Accept': 'application/json'
    }
  }).then((response) => {
    this.plataforma = response.data;
  }).catch(function (error) {
    console.log(error);
  });
  loading.dismiss();
}


}
