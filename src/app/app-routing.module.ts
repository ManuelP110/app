import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'genero-listado',
    loadChildren: () => import('./genero-listado/genero-listado.module').then( m => m.GeneroListadoPageModule)
  },
  {
    path: 'juegos-listado',
    loadChildren: () => import('./juegos-listado/juegos-listado.module').then( m => m.JuegosListadoPageModule)
  },
  {
    path: 'plataforma-listado',
    loadChildren: () => import('./plataforma-listado/plataforma-listado.module').then( m => m.PlataformaListadoPageModule)
  },
  {
    path: 'compania-listado',
    loadChildren: () => import('./compania-listado/compania-listado.module').then( m => m.CompaniaListadoPageModule)
  },
  {
    path: 'cliente-listado',
    loadChildren: () => import('./cliente-listado/cliente-listado.module').then( m => m.ClienteListadoPageModule)
  },
  {
    path: 'inventario-listado',
    loadChildren: () => import('./inventario-listado/inventario-listado.module').then( m => m.InventarioListadoPageModule)
  },
  {
    path: 'pago-listado',
    loadChildren: () => import('./pago-listado/pago-listado.module').then( m => m.PagoListadoPageModule)
  },
  {
    path: 'detalles-de-pago-listado',
    loadChildren: () => import('./detalles-de-pago-listado/detalles-de-pago-listado.module').then( m => m.DetallesDePagoListadoPageModule)
  },
  {
    path: 'genero-detalle/:idgenero',
    loadChildren: () => import('./genero-detalle/genero-detalle.module').then( m => m.GeneroDetallePageModule)
  },
  {
    path: 'juegos-detalle/:idjuegos',
    loadChildren: () => import('./juegos-detalle/juegos-detalle.module').then( m => m.JuegosDetallePageModule)
  },
  {
    path: 'plataforma-detalle/:idplataforma',
    loadChildren: () => import('./plataforma-detalle/plataforma-detalle.module').then( m => m.PlataformaDetallePageModule)
  },
  {
    path: 'compania-detalle/:idcompania',
    loadChildren: () => import('./compania-detalle/compania-detalle.module').then( m => m.CompaniaDetallePageModule)
  },
  {
    path: 'cliente-detalle/:idcliente',
    loadChildren: () => import('./cliente-detalle/cliente-detalle.module').then( m => m.ClienteDetallePageModule)
  },
  {
    path: 'pago-detalle/:idpago',
    loadChildren: () => import('./pago-detalle/pago-detalle.module').then( m => m.PagoDetallePageModule)
  },
  {
    path: 'inventario-detalle/:idinventario',
    loadChildren: () => import('./inventario-detalle/inventario-detalle.module').then( m => m.InventarioDetallePageModule)
  },
  {
    path: 'detalles-de-pago-detalle/:iddetallesdepago',
    loadChildren: () => import('./datalles-de-pago-detalle/datalles-de-pago-detalle.module').then( m => m.DatallesDePagoDetallePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
