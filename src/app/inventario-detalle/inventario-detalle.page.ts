import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-inventario-detalle',
  templateUrl: './inventario-detalle.page.html',
  styleUrls: ['./inventario-detalle.page.scss'],
})
export class InventarioDetallePage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private loading : LoadingController
  ) { }
inventario: any=null;
ngOnInit(): void {
  this.cargarInventarios();
}
async cargarInventarios() {
  const idinventario = this.route.snapshot.paramMap.get('idinventario');
  const loading = await this.loading.create({
    message: 'Cargando',
    spinner: 'bubbles',
  });
  await loading.present();
  const response = await axios({
    method: 'get',
    url: "http://localhost:8080/inventarios/"+idinventario,
    withCredentials: true,
    headers: {
      'Accept': 'application/json'
    }
  }).then((response) => {
    this.inventario = response.data;
  }).catch(function (error) {
    console.log(error);
  });
  loading.dismiss();
}


}
