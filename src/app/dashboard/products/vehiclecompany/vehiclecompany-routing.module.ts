import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclecompanyPage } from './vehiclecompany.page';

const routes: Routes = [
  {
    path: '',
    component: VehiclecompanyPage
  },
  {
    path: 'vehiclemodel/:vehicleName',
    loadChildren: () => import('./vehiclemodel/vehiclemodel.module').then( m => m.VehiclemodelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiclecompanyPageRoutingModule {}
