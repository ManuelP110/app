import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-compania-detalle',
  templateUrl: './compania-detalle.page.html',
  styleUrls: ['./compania-detalle.page.scss'],
})
export class CompaniaDetallePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private loading : LoadingController
  ) { }
compania: any=null;
ngOnInit(): void {
  this.cargarCompanias();
}
async cargarCompanias() {
  const idcompania = this.route.snapshot.paramMap.get('idcompania');
  const loading = await this.loading.create({
    message: 'Cargando',
    spinner: 'bubbles',
  });
  await loading.present();
  const response = await axios({
    method: 'get',
    url: "http://localhost:8080/companias/"+idcompania,
    withCredentials: true,
    headers: {
      'Accept': 'application/json'
    }
  }).then((response) => {
    this.compania = response.data;
  }).catch(function (error) {
    console.log(error);
  });
  loading.dismiss();
}

}
