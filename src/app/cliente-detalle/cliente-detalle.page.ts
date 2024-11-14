import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.page.html',
  styleUrls: ['./cliente-detalle.page.scss'],
})
export class ClienteDetallePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private loading : LoadingController
  ) { }
cliente: any=null;
ngOnInit(): void {
  this.cargarClientes();
}
async cargarClientes() {
  const idcliente = this.route.snapshot.paramMap.get('idcliente');
  const loading = await this.loading.create({
    message: 'Cargando',
    spinner: 'bubbles',
  });
  await loading.present();
  const response = await axios({
    method: 'get',
    url: "http://localhost:8080/clientes/"+idcliente,
    withCredentials: true,
    headers: {
      'Accept': 'application/json'
    }
  }).then((response) => {
    this.cliente = response.data;
  }).catch(function (error) {
    console.log(error);
  });
  loading.dismiss();
}

}
