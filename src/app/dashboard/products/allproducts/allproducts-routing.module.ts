import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllproductsPage } from './allproducts.page';

const routes: Routes = [
  {
    path: '',
    component: AllproductsPage
  },
  {
    path: ':productId',
    loadChildren: () => import('./productdetails/productdetails.module').then( m => m.ProductdetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllproductsPageRoutingModule {}
