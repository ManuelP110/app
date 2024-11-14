import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-pago-detalle',
  templateUrl: './pago-detalle.page.html',
  styleUrls: ['./pago-detalle.page.scss'],
})
export class PagoDetallePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private loading : LoadingController
  ) { }
pago: any=null;
ngOnInit(): void {
  this.cargarClientes();
}
async cargarClientes() {
  const idpago = this.route.snapshot.paramMap.get('idpago');
  const loading = await this.loading.create({
    message: 'Cargando',
    spinner: 'bubbles',
  });
  await loading.present();
  const response = await axios({
    method: 'get',
    url: "http://localhost:8080/pagos/"+idpago,
    withCredentials: true,
    headers: {
      'Accept': 'application/json'
    }
  }).then((response) => {
    this.pago = response.data;
  }).catch(function (error) {
    console.log(error);
  });
  loading.dismiss();
}

}
