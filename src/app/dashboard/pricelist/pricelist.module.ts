import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricelistPageRoutingModule } from './pricelist-routing.module';

import { PricelistPage } from './pricelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PricelistPageRoutingModule
  ],
  declarations: [PricelistPage]
})
export class PricelistPageModule {}
