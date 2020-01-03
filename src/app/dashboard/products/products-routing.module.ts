import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  },
  {
    path: 'allproducts',
    loadChildren: () => import('./allproducts/allproducts.module').then( m => m.AllproductsPageModule)
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
export class ProductsPageRoutingModule {}
