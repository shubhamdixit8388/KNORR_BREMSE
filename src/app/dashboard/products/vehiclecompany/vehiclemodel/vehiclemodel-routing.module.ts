import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclemodelPage } from './vehiclemodel.page';

const routes: Routes = [
  {
    path: '',
    component: VehiclemodelPage
  },
  {
    path: 'msproducts/:msproductName',
    loadChildren: () => import('./msproducts/msproducts.module').then( m => m.MsproductsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiclemodelPageRoutingModule {}
