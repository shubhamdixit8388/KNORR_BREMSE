import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PricelistPage } from './pricelist.page';

const routes: Routes = [
  {
    path: '',
    component: PricelistPage
  },
  {
    path: 'cwproducts',
    loadChildren: () => import('./cwproducts/cwproducts.module').then( m => m.CwproductsPageModule)
  },
  {
    path: 'vehiclecompany',
    loadChildren: () => import('./vehiclecompany/vehiclecompany.module').then( m => m.VehiclecompanyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PricelistPageRoutingModule {}
