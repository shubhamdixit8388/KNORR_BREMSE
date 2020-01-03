import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsproductsPageRoutingModule } from './msproducts-routing.module';

import { MsproductsPage } from './msproducts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MsproductsPageRoutingModule
  ],
  declarations: [MsproductsPage]
})
export class MsproductsPageModule {}
