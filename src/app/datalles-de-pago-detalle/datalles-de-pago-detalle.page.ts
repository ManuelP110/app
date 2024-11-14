import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-datalles-de-pago-detalle',
  templateUrl: './datalles-de-pago-detalle.page.html',
  styleUrls: ['./datalles-de-pago-detalle.page.scss'],
})
export class DatallesDePagoDetallePage implements OnInit {

  
  constructor(
    private route: ActivatedRoute,
    private loading : LoadingController
  ) { }
detallesdepago: any=null;
ngOnInit(): void {
  this.cargarDetallesdepagos();
}
async cargarDetallesdepagos() {
  const iddetallesdepago = this.route.snapshot.paramMap.get('iddetallesdepago');
  const loading = await this.loading.create({
    message: 'Cargando',
    spinner: 'bubbles',
  });
  await loading.present();
  const response = await axios({
    method: 'get',
    url: "http://localhost:8080/detalles-de-pagos/"+iddetallesdepago,
    withCredentials: true,
    headers: {
      'Accept': 'application/json'
    }
  }).then((response) => {
    this.detallesdepago = response.data;
  }).catch(function (error) {
    console.log(error);
  });
  loading.dismiss();
}


}
