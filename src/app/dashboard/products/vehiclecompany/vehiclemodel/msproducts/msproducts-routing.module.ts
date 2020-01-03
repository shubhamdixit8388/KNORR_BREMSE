import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsproductsPage } from './msproducts.page';

const routes: Routes = [
  {
    path: '',
    component: MsproductsPage
  },
  {
    path: 'productdetails/:productId',
    loadChildren: () => import('./productdetails/productdetails.module').then( m => m.ProductdetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsproductsPageRoutingModule {}
