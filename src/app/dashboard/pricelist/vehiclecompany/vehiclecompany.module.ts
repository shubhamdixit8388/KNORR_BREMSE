import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiclecompanyPageRoutingModule } from './vehiclecompany-routing.module';

import { VehiclecompanyPage } from './vehiclecompany.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiclecompanyPageRoutingModule
  ],
  declarations: [VehiclecompanyPage]
})
export class VehiclecompanyPageModule {}
