import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-genero-detalle',
  templateUrl: './genero-detalle.page.html',
  styleUrls: ['./genero-detalle.page.scss'],
})
export class GeneroDetallePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private loading : LoadingController
  ) { }
generos: any=null;
ngOnInit(): void {
  this.cargarGeneros();
}
async cargarGeneros() {
  const idgenero = this.route.snapshot.paramMap.get('idgenero');
  const loading = await this.loading.create({
    message: 'Cargando',
    spinner: 'bubbles',
  });
  await loading.present();
  const response = await axios({
    method: 'get',
    url: "http://localhost:8080/generos/"+idgenero,
    withCredentials: true,
    headers: {
      'Accept': 'application/json'
    }
  }).then((response) => {
    this.generos = response.data;
  }).catch(function (error) {
    console.log(error);
  });
  loading.dismiss();
}

}
