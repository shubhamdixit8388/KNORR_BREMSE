import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiclemodelPageRoutingModule } from './vehiclemodel-routing.module';

import { VehiclemodelPage } from './vehiclemodel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiclemodelPageRoutingModule
  ],
  declarations: [VehiclemodelPage]
})
export class VehiclemodelPageModule {}
